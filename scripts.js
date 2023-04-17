let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

// arrow function containing 3 statements
// this function adds 1 to the 'calculated' value so it will console.log '2', but first it converts it to a string number.
const logCalc = () => {  // corrected format for arrow functions
    // creates new variable "isString" & checks whether 'calculated' is a string
    const isString = typeof calculated === 'string'; // changed to 'string because 'numerical-string' is not a valid value for the typeof operator
    // creates new variable & sets it to value of ternary operator (alt way to write if...else statement. It's called a "ternary" operator because it takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. If true, 1st value returns (parseFloat(calculated)), otherwise if false 2nd value (calculated).
    const calculatedAsNumber = isString ? parseFloat(calculated) : (calculated);
    calculated = calculatedAsNumber + 1; // changed equality operator (===) to assignment operator (=)
    return calculated; // added return statement as its part of the arrow function format and necessary for it to return a value
};

console.log(`Calculated has been called ${logCalc()} times`);

const calcUser = () => { // corrected format for arrow functions
  const calculated = logCalc (); //calls 'logCalc' to get a new value for 'calculated' & then updates the value of user and state based on the new value of calculated
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
  return calculated; // added return statement as this is a arrow function
};

console.log(`calcUser: ${calcUser()}`);

const checkUser = () => { // corrected format for arrow functions
// conditional statement using AND operator that checks whether both 'user' & 'state' is equal to the string 'requesting'. If both then code in block will execute, if either is false then it will not execute
  if (user && state === 'requesting') { 
		console.log(`User: ${user} (${calculated})`) 
	}
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

// NOTES
/* arrow function format
  const functionName = (parameter1, parameter2, ...) => {
   return someValue; // optional
  }
*/
