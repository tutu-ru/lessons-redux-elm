import { Updater, Matchers } from 'redux-elm';

import InputForm, { init as inputFormInit } from '../InputForm/Updater';
import Filters, { init as filtersInit } from '../Filters/Updater';
import Todo, { init as todoInit } from '../Todo/Updater';

import { ADD_TODO, SET_FILTER } from './actions';

const initialState = {
    form: inputFormInit('hello-world'),
    filters: filtersInit(['All', 'Done', 'Active']),
    todos: ['hey', 'ho', 'let\'s go'].map(todo => todoInit(todo)),
    filter: null
};

export default new Updater(initialState)
    // прокидываем события формы
    .case('Form', (model, action) => ({...model, form: InputForm(model.form, action)}))

    // просто прокидываем
    // список доступных фильтров
    // и отмечаем выбранный
    .case('Filters', (model, action) => ({...model, filters: Filters(model.filters, action)}))

    // меняем значение тудушек
    // т.к. у нас их целый список, то
    // тут необходимо использовать
    // parameterizedMatcher
    .case('Todo', (model, action) => ({...model, todos: model.todos.map((todo, index) =>
        index === parseInt(action.matching.args.param) ? Todo(todo, action) : todo
    )}), Matchers.parameterizedMatcher)

    // добавляем todo
    // используем ф-ию todoInit для
    // правильного преобразования
    .case(ADD_TODO, (model, action) => {
        const { payload } = action;

        if (payload) {
            return {...model, todos: [...model.todos, todoInit(payload)]}
        }

        return model;
    })

    // устанавливаем активный фильтр
    // компонент фильтров про это ничего не знает
    // и только выводит список доступных фильтров
    .case(SET_FILTER, (model, action) => ({...model, filter: action.payload}))
    .toReducer();
