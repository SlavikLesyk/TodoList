import renderList from "./render/list.js";
import STORE from "./store/store.js";
import initEvents from "./events/index.js";

const app = () => {
  const render = () => {
    const store = JSON.parse(window.localStorage.getItem("store"));
    renderList(store);

    initEvents(render);
  };

  if (!window.localStorage.length) {
    window.localStorage.setItem("store", JSON.stringify(STORE));
  }

  render();
};

export default app;
