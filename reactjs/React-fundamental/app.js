
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

import React from "react"; // add this
import ReactDOM from "react-dom/client"; // add this
import { useState } from "react";

// create a h1 tag with react create element
const parent = React.createElement("h1", {id:"heading", className: "heading"}, "Hello World");
const [user, addUser] = useState("User");
// create react Element with JSX
const parentJSX = <h1>Hello World ......</h1>;

const data = "test data";

// Create Functional Component which returns JSX
const FunctionalComponent = () => {
    return <div className="container">
        <FunctionalComponent2/>
        <h1>Functional Component</h1>
        {data}
        <p>para</p>
        </div>
}
const FunctionalComponent2 = () => {
    return <div className="container"><h1>Functional Component 2</h1><p>para</p></div>
}

// append the h1 tag to the root element. ReactDom job to render react element into the root element/DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// render react Element
root.render(parentJSX);

// render react component
root.render(<FunctionalComponent/>);


