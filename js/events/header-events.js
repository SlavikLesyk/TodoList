const headerEvents = (root, store, render) => {
  root.querySelector(".header-btn").addEventListener("click", (event) => {
    const type = event.target.getAttribute("data-type");
    const text = root.querySelector("#input-text").value;
    const priority = root.querySelector('input[name="priority"]:checked').value;

    if (!text) {
      return;
    }

    switch (type) {
      case "edit":
        store = {
          ...store,
          todoList: store.todoList.map((item) =>
            item.id === store.activePost
              ? { ...item, text: text, priority: priority }
              : item
          ),
          activePost: null,
          defaultPriority: priority,
        };

        render(store);

        break;

      case "add":
        store = {
          ...store,
          todoList: [
            ...store.todoList,
            {
              id: store.todoList.length
                ? store.todoList[store.todoList.length - 1].id + 1
                : 1,
              text: text,
              priority: priority,
              isdDone: false,
            },
          ],
          defaultPriority: priority,
        };

        render(store);

        break;

      default:
        throw new Error("Button type Error");
    }
  });
};
export default headerEvents;
