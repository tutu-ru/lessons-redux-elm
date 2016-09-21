import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Todo from '../Todo/view';
import getVisibleTodos from './filter';

export default view(({ model, dispatch, filter }) => (
    <ul>
        {getVisibleTodos(model, filter).map((todo, index) =>
            <li key={index}>
                <Todo
                    model={todo}
                    dispatch={forwardTo(dispatch, 'Todo', index)}
                />
            </li>
        )}
    </ul>
));
