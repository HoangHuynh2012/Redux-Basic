export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const addItem = value => {
  return {
    type: ADD_ITEM,
    payload: value,
  };
};
export const deleteItem = value => {
  return {
    type: DELETE_ITEM,
    payload: value,
  };
};
