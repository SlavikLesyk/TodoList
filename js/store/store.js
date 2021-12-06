const STORE = {
  todoList: [
    {
      id: 1,
      priority: "medium",
      text: "Go for a walk",
      isDone: false,
    },
    {
      id: 2,
      text: "Drink coffee",
      priority: "low",
      isDone: false,
    },
    {
      id: 3,
      priority: "medium",
      text: "Buy Fruits",
      isDone: true,
    },
    {
      id: 4,
      priority: "high",
      text: "Call to Masha",
      isDone: false,
    },
  ],
  activePost: null,
  visibleBox: null,
  defaultPriority: 'medium',
  categories: ["high", "medium", "low"],
};

const parseStore = () => JSON.parse(window.localStorage.getItem('store'))
const saveStore = (store) => window.localStorage.setItem('store', JSON.stringify(store))

export {parseStore, saveStore}
export default STORE;
