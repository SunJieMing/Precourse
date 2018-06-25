// Do not change any of the function names

function createUserClass() {
  const User = function(newUser) {
    this.username = newUser.username;
        this.name = newUser.name;
        this.email = newUser.email;
        this.password = newUser.password;
        this.sayHi = function() {
          return 'Hello, my name is ' + this.name;
      };
  };
  return User;

  // create a class constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
}

function addPrototypeMethod(Constructor) {
    Constructor.prototype.sayHi = function() {
        return 'Hello World!';
    }
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
    String.prototype.reverse = function (str) {
        let reversedArr = [];
        let strToArr = this.split('');
        for (let i = strToArr.length - 1; i >= 0;  i--) {
            reversedArr.push(strToArr[i]);
        }
        return reversedArr.join('');

    }
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass: createUserClass,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
};
