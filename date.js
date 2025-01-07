const now = new Date();
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayNow = day[now.getDay()];

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monNow = month[now.getMonth()];

const nowDate = now.getDate();
const fnlDate = `${dayNow},${monNow} ${nowDate}`;
console.log(fnlDate);

// 12 hour clock format 

function dynamicTime(){
    
const now = new Date();
let hours = now.getHours();
let mins = now.getMinutes();
let period = hours <= 12 ? "AM" : "PM";
hours = hours % 12;
hours = hours ? hours : 12;
mins < 10 ? "0" + mins : mins;
let fnlTime = `${hours}:${mins} ${period}`;
console.log(fnlTime);
}

setInterval(dynamicTime, 60000);