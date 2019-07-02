// function to find the least disruptive position to insert new array values

function leastDisruptive(original, replacements) {
    let distances = {}, result = 0;

    for(let ii = 0; ii < original.length - replacements.length; ii++) {
        distances[ii] = replacements.reduce(
            (acc, val, jj) => acc + Math.abs(val - original[ii + jj])
        );
    }
    
    for(let key in distances) {
        result = distances[key] < distances[result] ? key : result;
    }

    console.log("Distances: ", distances, ` , least disruptive position: ${result} .`);
}

var arr1 = [1,2,3,4,5,6,7,8,9], arr2 = [3,5,3];
leastDisruptive(arr1, arr2);
