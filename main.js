require('sillyheader-theme');
var HeaderComponent = require('sillyheader');

var eye = new HeaderComponent(document.body);

document.body.addEventListener('mousemove', function (e) {
  eye.lookAt(e.clientX, e.clientY);
}, false);
