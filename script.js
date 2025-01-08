let heading3 = document.querySelector("h3");
let contain = document.querySelector(".contain");
let add = document.querySelector(".add")
let dialog = document.querySelector(".dialog");
let close = document.querySelector(".close-btn");
let dialogContent = document.querySelector(".dialog-content");
let dialogInput = document.querySelector(".dialog-input");
let update = document.querySelector("#update");
let list = document.querySelector(".list");
let dummy = document.querySelector(".dummy");

// date with month and day
const now = new Date();
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayNow = day[now.getDay()];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monNow = month[now.getMonth()];
const nowDate = now.getDate();
const fnlDate = `${dayNow}, ${monNow} ${nowDate}`;
heading3.innerHTML = fnlDate;

// dynamic clock with 12 hour format
function dynamicTime(){
    
    let time = document.querySelector(".time");
    const now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let period = hours <= 12 ? "AM" : "PM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (mins < 10) {
        mins = "0" + mins;
    } else {
        mins = mins
    }
    let fnlTime = `${hours}:${mins} ${period}`;
    console.log(fnlTime);
    time.innerHTML = fnlTime;
    }
    
    dynamicTime();
    setInterval(dynamicTime, 30000);

// opens the dialog box when the add button is clicked
add.addEventListener("click", function(){
        dialog.style.display = "block";
})

// the close(cross) button
close.addEventListener("click", function(){ 
    dialog.style.display = "none";
})

// targets the dialog box to close when clicked outside the dialog box
dialog.addEventListener("click", function(event) {
    if(event.target == dialog){
        dialog.style.display = "none";
    }
} )

// creates a new div element with a checkbox and a label
update.addEventListener("click", function() {
    const text = dialogInput.value;
    const newdDiv = document.createElement("div");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("id", "check");
    const newlabel = document.createElement("label");
    newlabel.innerHTML = text;
    newlabel.setAttribute("for", "check");
    const trash = document.createElement("button");
    trash.className = "trashcan";

    // deletes the div when the trash icon is clicked
    trash.addEventListener("click", function() {
        newdDiv.remove();
    })
    
    // strikethrough the label if the checkbox is checked
    check.addEventListener("change", function() {
        if (check.checked) {
            newlabel.style.textDecoration = "line-through";
        } else {
            newlabel.style.textDecoration = "none";
        }
    });

    // checks the checkbox when the div is clicked
    newdDiv.addEventListener("click", function(event) {
        if (event.target == newdDiv) {
            check.checked = !check.checked;
        }
        check.dispatchEvent(new Event('change'));
    });

    // adds the new div to the contain div
    newdDiv.appendChild(check);
    newdDiv.appendChild(newlabel);
    newdDiv.appendChild(trash); 
    newdDiv.className = "list";
    contain.appendChild(newdDiv);
    dialog.style.display = "none";
    dialogInput.value = "";
    dummy.style.display = "none"; 
});


