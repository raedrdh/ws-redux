import { EDIT, ADD, CHECKED } from "../Constants/actions-types";
const initialState = {
  todos: [{ id: 1, content: "task1", check: true }],
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id == payload.id ? { ...el, content: payload.NewDescription } : el
        ),
      };

    case ADD:
      return { ...state, todos: [...state.todos, payload] };
    case CHECKED:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id == payload ? { ...el, check: !el.check } : el
        ),
      };
    default:
      return state;
  }
};
