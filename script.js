//your JS code here. If required.


// Cypress.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });
  

const  line_box = document.getElementsByClassName("line-box")[0];

window.onload(append());

function append(){
    console.log("functio triggred");
    const div = document.createElement("div");
    div.id="line";
    line_box.appendChild(div);
}
