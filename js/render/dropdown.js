const renderDropdown = (id, chosen, list, visible) => {
  const todoItems = list
    .filter((item) => item !== chosen)
    .map(
      (item) =>
        `<li class="dropdown-item" data-item-id=${id} data-type=${item}>
            ${item}
        </li>`
    )
    .join(" ");

  const renderList = () => `
    <ul class="dropdown-list">
      ${todoItems}
    </ul>
  `;

  return `
    <div class="dropdown">
      <p class="
        todo-list__priority 
        todo-list__btn-priority
      "
      data-item-id=${id}
      data-type=${chosen}
      >
        ${chosen}
      </p>
      ${visible ? renderList() : ""}
    </div>
  `;
};

export default renderDropdown;
