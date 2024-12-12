console.log("Hello")

let regex = new RegExp('(^\s*)my-marker(\s*$)'),
isMyMarkerText = regex.test(text);
