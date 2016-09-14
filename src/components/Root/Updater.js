import { Updater } from 'redux-elm';

import InputForm, { init as inputFormInit } from '../InputForm/Updater';

import { ADD_TODO } from './actions';

const initialState = {
    form: inputFormInit('hello-world'),
    todos: ['hey', 'ho', 'let\'s go']
};

export default new Updater(initialState)
    .case('Form', (model, action) => ({...model, form: InputForm(model.form, action)}))

    .case(ADD_TODO, (model, action) => {
        const { payload } = action;

        if (payload) {
            return {...model, todos: [...model.todos, payload]}
        }

        return model;
    })
    .toReducer();
