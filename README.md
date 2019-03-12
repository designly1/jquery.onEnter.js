# jquery.onEnter.js

This plugin allows you to bind the enter key to an event with a callback, or to behave as a tab key (advance to next visible, enabled, writable form element) also with an optional callback.

## Usage:

```javascript
$('element').onEnter('tab'); // Catches enter key press, prevents form submit, and advances
                             // to next visible, enabled, writable form element (input, select, textarea, button)

$('element').onEnter('tab', function(element, args){
    // Do some stuff after tab
}, 'args to pass to callback');

$('element').onEnter(function(){
    // Do some stuff when enter key is pressed
});
```

Working Fiddle: https://jsfiddle.net/cloudulus/czb9L762/
