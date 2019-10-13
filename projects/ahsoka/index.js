// variable for treats given to ahsoka
let count = 0;

if (
  sessionStorage.getItem("c") !== null &&
  typeof sessionStorage.getItem("c") !== "undefined"
) {
  count = JSON.parse(sessionStorage.getItem("c"));
} // if we previously saved the variable

// convert count to a string and save in sessionStorage
// if users jump to different pages, treats given doesn't reset
let convertCount = JSON.stringify(count);
sessionStorage.setItem("c", convertCount);
document.getElementById("t").innerHTML = count;

function addTreat() {
  ++count; // increment treats given
  convertCount = JSON.stringify(count); // convert to string
  sessionStorage.setItem("c", convertCount); // save
  document.getElementById("t").innerHTML = convertCount; // update html
}
