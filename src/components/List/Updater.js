import { Updater, Matchers } from 'redux-elm';
import Todo, { init as todoInit, compare as compareTodos } from '../Todo/Updater';

export const init = (todos = []) => {
    return todos.map(todo => todoInit(todo));
};

export const addTodo = (todos = [], todo) => {
    const hasTodo = todos.find(item => compareTodos(item, todoInit(todo)));
    return !hasTodo ? [...todos, todoInit(todo)] : todos;
};

export default new Updater(init())

    // меняем значение тудушек
    // т.к. у нас их целый список, то
    // тут необходимо использовать
    // parameterizedMatcher
    .case('Todo', (model, action) => model.map((todo, index) =>
        index === parseInt(action.matching.args.param) ? Todo(todo, action) : todo
    ), Matchers.parameterizedMatcher)

    .toReducer();
