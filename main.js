require('sillyheader-theme');
var HeaderComponent = require('sillyheader');

var eyes = [];
for (var i = 0; i < 100; ++i) {
  eyes.push(new HeaderComponent(document.body));
}

document.body.addEventListener('mousemove', function (e) {
  eyes.forEach(function (eye) {
    eye.lookAt(e.clientX, e.clientY);
  });
}, false);
