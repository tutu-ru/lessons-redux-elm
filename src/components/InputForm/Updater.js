import { Updater } from 'redux-elm';

import { CHANGE } from './actions';

export const init = (initValue = 'some shit') => ({
    errors: [],
    value: initValue
});

export default new Updater(init())
    .case(CHANGE, (model, action) => ({...model, value: action.payload}))
    .toReducer();
