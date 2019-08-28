import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  GET_INIT_LIST
} from "./actionTypes";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteAction = () => ({
  type: DELETE_TODO_ITEM
});

export const getTodoList = () => {
  return dispatch => {
    const data = [1, 2, 3];
    const action = getInputChangeAction(data);
    dispatch(action);
    console.log("异步操作");
  };
};

export const getInitList = () => ({
  type: GET_INIT_LIST
});
