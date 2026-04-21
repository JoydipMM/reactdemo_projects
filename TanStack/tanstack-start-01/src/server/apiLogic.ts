import { createServerFn } from "@tanstack/react-start";

// secure backend logic for get data
export const getApiLogicFn = createServerFn({method: 'GET'}).handler(async () => {
    console.log("Calling this function from server");
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    console.log("data fetched on the server");
    return data;
})

// secure backend logic for post/mutating data
export const saveApiLogicFn = createServerFn({method:"POST"})
.inputValidator((name:string) => name)
.handler(async ({data}) => {
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    return { success:true, saved:data };
})

/*
export const saveApiLogicFn = createServerFn({method:"POST"}).handler(async ({data}) => {
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    return { success:true, saved:data };
})
*/