
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    id: 3,
    move: function() {
      return (Math.ceil(Math.random()*10))
    }
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    id: 1,
    move: function() {
      return (Math.ceil(Math.random()*10))
    }
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    id: 2,
    move: function() {
      return (Math.ceil(Math.random()*10))
    }
};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    id: 7,
    move: function() {
      return (Math.ceil(Math.random()*10))
    }
};

let microAnimal = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    id: 5,
    move: function() {
      return (Math.ceil(Math.random()*10))
    }
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, microAnimal];
// Print out the relevant information about each animal.
for (i=0; i < crew.length; i++){
  for (item in crew[i]) {
   console.log(`${item}: ${crew[i][item]}`);
} }
function crewReports(animal) {
  return (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.id}.`);
} 
//for (i=0; i < crew.length; i++){
console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(superChimpTwo));
console.log(crewReports(dog));
console.log(crewReports(microAnimal));
// Start an animal race!
/*Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race.

Return the array from the function, then print the results to the console (one animal per line).*/
function fitnessTest(animal) {
  return animal.move();
}
for (let i=0; i < crew.length; i++){
console.log(`${crew[i].name} took ${fitnessTest(crew[i])}  turns to take 20 steps.`);
}