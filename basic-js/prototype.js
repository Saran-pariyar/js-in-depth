/**  When we create object/ function/ methods/ array/ variable , these all are attached with some hidden properties, which we call prototype
 Prototype is object, even prototype has it's prototype.

 When we do myObj.toString(), it will search in myObj for toString(). Then inside prototype if not found. It will search in prototype's prototype too and return undefined it not found.

 We can create own prototype using Object.create()

 const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet();
*/