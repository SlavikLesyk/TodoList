const listEvents = (root, store, render) => {
  root.querySelectorAll(".todo-list__btn-done").forEach((item) =>
    item.addEventListener("click", (event) => {
      const id = +event.target.getAttribute("data-item-id");
      store = {
        ...store,
        todoList: store.todoList.map((item) =>
          item.id === id ? { ...item, isDone: !item.isDone } : item
        ),
        activePost: null,
      };

      render(store);
    })
  );

  root.querySelectorAll(".todo-list__btn-edit").forEach((item) =>
    item.addEventListener("click", (event) => {
      const id = +event.target.getAttribute("data-item-id");

      if (store.todoList.find((item) => item.id === id).isDone) {
        return;
      }

      store = {
        ...store,
        activePost: id,
      };

      render(store);
    })
  );

  root.querySelectorAll(".todo-list__btn-remove").forEach((item) =>
    item.addEventListener("click", (event) => {
      const id = +event.target.getAttribute("data-item-id");
      store = {
        ...store,
        todoList: store.todoList.filter((item) => item.id !== id),
        activePost: null,
      };

      render(store);
    })
  );

  root.querySelectorAll(".todo-list__btn-priority").forEach((item) =>
    item.addEventListener("click", (event) => {
      const id = +event.target.getAttribute("data-item-id");

      if (store.todoList.find((item) => item.id === id).isDone) {
        return;
      }

      store = {
        ...store,
        visibleBox: store.visibleBox !== id ? id : null,
      };

      render(store);
    })
  );

  root.querySelectorAll(".todo-list__change-btn").forEach((item) =>
    item.addEventListener("click", (event) => {
      const id = +event.target.getAttribute("data-item-id");
      const type = event.target.getAttribute("data-type");

      store = {
        ...store,
        todoList: store.todoList.map((item) =>
          item.id === id ? { ...item, priority: type } : item
        ),
        visibleBox: null,
      };

      render(store);
    })
  );
};

export default listEvents;
