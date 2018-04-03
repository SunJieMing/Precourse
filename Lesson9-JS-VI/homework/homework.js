// Do not change any of the function names

function invokeCallback(cb) {
  cb();
  // invoke cb
}

function sumArray(numbers, cb) {
  let sum = numbers.reduce(function(prev, cur) {
    return prev + cur;
    });
  cb(sum);
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
  arr.forEach(function(value) {
    cb(value);
    });
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
  let newArr = [];
  arr.forEach(function(value) {
    newArr.push(cb(value));
  });
  return newArr;
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
};
