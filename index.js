var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat();
var mouse = new Mouse('Nikey');
var dog = new Dog();
try {
	cat.eat(dog);
} catch(e) {
	console.log("Error while cate eating dog");
}
console.log(cat);