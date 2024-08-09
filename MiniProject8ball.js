// Part 1 Homework
console.log("Welcome to this magic eight ball application");
const first_name = "ShawnDe";
const last_name = "LaChelle";
let question = "Can I do this assignment right?";

// Part 2 Homework
const full_name = `${first_name} ${last_name}`;
console.log(`Hello my name is ${full_name} and my question is:\n${question.toUpperCase()}`);
console.log(`My question is:\n${question.toUpperCase()}`);
console.log("Yes, you did this assignment right!");

//Part 3 Homework
let number1 = 10;
let number2 = 3;

let result = (number1 * number2) / (number1 - number2);

console.log(result); // Output will be 5

const randomNumber = Math.round(Math.random() * 7) + 1; // Generates a random number between 1 and 8
console.log(randomNumber);

const NewQuestion = "Do you have the meaning of life?";
console.log(`My question is:\n${NewQuestion.toUpperCase()}`);

console.log(`The answer to your question is ${randomNumber === 1 ? 'Yes' : 'No'}`);

// Bonus
console.log(randomNumber % 2 === 0 ? 'Yes' : 'No');

// Part 4 Homework
function app() {
const random_number = get_random_number(); console.log(`The answer to your question is: ${random_number === 1 ? 'Yes' : 'No'}`);
}
function greeting(first_name, last_name, question) {
console.log(`Hello ${first_name} ${last_name}!`); console.log(`You asked: ${question}`);
}

function get_random_number() {
const random_number = Math.floor(Math.random() * 2) + 1; return random_number;
}
app(); // Called at the end of the code file
// Part 5 Homework
function magic_eight_ball(number_result) {
switch (number_result) {
    case 1:
        console.log("It is certain.");
         break;
        case 2:
            console.log("It is decidedly so.");
            break;
        case 3:
            console.log("Without a doubt.");
            break;
        case 4:
            console.log("Yes, definitely.");
            break;
        case 5:
            console.log("You may rely on it.");
            break;
        case 6:
            console.log("As I see it, yes.");
            break;
        case 7:
            console.log("Most likely.");
            break;
        case 8:
            console.log("Outlook good.");
            break;
        default:
            console.log("Not a valid case please use a number between 1 and 8");
    }
}
function app() {
    const random_number = get_random_number();
    magic_eight_ball(random_number); // Removed the console.log from app function
}
