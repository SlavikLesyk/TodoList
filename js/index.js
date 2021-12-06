import app from "./app.js";

const list = document.getElementById("list");
const modal = document.getElementById("modal");

if (!list) {
  throw new Error("Can't find list element");
}
if (!modal) {
  throw new Error("Can't find modal element");
}

app();
