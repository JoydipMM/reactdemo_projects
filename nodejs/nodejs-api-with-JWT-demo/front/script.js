// api url variable
const baseURL = "http://localhost:3000";
const userlistAPI = `${baseURL}/api`;

// function checkAuth(){
//     const token = localStorage.getItem("API_token");
//     if(!token){
//     window.location.href = "login.html"
//     }
//     return token;
// }

// const token = checkAuth()

const registerForm = document.querySelector("#registerForm");
const loginForm = document.querySelector("#loginForm");


if(registerForm){
    registerForm.addEventListener("submit", async function(event){
        event.preventDefault();

        const username = document.querySelector(".username").value;
        const useremail = document.querySelector(".useremail").value;
        const userphone = document.querySelector(".userphone").value;
        const userpassword = document.querySelector(".userpassword").value;
        const gender = document.querySelector(".gender").value;

        const res = await fetch(`${userlistAPI}/register`,{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, useremail, userphone, userpassword, gender })
        });

        const data = await res.json();
        console.log(data)

        if(res.ok){
            document.querySelector(".logMsg").innerHTML=`<div class="alert alert-success" role="alert">Registration successfull</div>`;
            window.location.href = "login.html";
        }else{
            document.querySelector(".logMsg").innerHTML=`<div class="alert alert-warning" role="alert">${data.message}</div>` || "Registration failed";
        }
    })
}


if(loginForm){
    loginForm.addEventListener("submit", async function(event){
        event.preventDefault();

        const username = document.querySelector(".username").value;
        const userpassword = document.querySelector(".userpassword").value;

        const res = await fetch(`${userlistAPI}/login`,{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, userpassword })
        });

        const data = await res.json();
        console.log(data)

        if(res.ok){
            document.querySelector(".logMsg").innerHTML=`<div class="alert alert-success" role="alert">Login successfull</div>`;
            const userTokenData = {
                token:data.token,
                userid:data.userid,
            }
            //localStorage.setItem("API_token", data.token);
            //window.location.href = "userlist.html";
            localStorage.setItem("API_token", JSON.stringify(userTokenData));
            window.location.href = "userlist.html";
        }else{
            document.querySelector(".logMsg").innerHTML=`<div class="alert alert-warning" role="alert">${data.message}</div>` || "Registration failed";
        }
    })
}