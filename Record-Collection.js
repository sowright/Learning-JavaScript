// Lesson link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/record-collection

// IN PROGRESS

// Setup
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
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // case when value is empty
  if (value=="") {
    delete collection.id.prop;
    return collection; // break
  }

  // if-else prop is "tracks"
  if (prop == "tracks") {
    // case when album does not have a "tracks" propery.
    if (collection[id].hasOwnProperty("tracks")==false) {
      collection.id[prop] = [];
    }
    // case when value is not empty
    if (value != "") {
      collection[id][prop].push(value);
    }
  } else {
    collection[id][prop] = value
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
//updateRecords(2468, "tracks", "");

console.log(collectionCopy[5439]["artist"]);
console.log(collection[5439]["artist"]);

//console.log(collectionCopy[2468]["tracks"]);
//console.log(collection[2468]["tracks"]);
