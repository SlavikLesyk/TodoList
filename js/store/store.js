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
  defaultPriority: 'medium',
  visibleBox: null,
};

export default STORE;
