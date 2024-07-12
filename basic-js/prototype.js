/**  When we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype
 Prototype is object, even prototype has it's prototype.

 When we do myObj.toString(), it will search in myObj for toString(). Then inside prototype if not found. It will search in prototype's prototype too and return undefined if not found.

 We can create own prototype using Object.create()

 const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet();
*/


// Why use Prototype?
// Because it's more memory efficient and fast
/* 

Look below, if we directly created greet function, it will create their own copies of greet()
But if we made prototype, both alice and bob shared same greet() so it's memory efficient

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

const alice = new Person("Alice");
const bob = new Person("Bob");

alice.greet(); // Hello, Alice
bob.greet()


*/