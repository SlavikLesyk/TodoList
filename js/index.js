import app from './app.js'

const root = document.getElementById("root");

if (!root) {
  throw new Error("Can't find root element");
}

app(root);