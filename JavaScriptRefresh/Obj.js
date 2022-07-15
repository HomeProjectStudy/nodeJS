const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: () => {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();
