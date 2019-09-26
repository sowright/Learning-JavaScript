/* 
Skills developed: nested arrays and objects, global and local variables, array push, object delete, if-else statements.

Lesson link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/record-collection

--Prompt--
Write a function to modify object ("collection"), with inputs {album id, property (prop), value}. 
Incomplete data should be handled according to these rules:
    - If prop is "tracks" but the album doesn't have a "tracks"property, create an empty array before adding the new value to the album's corresponding property.
    - If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
    - If value is empty (""), delete the given prop property from the album.

*/

// Setup (provided by lesson)
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Create a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

//// Code I wrote below this line ////

function updateRecords(id, prop, value) {
  if (value != "") { // case when value is not empty
    
    if (prop == "tracks") { // handle differently if prop is "tracks", since collection[...][tracks] is an array.
      if (collection[id].hasOwnProperty("tracks")==false)
      {
        collection[id][prop] = [];
      }
      collection[id][prop].push(value);

    } else {
      collection[id][prop] = value;
    }

  } else { // case when value is empty
    delete collection[id][prop];
  }

  return collection;
}


// Testing results.
updateRecords(5439, "artist", "ABBA");
updateRecords(2468, "tracks", "New Album");
updateRecords(5439, "tracks", "Take a Chance on Me");

console.log(collectionCopy[5439]["artist"]);
console.log(collection[5439]["artist"]);

console.log(collectionCopy[2468]["tracks"]);
console.log(collection[2468]["tracks"]);

console.log(collectionCopy[5439]["tracks"]);
console.log(collection[5439]["tracks"]);
