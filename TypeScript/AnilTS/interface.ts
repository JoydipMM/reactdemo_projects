/*
Interface.ts
interface
Interface is a contract that defines the structure of an object. It is a type that can be used to describe the shape of an object.var 
*/


var studentObj:{
    name: string,
    age: number,
    city: string
} = {
    name:'Dipen',
    age: 25,
    city: 'Ahmedabad'
}


interface student {
    name: string,
    age: number,
    city: string
}


interface studentSubject extends student {
    subjects?: string[] // optional but if use then data type must be array
}


var student2Obj:student = {
    name:'Rajesh',
    age: 25,
    city: 'Delhi' 
}

var student3Obj:student = {
    name:'Dinesh',
    age: 40,
    city: 'Kolkata' 
}

var student4Obj:studentSubject = {
    name:'Dinesh',
    age: 40,
    city: 'Kolkata',
    subjects: ['English', 'Hindi', 'Maths']
}