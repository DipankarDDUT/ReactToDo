
import {
    ADD_TODO,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    REMOVE_TODO,
    TOGGLE_TODO,
    UPDATE_SEARCH_TERM
} from './actionTypes';


const initialState = {
    todos:[],
    filter: "ALL",
    searchTerm: ""
}


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let todos={ text: action.payload.text, completed: false };
            return {
                ...state,
                todos: Array.isArray(state.todos)?[...state.todos, todos]:[todos]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index == action.payload.id ? {
                        ...todo, completed: !todo.completed
                    } : todo)
            };
        case MARK_ALL_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => ({ ...todo, completed :true}))
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.map((index) => {
                    index != action.payload.id
                })
            };
        case MARK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) => index == action.payload.id ?
                    {
                        todo, completed: true
                    } : todo)
            };
        case MARK_INCOMPLETE:
            return {
                ...state,
                todos: state.todos.map((todo, index) => index == action.payload.id ?
                    {
                        todo, completed: false
                    } : todo)
            };
        case FILTER_TODOS:
            return{
                ...state,
               filter:action.payload.filter
            };
            case UPDATE_SEARCH_TERM:
            return{
                ...state,
               searchTerm:action.payload.searchTerm
            };


        default:
            return{
                state
            };
            break;
    }
}

export default todoReducer;