import { parseStore } from "../store/store.js";

const modalRender = () => {
  const modal = document.getElementById("modal");
  const store = parseStore();
  const {activePost, defaultPriority} = store;
  
  let priority = defaultPriority;
  let text = "";

  if (activePost) {
    text = activePost.text;
    priority = activePost.priority;
  }

  const createInput = () => {
    const input = document.createElement("input");
    input.classList.add("modal__input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "todo-name");
    input.setAttribute("value", text);
    input.setAttribute("id", "todo-input");
    
    return input;
  };

  modal.innerHTML = `
  <div class="modal__container">
  <form class="modal__form" id="form">
    <button class="modal__close-btn">
    <svg version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" height="32" 
      viewBox="0 0 32 32"
      class="modal__btn-icon"
    >
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
      <path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
    </svg>
    </button>
    <div class="modal__input-container"></div>
    <div class="modal__radio-container">
      <input
        class="modal__radio"
        type="radio"
        name="priority"
        id="radio-high"
        value="high"
        ${priority === "high" ? "checked" : " "}
      />
      <label for="radio-high" class="modal__radio-label">High</label>
      <input
        class="modal__radio"
        type="radio"
        name="priority"
        id="radio-medium"
        value="medium"
        ${priority === "medium" ? "checked" : " "}
      />
      <label for="radio-medium" class="modal__radio-label">Medium</label>
      <input
        class="modal__radio"
        type="radio"
        name="priority"
        id="radio-low"
        value="low"
        ${priority === "low" ? "checked" : " "}
      />
      <label for="radio-low" class="modal__radio-label">Low</label>
    </div>
    <button class="modal__btn" id="submit-btn" type="submit" ${
      text ? "" : "disabled"
    }>
      save
    </button>
  </form>
</div>
`;

document.querySelector('.modal__input-container').appendChild(createInput());
};

export default modalRender;
