import React from 'react';
import { view } from 'redux-elm';

import { change } from './actions';


export default view(({ model, dispatch, onChange }) => (
    <div>
        <ul>
            {model.map((filter, index) =>
                <li key={index}>
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value={filter.value}
                            onChange={() => {
                                dispatch(change(index));
                                onChange(filter);
                            }}
                        />
                        {filter.title}
                    </label>
                </li>
            )}
        </ul>
    </div>
));
