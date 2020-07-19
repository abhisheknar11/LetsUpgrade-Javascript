console.log("Destructuring object");

const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player dice game using JavaScript"
    }
}

console.log(student.name);
console.log(student.age);
console.log(student.projects);
console.log(student.projects.diceGame);


const {name , age , projects:{diceGame}} = student;
console.log(name, age,diceGame)



