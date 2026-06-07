export async function GET(request){

    const url = new URL(request.url);
    const { searchParams } = url;

    console.log(searchParams)

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // url: http://localhost:3000/api/query-parameters?id=4&name=dipen

    return Response.json({ message: "query parameters api", params: searchParams, data: data });
}