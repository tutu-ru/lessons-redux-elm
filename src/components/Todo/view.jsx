import React from 'react';
import { view } from 'redux-elm';

import { change } from './actions';

export default view(({ model, dispatch }) => (
    <div>
        <label>
            <input
                type="checkbox"
                checked={model.completed}
                onChange={() => dispatch(change())}
            />
            {model.title}
        </label>
    </div>
));
