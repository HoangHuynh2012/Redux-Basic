const initialState = {
  todoList: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, todoList: [...state.todoList, action.payload]};
    case 'DELETE_ITEM':
      return {
        ...state,
        todoList: [
          ...state.todoList.filter(item => item?.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
