export async function GET(request){

    const url = new URL(request.url);
    const { searchParams } = url


    const apiurl = new URL("https://jsonplaceholder.typicode.com/users");

    searchParams.forEach((value, key)=>{
        apiurl.searchParams.append(key, value);
    });

    const res = await fetch(apiurl);
    const data = await res.json();

    return Response.json({ message: "query parameters api", params: searchParams, data: data });

    //example: http://localhost:3000/api/query-parameters-append?delectus&_limit=5

}