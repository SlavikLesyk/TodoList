const renderHeader = (store, postId) => {
  let inputText = "";
  let activeRadio = store.defaultPriority;

  if (postId) {
    const { text, priority } = store.todoList.find(
      (item) => item.id === postId
    );
    inputText = text;
    activeRadio = priority;
  }

  return `
  <header class="header">
    <h1 class="main-heading">Todo List</h1>
    <div class="todo-form">
      <input class="input" value="${inputText}" id="input-text">
      <div class="priority" id="priority">
        <input 
          class="priority__radio" 
          type="radio" 
          id="priority-high" 
          name="priority" 
          value="high"
          ${activeRadio === "high" ? "checked" : ""}
        >
        <label 
          class="priority__label priority__label_high"
          for="priority-high">
          HIGH
        </label>
        <input 
          class="priority__radio" 
          type="radio" 
          id="priority-medium" 
          name="priority" 
          value="medium" 
          ${activeRadio === "medium" ? "checked" : ""}
        >
        <label 
          class="priority__label priority__label_medium"
          for="priority-medium">
          MEDIUM
        </label>
        <input 
          class="priority__radio" 
          type="radio" 
          id="priority-low" 
          name="priority" 
          value="low"
          ${activeRadio === "low" ? "checked" : ""}
        >
        <label 
          class="priority__label priority__label_low"
          for="priority-low">
          LOW
        </label>
      </div>
      ${
        postId
          ? `<button class="header-btn" id="addBtn" type="submit" data-type="edit">save</button>`
          : `<button class="header-btn" id="saveBtn" type="submit" data-type="add">add</button>`
      }
    </div>
  </header>
`;
};

export default renderHeader;
