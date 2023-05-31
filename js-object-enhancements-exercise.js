/**To create ES5 code where you create an object 
 * with the same names as the parameters you pass in,
 * you had to write:
 */
/*
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
  */
 /*Now, you just write: */
 function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

/* This is how you created computed property names
the old way:
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/
// This is the new way:
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

// To create simple methods inside objects,
// the old way was to type:
/*
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName " + "says bye!";
    }
  }
  */
 // This is the new way:
 /*
 const instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}
*/
/* Suppose we want to create a function which
generates an animal object and we want the 
function to accept three arguments,
Here are three ways to do it:

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
*/
function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }