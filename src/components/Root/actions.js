export const ADD_TODO = 'root/ADD_TODO';
export const SET_FILTER = 'root/SET_FILTER';

export const addTodo = (newTodo) => ({
    type: ADD_TODO,
    payload: newTodo
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
});
