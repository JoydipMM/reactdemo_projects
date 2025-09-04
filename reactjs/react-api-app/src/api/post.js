const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// get post
export const getPost = async () => {
    // const res = await fetch(`${BASE_URL}/posts`);
    // if (!res.ok) throw new Error("Failed to fetch posts");
    // return res.json();

    const res = await fetch(`${BASE_URL}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
    }
    const data = await res.json();
    //console.log(data)
    return data; // returns usable data

}