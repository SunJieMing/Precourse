// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
    return arr[0];
}

function returnLast(arr) {
    return arr[arr.length - 1];

    // return the last item of the array
}

function getArrayLength(arr) {
    return arr.length;

    // return the length of the array
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
    return arr.map(function (value) {
        return value + 1;
    });
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
    return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
    return arr.includes(item);
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    return numbers.reduce(function(total, currentValue) {
        return total + currentValue;
    });
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
    return testScores.reduce(function(total, currentValue) {
        return total + currentValue;
    }) / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
    return numbers.reduce(function(largest, current) {
        if (current >= largest) {
            return current;
        }
        else return largest;
    });
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber,
};
