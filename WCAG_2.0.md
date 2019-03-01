
# Web Content Accessibility Guidelines (WCAG) 2.0

## HTML Applicability

### Level A

##### 1.3.1 - Info and relationships
|Element|Description|
| - | - |
|Chunk body content using landmarks.|`<section></section>` `<article></article>` `<aside></aside>`|
|Use lists to refer to element groups.|unordered:`<ul> <li></li> </ul>`<br/>ordered:`<ol> <li></li> </ol>`<br/>description:`<dl> <dt></dt><dd></dd> </dl>`|

##### 1.3.3 - Sensory characteristics
+ Instructions for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual locations, orientation or sound.

##### 1.4.1 - Use of Color
+ Color is not the only means of conveying information, indicating an action, prompting a response or distinguishing a visual element.

##### 2.1.1 - Keyboard
+ All the content must be operable through a keyboard interface without requiring specific timings for individual keystrokes.

##### 2.1.2 - No keyboard traps
+ Focus to and from a particular component of the page can be made using a keyboard interface.

##### 2.2.1 - Adjustable timing
+ For each time limit set for the content, the user is able to either turn it off, adjust or extend the time limit.

##### 2.4.1 - Bypass blocks
|Element|Description|
| - | - |
|A mechanism is available to bypass blocks of content that are repeated across pages.<br/>(main can only be used once per page)|Using the appropriate tags: `<header></header>` `<nav></nav>` `<footer></footer>` `<main></main>`<br/>Using skip links: `<a class="skip-link" href="#main">Skip to main</a>`<br/>Using tabindex: `<main id="main" class="main"  tabindex="-1"  ></main>`|

##### 2.4.2 - Page title
+ Make sure that the title is unique for every page `<title>About Yadda | Yabadabbadoo Site</title>`

##### 2.4.6 - Headings and labels
|Element|Description|
| - | - |
|Use headings and labels to define content hierarchy.<br/>Every page should have **only one h1 tag** and it should be the first element in the main section.|**`<h1></h1>`** `<h2></h2>` `<h3></h3>`|
|Header tags should **always** maintain the content hierarchy.|<h1>h1</h1><h2>h2</h2><h3>h3</h3>|

##### 3.1.1 - Language of the page
+ Language of a page should be programmatically defined using an ISO 639-1 code: `<html lang="en">`

##### 3.1.2 - Language of parts
+ use the lang attribute whenever a part uses a different language than the one previously defined `<span lang="ru"></span>`

##### 3.3.1 - Error identification
+ If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

##### 3.3.2 - Labels or instructions
|Element|Description|
| - | - |
|Labels or instructions are provided when content requires user input, including any format or special requirements.|`<fieldset>`<br/>`<legend></legend>`<br/>`</fieldset>`<br/><br/>`<label for="email">Email address</label>`<br/>`<input id="useremail" name="email" type="email" placeholder="Enter email" required>`|

##### 4.1.1 - Parsing
|Item|Example|
| - | - |
|Include a doctype declaration|`<!doctype html>`|
|Propperly open and close tags|`<tag></tag>` or `<tag />`|
|Do not duplicate IDs|`<span`**`id="x"`**`></span>` `<div`**`id="x"`**`></div>`|
|Specify character encoding|`<meta charset="utf-8">`|
|Specify compatibility mode for IE|`<meta http-equiv="x-ua-compatible" content="ie=edge">`|

##### 4.1.2 - Name, role, value
|Item|Example|
| - | - |
|UI component roles and names can be programmatically determined;<br/>states, properties and values that may be set by the user can also be<br/>programmatically set; and notification of changes to these items is<br/>available to user agents including assistive technologies.|`<label for="chk1">Checkbox</label>`<br/>`<input type="checkbox" value="" id="chk1">`|

### Level AA

##### 1.4.3 - Contrast
+ The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, i.e. foreground colors stand out from background colors including hovering states.

