let heading3 = document.querySelector("h3");
let wrap = document.querySelector(".wrap");
let header = document.querySelector("header");
let body = document.querySelector("body");
let time = document.querySelector(".time");
let contain = document.querySelector(".contain");
let add = document.querySelector(".add");
let dialog = document.querySelector(".dialog");
let close = document.querySelector(".close-btn");
let dialogContent = document.querySelector(".dialog-content");
let dialogInput = document.querySelector(".dialog-input");
let update = document.querySelector(".update");
let dummy = document.querySelector(".dummy");
let list = document.querySelectorAll(".list");
let toggle = document.querySelector(".toggle");

// light to dark mode toggle
let force = 0;
toggle.addEventListener("click", function () {
  let list = document.querySelectorAll(".list");

  if (force == 0) {
    list.forEach((item) => {
      item.querySelector(".trashcan").style.backgroundImage =
        "url('dark-trash.svg')";
      item
        .querySelector("input[type='checkbox'")
        .style.setProperty("--check-color", "whitesmoke");
      item.querySelector("input[type='checkbox']").style.borderColor =
        "whitesmoke";
      item.querySelector("label").style.color = "whitesmoke";
      item.classList.add("dark-list");
    });
    contain.classList.toggle("dark-contain");
    wrap.classList.toggle("dark-wrap");
    header.classList.toggle("dark-header");
    body.classList.toggle("dark-body");
    heading3.classList.toggle("dark-h3");
    time.classList.toggle("dark-time");
    add.classList.toggle("dark-add");
    dialogInput.classList.toggle("dark-dialog-input");
    dialogContent.classList.toggle("dark-dialog-content");
    update.classList.toggle("dark-update");
    dummy.classList.toggle("dark-dummy");
    close.classList.toggle("dark-close-btn");
    toggle.classList.toggle("dark-toggle");

    force = 1;
  } else if (force == 1) {
    list.forEach((item) => {
      item.querySelector(".trashcan").style.backgroundImage =
        "url('Trash.svg')";
      item
        .querySelector("input[type='checkbox'")
        .style.setProperty("--check-color", "#4f4f4f");
      item.querySelector("input[type='checkbox']").style.borderColor =
        "#4f4f4f";
      item.querySelector("label").style.color = "#4f4f4f";
      item.classList.remove("dark-list");
    });
    contain.classList.toggle("dark-contain");
    wrap.classList.toggle("dark-wrap");
    body.classList.toggle("dark-body");
    header.classList.toggle("dark-header");
    time.classList.toggle("dark-time");
    heading3.classList.toggle("dark-h3");
    dialogContent.classList.toggle("dark-dialog-content");
    add.classList.toggle("dark-add");
    dialogInput.classList.toggle("dark-dialog-input");
    dummy.classList.toggle("dark-dummy");
    update.classList.toggle("dark-update");
    close.classList.toggle("dark-close-btn");
    toggle.classList.toggle("dark-toggle");
    force = 0;
  }
});

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
function dynamicTime() {
  const now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let period = hours <= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (mins < 10) {
    mins = "0" + mins;
  } else {
    mins = mins;
  }
  let fnlTime = `${hours}:${mins} ${period}`;
  time.innerHTML = fnlTime;
}

dynamicTime();
setInterval(dynamicTime, 30000);

// opens the dialog box when the add button is clicked
add.addEventListener("click", function () {
  dialog.style.display = "block";
});

// the close(cross) button
close.addEventListener("click", function () {
  dialog.style.display = "none";
});

// targets the dialog box to close when clicked outside the dialog box
dialog.addEventListener("click", function (event) {
  if (event.target == dialog) {
    dialog.style.display = "none";
  }
});

// creates a new div element with a checkbox and a label
update.addEventListener("click", function () {
  const text = dialogInput.value;
  const newDiv = document.createElement("div");
  const check = document.createElement("input");
  check.type = "checkbox";
  const newlabel = document.createElement("label");
  newlabel.innerHTML = text;
  const trash = document.createElement("button");
  trash.className = "trashcan";

  //checks the checkbox when label is clicked
  newlabel.addEventListener("click", function (event) {
    if ((event.target = newlabel)) {
      check.checked = !check.checked;
    }
    check.dispatchEvent(new Event("change"));
  });

  // deletes the div when the trash icon is clicked
  trash.addEventListener("click", function () {
    newDiv.remove();
  });

  // strikethrough the label if the checkbox is checked
  check.addEventListener("change", function () {
    if (check.checked) {
      newlabel.style.textDecoration = "line-through";
    } else {
      newlabel.style.textDecoration = "none";
    }
  });

  // checks the checkbox when the div is clicked
  newDiv.addEventListener("click", function (event) {
    if (event.target == newDiv) {
      check.checked = !check.checked;
    }
    check.dispatchEvent(new Event("change"));
  });

  // adds the new div to the contain div
  newDiv.appendChild(check);
  newDiv.appendChild(newlabel);
  newDiv.appendChild(trash);
  newDiv.className = "list";
  contain.appendChild(newDiv);
  dialog.style.display = "none";
  dialogInput.value = "";
  dummy.style.display = "none";

  let list = document.querySelectorAll(".list");

  if (force == 1) {
    list.forEach((item) => {
      item
        .querySelector("input[type='checkbox']")
        .style.setProperty("--check-color", "whitesmoke");
      item.querySelector(".trashcan").style.backgroundImage =
        "url('dark-trash.svg')";
      item.querySelector("input[type='checkbox']").style.borderColor =
        "whitesmoke";
      item.querySelector("label").style.color = "whitesmoke";
      item.classList.add("dark-list");
    });
  } else {
    list.forEach((item) => {
      item
        .querySelector("input[type='checkbox'")
        .style.setProperty("--check-color", "#4f4f4f");
      item.querySelector(".trashcan").style.backgroundImage =
        "url('Trash.svg')";
      item.querySelector("input[type='checkbox']").style.borderColor =
        "#4f4f4f";
      item.querySelector("label").style.color = "#4f4f4f";
      item.classList.remove("dark-list");
    });
  }
});

//bringing back dummy div when there is no child in the contain div
const observer = new MutationObserver(function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      if (contain.children.length == 1) {
        dummy.style.display = "flex";
      }
    }
  }
});

observer.observe(contain, { childList: true });
