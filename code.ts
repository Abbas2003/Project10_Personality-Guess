#!/usr/bin/env node

import inquirer from "inquirer";

class Person {
    private personality;
    // students: Student[] = [];

    constructor() {
        this.personality = "Mystery"
    }

    public askQuestion(answer: number) {
        if(answer === 1){
            this.personality = 'Extrovert';
        }
        else if(answer === 2){
            this.personality = 'Introvert';
        }
        else{
            this.personality = 'Still a mystery';
        }
    }

    public getPersonality() {
        return this.personality;
    }


}


class Student extends Person {
    private _name: string = "";
  
    constructor(_name: string) {
      super();
      this._name;
    }
  
    public get Name() {
      return this._name;
    }
  
    public set Name(value: string) {
      this._name = value;
    }
  }
  




export{Person,Student}