import React from 'react';
import { view, forwardTo } from 'redux-elm';

import InputForm from '../InputForm/view';
import Filters from '../Filters/view';
import Todo from '../Todo/view';

import { addTodo, setFilter } from './actions';
import filter from './filter';

export default view (({ model, dispatch }) => (
    <div>
        <ul>
            {filter(model.todos, model.filter).map((todo, index) =>
                <li key={index}>
                    <Todo
                        model={todo}
                        dispatch={forwardTo(dispatch, 'Todo', index)}
                    />
                </li>
            )}
        </ul>

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
