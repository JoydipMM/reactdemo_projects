
// create a h1 tag inside the root element
// Syntax: React.createElement("tag", {id: "heading", className: "heading"}, "content"). This CreateElement function returns a React element which is core thing of react
//const heading = React.createElement("h1", {id: "heading", className: "heading"}, "Hello World");

//console.log(heading);
// heading is a react element which is actually a javascript object

// create parent div element
//const parent = React.createElement("div", {id:"parent"}, "create child element")
// child element >>> React.createElement("div", {id:"child"}, "create heading element")
// heading element >>> React.createElement("h1", {id: "heading", className: "heading"}, "Hello World");

/*
const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World !!!!")
    )   
)*/

/*
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World")
    ]),
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World")
    ])
]);
*/

/*
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World !!!!")
    ),
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World !!!!")
    )
])
*/

// create parent div element syntax ----------
//const parent = React.createElement("div", {id:"parent"}, "create child element")
// child element >>> React.createElement("div", {id:"child"}, "create heading element")
// heading element >>> React.createElement("h1", {id: "heading", className: "heading"}, "Hello World");
/*
const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World !!!!")
    )   
)
*/

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World"),
        React.createElement("h2", {id: "heading 2", className: "heading2"}, "Hello World 2")
    ]),
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id: "heading", className: "heading"}, "Hello World"),
        React.createElement("h2", {id: "heading 2", className: "heading2"}, "Hello World 2"),
    ])
]);


// append the h1 tag to the root element. ReactDom job to render react element into the root element/DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the h1 tag into the root element
root.render(parent);


