let age = 10; // TS already knows this is a number. So we don't need to specify it. 

let rollno = 10;

let data : (string | number)[];
data = ['name', 10]; 

let maybe: string | number;
maybe = Math.random() > 0.5 ? 'hello' : 10;

function add(a:number, b:number):void{
    console.log(a+b);
}
export function add2(a:number, b:number):number{
    return (a + b);
}

add(10, 20);
add2(10, 20);