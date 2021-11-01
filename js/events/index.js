import headerEvents from "./header-events.js";
import listEvents from "./list-events.js";

const initEvents = (root, store, render) => {
  headerEvents(root, store, render);
  listEvents(root, store, render);
};

export default initEvents;
