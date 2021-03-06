import { Updater } from 'redux-elm';
import { CHANGE } from './actions';

export const init = (todo) => {
    if (typeof todo === 'object') {
        return todo;
    }

    return {
        completed: false,
        title: todo
    };
}; 

export const compare = (oldTodo, newTodo) => oldTodo.title === newTodo.title;

export default new Updater(init())
    .case(CHANGE, (model) => ({...model, completed: !model.completed}))
    .toReducer();
