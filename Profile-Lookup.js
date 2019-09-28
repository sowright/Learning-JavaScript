/* Skills developed: while loops, nested arrays and objects, if-else statements, object method hasOwnProperty.

Lesson link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

-- Prompt --
The function should check if 'name' is an actual contact's 'firstName' and the given property ('prop') is a property of that contact.
  - If both are true, then return the "value" of that property.
  - If 'name' does not correspond to any contacts then return "No such contact".
  - If 'prop' does not correspond to any valid properties of a contact found to match 'name' then return "No such property".
*/


//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// My code
function lookUpProfile(name, prop) {
  var nameFound = false;
  var i = 0;

  // use a while loop to search array so long as two conditions hold.
  while (nameFound == false && i < contacts.length) {
    nameFound = (name == contacts[i]["firstName"]);
    i++;
  }
  
  // Now we have either found an object in the array with a name match, or we have searched the entire array with not match. 
  // Use an if-else statement to check.
  if (nameFound){
    // If name match is found, we check if that object has the input property.
    if (contacts[i-1].hasOwnProperty(prop)) {
      return contacts[i-1][prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }

}

// Test the function
var test1 = lookUpProfile("Akira", "likes");
var test2 = lookUpProfile("Akira","dislikes");
var test3 = lookUpProfile("Sofi", "likes");

console.log(test1); // returns value of property
console.log(test2); // No such property
console.log(test3); // No such contact
