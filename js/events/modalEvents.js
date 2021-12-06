import render from "../app.js";
import { saveStore } from "../store/store.js";

const modalEvents = () => {
  const store = JSON.parse(window.localStorage.getItem("store"));
  const textInput = document.getElementById("todo-input");
  const form = document.getElementById("form");
  const formContainer = document.querySelector(".modal__container");

  const btnSubmit = document.getElementById("submit-btn");
  const btnClose = document.querySelector(".modal__close-btn");

  btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("hidden");
  });

  form.addEventListener("submit", (e) => {
    const inputs = e.target.elements;
    const radioValue = inputs["priority"].value;
    const text = inputs["todo-name"].value;

    e.preventDefault();

    console.log(store);
    if (store.activePost) {
      const newStore = {
        ...store,
        todoList: store.todoList.map((item) =>
          item.id === store.activePost.id
            ? { ...item, text: text, priority: radioValue }
            : item
        ),
        activePost: null,
        defaultPriority: radioValue,
      };

      console.log(newStore)

      saveStore(newStore)
      render();
    } else {
      const newStore = {
        ...store,
        todoList: [
          ...store.todoList,
          {
            id: store.todoList.length
              ? store.todoList[store.todoList.length - 1].id + 1
              : 1,
            text: text,
            priority: radioValue,
            isdDone: false,
          },
        ],
        defaultPriority: radioValue,
      };

      saveStore(newStore)
      render();
    }
    formContainer.classList.add("hidden");
  });

  textInput.addEventListener("input", (e) => {
    btnSubmit.disabled = !e.target.value.length;
  });
};
export default modalEvents;
