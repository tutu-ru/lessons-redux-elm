export default (todos, filter) => {
    if (!filter) {
        return todos;
    }

    switch (filter.title) {
        case 'All':
            return todos;
            break;
        case 'Done':
            return todos.filter(todo => todo.completed);
            break;
        case 'Active':
            return todos.filter(todo => !todo.completed);
            break;
    }
};
