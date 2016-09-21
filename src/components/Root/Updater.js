import { Updater } from 'redux-elm';

import InputForm, { init as inputFormInit } from '../InputForm/Updater';
import Filters, { init as filtersInit } from '../Filters/Updater';
import List, { init as listInit, addTodo } from '../List/Updater';

import { ADD_TODO, SET_FILTER } from './actions';

const initialState = {
    form: inputFormInit('hello-world'),
    filters: filtersInit(['All', 'Done', 'Active']),
    list: listInit(['hey', 'ho', 'let\'s go']),
    filter: null
};

export default new Updater(initialState)
    // прокидываем события формы
    .case('Form', (model, action) => ({...model, form: InputForm(model.form, action)}))

    // просто прокидываем
    // список доступных фильтров
    // и отмечаем выбранный
    .case('Filters', (model, action) => ({...model, filters: Filters(model.filters, action)}))

    .case('List', (model, action) => ({...model, list: List(model.list, action)}))

    // добавляем todo
    // используем ф-ию todoInit для
    // правильного преобразования
    .case(ADD_TODO, (model, action) => {
        const { payload } = action;

        if (payload) {
            return {...model, list: addTodo(model.list, payload)}
        }

        return model;
    })

    // устанавливаем активный фильтр
    // компонент фильтров про это ничего не знает
    // и только выводит список доступных фильтров
    .case(SET_FILTER, (model, action) => ({...model, filter: action.payload}))
    .toReducer();
