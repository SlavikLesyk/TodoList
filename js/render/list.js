import renderListItems from "./listItem.js";

const renderList = (store) => {
  const {todoList} = store;
  
  return `
  <div class="todo-list__wrap">
    ${todoList.find((item) => item.priority === 'high') ? '<h2 class="secondary-heading secondary-heading_high">High Priority Tasks</h2>' : ""}
    <ul class="todo-list todo-list_high">
      ${renderListItems(store, filterPriorityList(todoList, "high"))}
    </ul>
    ${todoList.find((item) => item.priority === 'medium') ? '<h2 class="secondary-heading secondary-heading_medium">Medium Priority Tasks</h2>' : ""}
    <ul class="todo-list todo-list_medium">
      ${renderListItems(store, filterPriorityList(todoList, "medium"))}
    </ul>
    ${todoList.find((item) => item.priority === 'low') ? '<h2 class="secondary-heading secondary-heading_low">Low Priority Tasks</h2>' : ""}
    <ul class="todo-list todo-list_low">
      ${renderListItems(store, filterPriorityList(todoList, "low"))}
    </ul>
  </div>`;
};

const filterPriorityList = (list, priority) =>
  list.filter((item) => item.priority === priority);

export default renderList;
