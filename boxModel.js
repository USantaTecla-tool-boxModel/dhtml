function load() {
    let style = document.getElementById("box").style;
    for(let property of ["width", "height", "padding", "margin", 
            "background-color", "border-width", "border-style", 
            "border-color", "outline-width", "outline-style", "outline-color"]){
                console.log(property);
        console.log(property + " tiene " + document.getElementById(property).value);
        style.property = document.getElementById(property).value;
    }
}

function format() {
    let style = document.getElementById("box").style;
    for(let property of ["width", "height", "padding", "margin"]){
        style[property] = parseInt(document.getElementById(property).value,10)+"px";
    }
    for(let property of ["background-color", "border-width", "border-style", 
    "border-color", "outline-width", "outline-style", "outline-color"]){
        style[property] = document.getElementById(property).value; 
    }
}
