/*
What is Intersection Type:
An Intersection Type (&) in TypeScript combines multiple types into a single type. The resulting type must satisfy all of the combined types.
*/

interface student {
    name: string,
    age: number,
    city: string
}

interface stSubject{
    subjects?: string[],
}

interface studentSubject extends student {
    subjects?: string[] // optional but if use then data type must be array
}

type studentIntersection = student & stSubject

type customType = student & stSubject
type customType2 = student | stSubject


var student4Obj:studentSubject = {
    name:'Dinesh',
    age: 40,
    city: 'Kolkata',
    subjects: ['English', 'Hindi', 'Maths']
}

var student5Obj:studentIntersection = {
    name:'Bijoy',
    age: 50,
    city: 'Noida',
    subjects: ['English', 'Hindi', 'Maths']
}




type Product = {
  id: number;
  name: string;
  price: number;
};

type Inventory = {
  quantity: number;
  warehouse: string;
};

type ProductDetails = Product & Inventory;

const laptop: ProductDetails = {
  id: 1,
  name: "MacBook Pro",
  price: 1800,
  quantity: 12,
  warehouse: "Delhi",
};

type ProductDetails2 = Product | Inventory;

const laptop2: ProductDetails2 = {
  id: 1,
  name: "MacBook Pro",
  price: 1800,
  quantity: 12,
  warehouse: "Delhi",
};


console.log(laptop);
console.log(laptop2);