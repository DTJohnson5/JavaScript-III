/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. this.WindowBinding - Used as the global object in a DOM window. 
* 2. this.ImplicitBinding - Uses dot notation to invoke the function directly related to the item(s) in which the invocation is called.
* 3. this.NewBinding - Creates and refers to an instance of which the new object was created.
* 4. this.ExplicitBinding - Initializes a .call, .apply, or .bind function on an object and overwrites .this with the passed argument.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayGame() {
    console.log(`My favorite game franchise is ${this.Franchise}.`)
}

const user = {
    Name: "David",
    Franchise: "The Legend of Zelda"
}

user.sayGame = sayGame;
user.sayGame();

// Principle 2

// code example for Implicit Binding

const user2 = {
    Name: "David",
    Franchise: "The Legend of Zelda",
    greet() {
        console.log(`Hello! My name is ${this.Name} and I love playing ${this.Franchise}!`)
    }
}

user2.greet();

// Principle 3

// code example for New Binding

function user3 (Name, Franchise) {
    this.Name = Name
    this.Franchise = Franchise
}

const aboutMe = new user3("David", "The Legend of Zelda")

console.log(aboutMe);

// Principle 4

// code example for Explicit Binding

function user4 (l1, l2, l3) {
    console.log(
        `Hello, my name is ${userMe.Name} and I know ${l1}, ${l2}, and ${l3}.`
    )
}

const userMe = {
    Name: "David",
    Franchise: "The Legend of Zelda",
}

const languages = ['JS', 'HTML', 'CSS']

const newFunc = user4.bind(user4, languages[0], languages[1], languages[2])
newFunc();