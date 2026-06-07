import { headers } from "next/headers";
export async function GET(request){
    const requestHeader = await headers();

    // get header data by key name as string
    // here we get Authorization header value
    console.log(requestHeader.get("Authorization"));
    
    return new Response("Get API Request Header Data");
    // in postman:
    // url: http://localhost:3000/api/get-request-header-approach-1
    // GET Request
    // Headers:
    // key: Authorization
    // value: Bearer 1234567890123

    // console output:
    // Bearer 1234567890123
}