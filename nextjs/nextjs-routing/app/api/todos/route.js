export async function POST(request) {
    // 1. parse the json body from client
    const body = await request.json();
    const { title } = body;
    
    // 2. insert the todo into db

    // 3. return the inserted todo
    return Response.json({ success: true, message: "new todo created", todo: { title } });
}