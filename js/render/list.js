import renderListItems from "./listItem.js";

const renderList = (store) => {
  const { todoList } = store;
  const list = document.getElementById('list');

  const filterPriorityList = (list, priority) =>
    list.filter((item) => item.priority === priority);

  const highPriorityList = filterPriorityList(todoList, "high");
  const mediumPriorityList = filterPriorityList(todoList, "medium");
  const lowPriorityList = filterPriorityList(todoList, "low");

  const renderList = (store, list, type) => `
    <h2 class="secondary-heading secondary-heading_${type}">${type} Priority Tasks</h2>
    <ul class="todo-list todo-list_${type}">
      ${renderListItems(store, list)}
    </ul>
  `;

  return list.innerHTML = `
  <div class="todo-list__wrap">
    ${
      highPriorityList.length ? renderList(store, highPriorityList, "high") : ""
    }
    ${
      mediumPriorityList.length
        ? renderList(store, mediumPriorityList, "medium")
        : ""
    }
    ${
      lowPriorityList.length ? renderList(store, lowPriorityList, "low") : ""
    }
  </div>`;
};

export default renderList;
