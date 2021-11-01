import renderHeader from "./render/header.js";
import renderList from "./render/list.js";
import STORE from "./store/store.js";
import initEvents from "./events/index.js";

const app = (root) => {
  const render = (store) => {
    root.innerHTML = ` 
    <div class="container">
      ${renderHeader(store, store.activePost ? store.activePost : null)}
      ${renderList(store)}
    </div>
  `;

    initEvents(root, store, render);
  };

  render(STORE);
};

export default app;
