import React from 'react';
import { view, forwardTo } from 'redux-elm';

import List from '../List/view';
import InputForm from '../InputForm/view';
import Filters from '../Filters/view';

import { addTodo, setFilter } from './actions';


export default view (({ model, dispatch }) => (
    <div>
        <List
            model={model.list}
            filter={model.filter}
            dispatch={forwardTo(dispatch, 'List')}
        />

        <InputForm
            model={model.form}
            onSubmit={(newTodo) => dispatch(addTodo(newTodo))}
            dispatch={forwardTo(dispatch, 'Form')}
        />

        <Filters
            model={model.filters}
            onChange={(filter) => dispatch(setFilter(filter))}
            dispatch={forwardTo(dispatch, 'Filters')}
        />
    </div>
));
