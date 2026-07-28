function getInfo(){
    //console.log("getInfo function !!!!");
    const username = document.getElementById("username") as HTMLInputElement;
    const userpassword = document.getElementById("userpassword") as HTMLInputElement;
    const useremail = document.getElementById("useremail") as HTMLInputElement;
    //console.log("username: ", username.value);
    const name: string = username.value;
    const password: string = userpassword.value;
    const email: string = useremail.value;
    console.log("name: ", name);
    console.log("password: ", password);
    console.log("email: ", email);
}


//getInfo();