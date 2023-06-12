const parent = React.createElement("div", { id: "parent" },
    
    [React.createElement("div", { id: "child" }, 
    [
        React.createElement("h1", {}, "This is nested div class"),
        React.createElement("h2", {}, "This is 2nd nested div class")
    ]),
    React.createElement("div", { id: "child2" }, 
    [
        React.createElement("h3", {}, "This is nested div class"),
        React.createElement("h4", {}, "This is 2nd nested div class")
    ])]);

    // JSX 

// const heading = React.createElement("h1", {id : "heading"}, "Hello world using react js");

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);