##### 1.4.4 - Resize text
|Item|Example|
| - | - |
|Set the viewport heading for responsive design, and use relative units [rem or em](https://www.w3schools.com/cssref/css_units.asp).<br/>The user should be able to increase the text size up to 200% without losing readability or functionality.<br/>Texts, images or controls cannot be cut off, nor should they cause any horizontal scrollbars.|`<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />`|

##### 1.4.5 - Images of text
|Item|Example|
| - | - |
|Use text rather than images of text.|`nav -> ul -> li -> <a href="#">Text</a>`<br/>`nav -> ul -> li -> a -> `~~`<img src="" />`~~|

##### 2.4.4 - Link purpose
|Item|Example|
| - | - |
|The purpose of each link can be determined by it's text alone<br/>or from the combination of it's text and context.<br>Except where the purpose of the link could become ambiguous.|`<a href="products.html">Read more.<span class="sr-only">Read more on our products page.</span></a>`. <br/> ~~`<a href="x.html">Read More...</a>`~~|

##### 2.4.5 - Multiple ways
|Item|Example|
| - | - |
|There must be more than one way to find a particular page;<br>unless the page is nested(part of) a particular process.|Provide sitemaps, breadcrumbs, etc.|

##### 2.4.7 - Focus visible
+ Any keyboard operable UI has a mode of operation where the keyboard focus indicator is visible.

##### 3.2.3 - Consistent navigation
|Item|Example|
| - | - |
|Site navigation order must be maintained across pages;<br/>unless a change has been made by the user.|`nav(site) -> ul:`<br>`li->a(a) li->a(b) li->a(c)`|

##### 3.2.4 - Consistent identification
|Item|Example|
| - | - |
|Items that have the same functionality should be identified consistently.|Label buttons and icons consistently.|

##### 3.3.3 - Error suggestion
+ If an input error is automatically detected and suggestions for correction are known, then these should be provided to the user, unless it would jeopardize the security or purpose of the content.

##### 3.3.4 - Error prevention
+ Web pages that cause legal commitments or financial transactions for the user to occur, or that modify or delete user-controllable data in data storage systems,must be reversible, checked and confirmed.

### Side notes

Give roles to forms and buttons.  
Input elements must always have a `type` property.

Tables should not be used for layout.  
Use specific table tags to structure the contents.  
```html
<table>
    <caption> table summary or description. </caption>
    <thead>
        <tr> <th scope="col"> </th> <th scope="col"></th> <th scope="col"></th> <tr>
    </thead>
    <tbody>
        <tr> <th scope="row"> </th> <td></td> <td></td> <tr>
    </tbody>
    <tfoot>
        <tr> <th scope="row"> </th> <td></td> <td></td> <tr>
    </tfoot>
</table>
```
Scope attributes may have the following values: row, col, rowgroup, colgroup.  
In some cases `tfoot` tags may be positioned before `tbody` in order to give extra context to non sighted users.

Use screen reader only to hide text.  
```scss
@mixin sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Provide custom js form validation whenever possible, in order to avoid using the default browser validation which is not accessible. ~~(native validation balloons)~~

### Aria Labels
Aria labels may be used to describe element properties to the browser in order to give them context:
```html
<header class="sidebar">
    <nav class="navigation"   aria-label="site"  ></nav>
</header>
<aside class="sidebar">
    <nav class="navigation"   aria-label="page"  ></nav>
</aside>
<footer class="sidebar">
    <nav class="navigation"   aria-label="site"  ></nav>
</footer>
```











## Media Applicability

### Level A

#### 1.1.1 - Non-text content
|Item|Example|
| - | - |
|All non-text content that is<br/>presented to the user has a<br/>text alternative that<br/>serves an equivalent purpose.|`<img src="..." `**`alt="image description here"`**`/>`<br/><br/>`<svg xmlns="..." width="..." height="..." viewBox="..." role="..." `**`aria-labelledby="XIDX"`**`>`<br/>**`<title id="XIDX">Image Title</title>`**<br/>`<path fill="..." d="..." />`<br/>`<path fill="..." d="..." />`<br/>`</svg>`|

##### 1.2.1 - Captions (Prerecorded)
+ Captions are provided for all prerecorded audio content in synchronized media.

##### 1.2.3 - Audio desciption or media alternative (Prerecorded)
+ An alternative for time based media or audio description of the prerecorded video content is provided for synchronized media.

##### 1.4.2 - Audio Control
+ If any audio on a web page plays automatically for more than 3 seconds, either a mechanism is available to pause, stop or control the volume of the audio independently from the overall system volume level controls.

##### 2.2.2 - Pause, stop, hide
+ For moving, blinking, scrolling or auto-updating information provide a mechanism to pause, stop or hide.

##### 2.3.1 - Three flashes or below threshold
+ Web pages do not contain anything that flashes more than three times in any one second period.


### Level AA

##### 1.2.4 - Captions (Live)
+ Captions are provided for all prerecorded audio content in synchronized media.

##### 1.2.5 - Audio description (Prerecorded)
+ Audio description is provided for all prerecorded video content in synchronized media.

#### 1.4.5 - Images of text
+ Captions are provided for alllive audio content in synchronized media.


### Side notes

All images must have the `alt` attribute, screen readers will ignore images without the `alt` attribute.  
The `alt` attribute must contain the meaning or purpose of the image along with any text used within the image.  

Any embedded media using iframes should have a labelvia the `title` attribute.

There are two tipes of captions:  
- Open:   Embedded within the video (always visible).
- Closed: Displayed on demand (toggled overlay).



## Responsive web design and accessibility

### Level A

#### 1.3.2 - Meaningful sequence
+ When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined (visual order must match DOM order).

#### 2.4.3 - Focus order
+ If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability (focus order must be in a logical and expected manner).

#### 3.2.1 - On focus
+ When any component receives focus, it does not initiate a change of context.

#### 3.2.2 - On input
+ Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.


### Side notes

Hiding content preferability:  
1. `hidden="true"` attribute.  
2. `{ display: none }` css.  
3. `{ visibility: hidden }` css.  
4. `aria-hidden="true"` attribute.

