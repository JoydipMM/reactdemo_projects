
import { headers } from "next/headers";
export async function GET(request){

    const requestHeader = await headers(); 
    // read cookie
    const username = request.cookies.get("username");
    // show resulkt in terminal
    console.log(username);
    // in terminal: { name: 'username', value: 'dipen' }

    return new Response("<h1>Get API Cookie Data</h1>", {
        headers:{
            "content-type": "text/html",
            "set-cookie": "username=dipen" // set cookie [keyname=value]
        }
    });
}

/*
http://localhost:3000/api/cookie-approach-1


in postman:
url: http://localhost:3000/api/cookie-approach-1
GET Request
check cookie tab beside body tab in postman
we get the cookie details

*/