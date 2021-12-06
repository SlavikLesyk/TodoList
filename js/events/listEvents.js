import modalRender from "../render/modal.js";
import modalEvents from "./modalEvents.js";
import { parseStore, saveStore } from "../store/store.js";

const listEvents = (render) => {
  const btnAdd = document.querySelector(".header__add-btn");
  const store = parseStore();
  btnAdd.addEventListener("click", (e) => {
    modalRender();
    modalEvents(store);
  });

  document.querySelectorAll(".todo-list__checkbox").forEach((item) =>
    item.addEventListener("input", (event) => {
      const id = +event.target.getAttribute("data-item-id");
      const newStore = {
        ...store,
        todoList: store.todoList.map((item) =>
          item.id === id ? { ...item, isDone: !item.isDone } : item
        ),
        activePost: null,
      };

      saveStore(newStore);
      render();
    })
  );

  document.querySelectorAll(".todo-list__btn-edit").forEach((item) => {
    const id = +item.getAttribute("data-item-id");
    item.addEventListener("click", (event) => {
      const activePost = store.todoList.find((item) => item.id === id);
      if (activePost.isDone) {
        return;
      }

      const newStore = {
        ...store,
        activePost: activePost,
      };

      saveStore(newStore);
      modalRender();
      modalEvents(store);
    });
  });

  document.querySelectorAll(".todo-list__btn-remove").forEach((item) => {
    const id = +item.getAttribute("data-item-id");
    item.addEventListener("click", (event) => {
      const newStore = {
        ...store,
        todoList: store.todoList.filter((item) => item.id !== id),
        activePost: null,
      };

      saveStore(newStore);
      render();
    });
  });

  document.querySelectorAll(".todo-list__btn-priority").forEach((item) =>
    item.addEventListener("click", (event) => {
      const id = +event.target.getAttribute("data-item-id");
      console.log(event.target);

      if (store.todoList.find((item) => item.id === id).isDone) {
        return;
      }

      const newStore = {
        ...store,
        visibleBox: store.visibleBox !== id ? id : null,
      };

      saveStore(newStore);
      render();
    })
  );

  document.querySelectorAll(".dropdown-item").forEach((item) => {
    const id = +item.getAttribute("data-item-id");
    item.addEventListener("click", (event) => {
      console.log(item);
      const type = event.target.getAttribute("data-type");

      const newStore = {
        ...store,
        todoList: store.todoList.map((item) =>
          item.id === id ? { ...item, priority: type } : item
        ),
        visibleBox: null,
      };

      saveStore(newStore);
      render();
    });
  });
};

export default listEvents;
