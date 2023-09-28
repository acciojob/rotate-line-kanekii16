//your JS code here. If required.
const  line_box = document.getElementById("line");

window.onload(append());

function append(){
    console.log("functio triggred");
    const div = document.createElement("div");
    div.className="lineDiv"
    line_box.appendChild(div);
}
