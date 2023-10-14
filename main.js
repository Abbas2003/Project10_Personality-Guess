#!/usr/bin/env node
import inquirer from "inquirer";
import PromptSync from "prompt-sync";
import { Person, Student } from "./code.js";
const prompt = PromptSync();
// let input = prompt("Type 1 if you like to talk to others and Type 2 if you rather keep to yourself: ");
let Input = await inquirer.prompt({
    type: "input",
    name: "input",
    message: "Type 1 if you like to talk to others and Type 2 if you rather keep to yourself: "
});
let myPerson = new Person();
myPerson.askQuestion(parseInt(Input.input));
console.log(`You are ${myPerson.getPersonality()}`);
const person = new Person();
// console.log(person);
const ans = await inquirer
    .prompt([
    {
        type: 'input',
        name: 'Name',
        message: 'What is your name?',
    },
]);
const myStudent = new Student(ans.name);
myStudent.Name = ans.Name;
console.log(`Student Name: ${myStudent.Name}`);
console.log(`Personality: ${myStudent.getPersonality()}`);
