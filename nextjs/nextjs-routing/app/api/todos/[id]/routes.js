export async function PUT(request, {params}){
    const data = await request.json();
    const getid = params.id;
    const updatedTodo = {id:get, ...data}

    return Response.json({
        status: 200,
        message: "Todo updated successfully",
        todo: updatedTodo
    });  

}

export async function PATCH(request, {params}){
    const data = await request.json();
    const getid = params.id;
    const updatedTodo = {id:get, ...data}

    return Response.json({
        status: 200,
        message: "Todo updated successfully",
        todo: updatedTodo
    });  

}

export async function DELETE(request, {params}){
    const data = await request.json();
    const getid = params.id;
    const updatedTodo = {id:get, ...data}

    return Response.json({
        status: 200,
        message: "Todo updated successfully",
        todo: updatedTodo
    });  

}