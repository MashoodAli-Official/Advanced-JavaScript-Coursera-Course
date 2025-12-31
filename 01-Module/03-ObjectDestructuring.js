// Object Destructuring
const myPet = {
  name: 'Buddy',
  type: 'Dog',
  age: 5,
  breed: 'Golden Retriever',
};

// Destructuring assignment
const { name, type, age, breed } = myPet;

console.log(`My pet's name is ${name}.`);
console.log(`It is a ${age}-year-old ${breed} ${type}.`);
