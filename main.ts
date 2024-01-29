import chalk from "chalk";
import inquirer from "inquirer";

async function askQuestion() {
    
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        choices: ["Amazon", "Microsoft", "Orcale", "Typescript"],
        message: "Which of the following companies has developed Typescript?"
    },

    {
        type: "list",
        name: "question2",
        choices: ["Gradua1", "Duck", "Dynamic", "All of the Above"],
        message: "What is the typing principle of Typescript?"
    },
    {
        type: "list",
        name: "question3",
        choices: [".tt", ".tsx", ".nod", ".ts"],
        message: "Which of the following Filenames is the extension for Typescript?"
    },
    {
        type: "list",
        name: "question4",
        choices: ["Javascript", "C#", "Java", "All of the Above"],
        message: "Which of the computer programing languages below has influenced the creation of Typescript?"
    },
    {
        type: "list",
        name: "question5",
        choices: ["Static", "Strong", "Dynamic", "All of the Above"],
        message: "What is the type-checking nature of Typescript?",
      },
])


let marks = 0;

if(answer.question1 === "Microsoft"){
    console.log("Answer is Correct");
    marks += 2;
}
else() => {
    console.log("Answer is not Correct");
}
if(answer.question2 === "Dynamic"){
    console.log("Answer is Correct");
    marks += 2;
}
else{
    console.log("Answer is not Correct");
}
if(answer.question3 === ".ts"){
    console.log("Answer is Correct");
    marks += 2;
}
else{
    console.log("Answer is not Correct");
}
if(answer.question4 === "Javascript"){
    console.log("Answer is Correct");
    marks += 2;
}
else{
    console.log("Answer is not Correct");
}
if (answer.question5 === "Static") {
    console.log("Answer is Correct");
    marks += 2; // Add marks for correct answer
  } else {
    console.log("Answer is not Correct");
  }

if(marks === 0){
    console.log("You are fail, Better luck next time!")
}else{
    if( marks >= 4){
    console.log(`You got ${chalk.bold.green.italic(marks)} out of 10`)
    }else{
        console.log(`You got ${chalk.bold.red.italic(marks)} out of 10, You need to work Hard!`)
    }
}


}

askQuestion()



