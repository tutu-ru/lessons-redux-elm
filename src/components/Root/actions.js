export const ADD_TODO = 'root/ADD_TODO';

export const addTodo = (newTodo) => ({
    type: ADD_TODO,
    payload: newTodo
});
