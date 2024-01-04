import inquirer from "inquirer";


class student {
    name:string
    constructor(n:string){
        this.name=n
    }

}

class Person{
    students:student[]=[]
    addStudent(obj:any){
        this.students.push(obj)
    }
}

const persons = new Person()

console.log(persons)

const programmStart = async (persons: Person)=>{

    do{
        console.log("Welcome")

        const ans = await inquirer.prompt({
            type: "list",
            message: "ap kis se bat kerye gaye...",
            choices: ["khud se :Self", "student"],
        })
    
        if(ans.select == "khud se :Self"){
            console.log("hello mein kudh se bat kr rah ho");
            console.log("meri tabiyat achi hai.")
        }
        if(ans.select == "student"){
            const ans = await inquirer.prompt({
                type:"input",
                message:"ap ko kis student se bat krni hai.",
                name:"student",
            });
    
            const student =persons.students.find(val => val.name == ans.student)
    
            if(!student){
                const name = new Student(ans.student)
                persons.addStudent(name);
    
                console.log(`Hello I am ${name.name}, or me thek hun`);
                console.log(persons.students);
            }
    
            if(student){
                console.log(`Hello I am ${student.name}, or me thek hun...............`);
                console.log(persons.students);
            }
        }
    }while(true)
    
};

programmStart(persons)
