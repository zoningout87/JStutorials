/*let js = "amazing";
console.log (40 + 8 + 23 -10);


//values 

console.log ("Femke");
console.log (23);

//variabelen stored een waarde

let firstName = "Femke";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Storyteller";

console.log (myFirstJob);

/* LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console*/

/*let country = "The Netherlands";
let continent = "Europe";
let population = 20;

console.log (country);
console.log (continent);
console.log (population);

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "femke");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);*/


/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console*/


/*let isIsland = false;*/

/*console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);*/


/*let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

const job;*/


/*LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens*/


/*const language= "dutch";
const country = "The Netherlands";
const continent = "Europe";
let population = 20;
const isIsland = false;


country = "Gernmany"; */

//script.js:95 Uncaught TypeError: Assignment to constant variable. at script.js:95:9


/*// Math operators 
const now = 2037;
const ageFemke = now - 1991;
const ageSarah = now - 2018;
console.log (ageFemke, ageSarah);

console.log (ageFemke * 2, ageFemke / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * * 2


const firstName = 'Femke';
const lastName ='van Overveld';

console.log(firstName + ' ' + lastName);

// Assigment operators

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4  = 100 
x ++; //x = x + 1 = 101
x --; //x = x - 1 = 100

console.log (x);


//Comparioson operators
console.log (ageFemke > ageSarah);
console.log (ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log (now - 1991 > now - 2018);

const averageAge= (ageFemke + ageSarah) / 2
console.log (ageFemke, ageSarah, averageAge );*/

/*JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � */


/* Write your code below. Good luck! 🙂 */


const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
console.log (massJohn, heightJohn, massMark, heightMark);


const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHigherbmi = bmiMark > bmiJohn;
console.log (bmiMark, bmiJohn)
console.log (markHigherbmi);

//Boolean variabel > greater than sign 
