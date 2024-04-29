// addHeading('root');

// document.getElementById('head').addEventListener('mouseover', function(){
//     console.log("Mouse Over");
// });


function mouseOver(){
    console.log("Different way of logging");
}

function addHeading(id) {
    let heading = document.createElement("h1");
    heading.innerHTML = "Created from JS";
    heading.id = 'head';
    
    let root = document.getElementById(id);
    root.appendChild(heading);
}
