
var foo = document.getElementById("foo");
var bar = document.getElementById("bar");
var foobar = document.getElementById("foobar");

foo.addEventListener('click', function() {
  var h3 = document.createElement('h3');
  h3.textContent = 'Foo';
  document.getElementById('main').appendChild(h3);
});


bar.addEventListener('click', function() {
  var h3 = document.createElement('h3');
  h3.textContent = 'Bar';
  document.getElementById('main').appendChild(h3);
});

foobar.addEventListener('click', function() {
  var h2 = document.createElement('h2');
  h2.textContent = 'FooBar';
  document.getElementById('main').appendChild(h2);
});
