const name = "Gabriel";
let age = 23;
let hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
}

console.log(summarizeUser(name, age, hasHobbies));
