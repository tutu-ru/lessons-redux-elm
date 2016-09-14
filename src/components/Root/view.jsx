import React from 'react';
import { view, forwardTo } from 'redux-elm';

import InputForm from '../InputForm/view';

import { addTodo } from './actions';

export default view (({ model, dispatch }) => (
    <div>
        Root
        <ul>
            {model.todos.map((todo, index) =>
                <li key={index}>
                    <Todo model={todo} />
                </li>
            )}
        </ul>

        <InputForm
            model={model.form}
            onSubmit={(newTodo) => dispatch(addTodo(newTodo))}
            dispatch={forwardTo(dispatch, 'Form')}
        />
    </div>
));
