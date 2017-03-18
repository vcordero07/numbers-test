// The easiest way to remember which values are true and which ones are false in
// JavaScript is to memorize the falsy ones:
//values that evaluate to false
Boolean(false);
Boolean(""); // empty string
Boolean(0);
Boolean(null);
Boolean(undefined);
Boolean(NaN);

function helloX(who) {
 who = who || 'world';
 return "hello " + who;
}

helloX() // => "hello world"

function sanityCheck() {
  if (true === true) {
    console.log("true is still true. that's reasurring");
  }
}

sanityCheck() // => "true is still true. that's reassuring"

function analyzeNumber(num) {
  if (typeof num !== 'number') {
    console.log('not a number');
  }
  else if (num % 2 === 0) {
    console.log('even number');
  }
  else {
    console.log('odd number');
  }
}

var myVar = null;
if (condition1) {
  myVar = 'something other than default';
}

var myVar = condition1 ? 'something other than default' : null;

try  {
  // this will raise an error because
  // nonExistentVariable is undefined
  nonexistentVariable += 'foo';
}
catch (e) {
 // this block runs if the try block fails. `e`
 // is an object representing the error
 console.log('Something went wrong');
 console.dir(e);
}

try {
  throw 'myException';
}
catch (e) {
  // do something
}
