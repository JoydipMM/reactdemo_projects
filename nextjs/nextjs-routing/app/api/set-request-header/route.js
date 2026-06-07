import { headers } from "next/headers";
export async function GET(request){
    const requestHeader = await headers();

    // get header data by key name as string
    // here we get Authorization header value
    console.log(requestHeader.get("Authorization"));
    
    // in postman:
    // url: http://localhost:3000/api/set-request-header
    // GET Request
    // Headers:
    // key: Content-Type
    // value: text/html
    
    // postman output:
    // <h1>Set API Request Header Data</h1>
    // we can also see the html format in postman and broswer
    return new Response("<h1>Set API Request Header Data</h1>", {
        headers: {
            "Content-Type": "text/html"
        }
    });
}