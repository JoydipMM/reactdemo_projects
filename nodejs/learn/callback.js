function person(name, callback){
    console.log(`Hello, ${name}`);
    callback();
}

function country(){
    console.log("India");
}

person("Rahul Roy", country);