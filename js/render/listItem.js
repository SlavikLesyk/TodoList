import renderDropdown from "./dropdown.js";

const renderListItems = (store, list) => {
  const { categories, visibleBox } = store;

  return list
    .map(
      ({ id, priority, text, isDone }) => `
    <li class="todo-list__item">
      <input type="checkbox" 
        id="${"check-done" + id}"
        class="todo-list__checkbox" data-item-id="${id}"
        ${isDone ? "checked" : ""}
      >
      <label for="${"check-done" + id}" class="todo-list__check-label">
      </label>
      <div class="todo-list__checked-container">
      <p class="todo-list__text ${isDone ? "todo-list__done" : ""}">${text}</p>
      <div class="todo-list__dropdown-wrap ${isDone ? "todo-list__done" : ""}">
        ${renderDropdown(id, priority, categories, visibleBox === id)}
      </div>
      <button 
        class="
          todo-list__btn-edit      
          ${isDone ? "todo-list__done" : ""}
        "
        data-item-id="${id}"
      >
        <svg version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" height="20" 
          viewBox="0 0 20 20"
          class="todo-list__icon-edit"
          >
          <path d="M12.3 3.7l4 4-12.3 12.3h-4v-4l12.3-12.3zM13.7 2.3l2.3-2.3 4 4-2.3 2.3-4-4z">
          </path>
        </svg>
      </button>     
      <button class="todo-list__btn-remove" data-item-id="${id}">
        <svg version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 20 20"
          class="todo-list__icon-delete"
        >
	        <path d="M6 2l2-2h4l2 2h4v2h-16v-2h4zM3 6h14l-1 14h-12l-1-14zM8 8v10h1v-10h-1zM11 8v10h1v-10h-1z">
	        </path>
        </svg>
      </button>
    </li>
  `
    )
    .join(" ");
};

export default renderListItems;
