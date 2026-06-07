export async function GET() {
    //return new Response("Hello Next.js!");
    //return Response.json({ message: "Hello Next.js!" });
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return Response.json({ message: "Hello Next.js!", data:data });
}