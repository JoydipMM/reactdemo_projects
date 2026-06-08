
import { headers, cookies } from "next/headers";
export async function GET(request){

    const cookieStore = await cookies();
    cookieStore.set("theme", "dark");

    const theme = cookieStore.get("theme");
    console.log(theme);

    return new Response("<h1>Get API Cookie Data</h1>", {
        headers:{
            "content-type": "text/html",
            //"set-cookie": "username=dipen" // set cookie [keyname=value]
        }
    });
}

/*
http://localhost:3000/api/cookie-approach-2

in postman:
url: http://localhost:3000/api/cookie-approach-2
GET Request
check cookie tab beside body tab in postman
we get the cookie details like:
{
    "name": "theme",
    "value": "dark"
}
in array format
*/