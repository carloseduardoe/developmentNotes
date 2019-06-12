// node add-equipment-class.js

const MongoClient = require('mongodb').MongoClient,
  ObjectID = require('mongodb').ObjectID,
  assert = require('assert'),
  path = require('path'),
  fs = require('fs'),
  dotenv = require('dotenv').config({path: path.join(__dirname, '../../../.env')});

let url = dotenv.DB_MONGO_URL,
    dbName = dotenv.DB_MONGO_DATABASE,
    filepath = "../json/Equipment-Classes.json", 
    cache = {
        collections: {
            trades: "trades",
            categories: "equipmentcategories",
            types: "equipmenttypes"
        },
        defaults: {
            access: ["adftc"],
            requested_by: "adftc"
        },
        ids: {
            categories: {},
            trades: {}
        }
    }, dbClient, conn, records;

MongoClient.connect(
    url,
    { ssl: true, useNewUrlParser: true },
    function (err, client) {
        assert.equal(null, err);

        console.clear();
        console.log("Connected to: " + url);
        
        conn = client.db(dbName);
        dbClient = client;

        processJSON(filepath);
    }
);

processJSON = (url) => {
    fs.readFile(
        url,
        (err, data) => {
            records = JSON.parse(data);
            
            // Filter unique names
            records.forEach((item, index) => {
                if(!cache.ids.trades[item.trade.label])
                    cache.ids.trades[item.trade.label] = "temp";
                if(!cache.ids.categories[item.category.label])
                    cache.ids.categories[item.category.label] = "temp";
            });

            // Get the actual cache ids
            checkCacheIds(cache.ids.trades, cache.collections.trades)
            .then(() => checkCacheIds(cache.ids.categories, cache.collections.categories))
            .then(() => console.log("\n-------- cache\n",cache))
            // Insert the actual data and update the records
            .then(() => insertTypes())
            .then(() => console.log("\n-------- records", records));

            setTimeout(() => {
                endProcess();
            }, 5000);
        }
    );
};

checkCacheIds = async (cacheList, cacheCollection) => {
    for (item in cacheList) {
        if (cacheList.hasOwnProperty(item)) {
            let doc = await conn.collection(cacheCollection).findOne({"label": item});
            if(!doc) {
                let res = await conn.collection(cacheCollection).insertOne(
                    fillDocumentDefaults(item, cacheCollection)
                );
                doc = res.ops[0];
            }
            cacheList[doc.label] = { _id: doc._id };
        }
    }
}

insertTypes = async () => {
    let res;
    await Promise.all(records.map(async (item, index) => {
        res = await conn.collection(cache.collections.types).insertOne(
            fillDocumentDefaults(item, cache.collections.types)
        );
        records[index] = res.ops[0];
    }));
}

fillDocumentDefaults = (item, cacheCollection) => {
    let document = {}; 
    switch (cacheCollection) {
        case cache.collections.trades:
            document ={
                label: item,
                access: cache.defaults.access,
                date_created: parseInt(new Date().getTime() / 1000),
                status: "active",
                requested_by: cache.defaults.requested_by
            };
            break;
        case cache.collections.categories:
            document ={
                access: cache.defaults.access,
                label: item,
                status: "active",
                date_created: parseInt(new Date().getTime() / 1000),
                requested_by: cache.defaults.requested_by,
                trade_id: cache.ids.trades[item]
            };
            break;
        case cache.collections.types:
            document = {
                label: item.type.label,
                status: "active",
                date_created: parseInt(new Date().getTime() / 1000),
                requested_by: cache.defaults.requested_by,
                access: cache.defaults.access,
                category_id: cache.ids.categories[item.category.label],
                group: item.type.group,
            };
            break;
    }
    return document;
}

endProcess = (exitcode) => {
    dbClient.close();
    process.exit(exitcode || 0);
}