import { Updater } from 'redux-elm';
import { CHANGE } from './actions';

export const init = (filters = []) => filters.map(filter => {
    if (typeof filter === 'object') {
        return filter;
    }

    return {
        value: false,
        title: filter
    };
});

export default new Updater(init())
    .case(CHANGE, (model, action) => model.map((filter, index) => ({...filter, value: index === action.payload})))
    .toReducer();
