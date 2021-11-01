const renderListItems = (store, list) =>
  list
    .map(
      ({ id, priority, text, isDone }) => `
    <li class="todo-list__item">
      <button class="todo-list__btn-done ${
        isDone ? "icon-checkmark" : ""
      }" data-item-id="${id}"></button> 
      <p class="todo-list__text ${isDone ? "todo-list__done" : ""}">${text}</p>
      <div class="todo-list__priority-wrap">
        <span 
          class="
            todo-list__priority 
            todo-list__btn-priority 
            ${isDone ? "todo-list__done" : ""}
          "
          data-item-id="${id}"
          data-type=${priority}
        >
         ${priority}
        </span>
        <div class="todo-list__change-box ${
          store.visibleBox === id ? "visible" : ""
        }" data-item-id="${id}"">
          <div class="todo-list__change-box-wrap">
            ${
              priority !== "high"
                ? `<span class="todo-list__change-btn" data-item-id="${id}" data-type="high">high</span>`
                : ""
            } ${
              priority !== "medium"
                ? `<span class="todo-list__change-btn" data-item-id="${id}" data-type="medium">medium</span>`
                : ""
            } ${
              priority !== "low"
                ? `<span class="todo-list__change-btn" data-item-id="${id}" data-type="low">low</span>`
                : ""
            }
          </div>
        </div>
      </div>
      <button 
        class="
          todo-list__btn-edit
          icon-pencil           
          ${isDone ? "todo-list__done" : ""}
        "
        data-item-id="${id}"
      ></button>
      <button class="todo-list__btn-remove icon-bin" data-item-id="${id}"></button>
    </li>
  `
    )
    .join(" ");

export default renderListItems;
