import React from 'react';
import { view } from 'redux-elm';

import { change } from './actions';



export default view (({ model, dispatch, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(model.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={model.value}
                onChange={(e) => dispatch(change(e.target.value))}
            />
        </form>
    )
});
