var HeaderComponent = require('sillyheader');

var helloWorld = new HeaderComponent(document.body);

helloWorld.on('click', function () {
  new HeaderComponent(document.body);
});