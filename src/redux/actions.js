import {ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED,MARK_ALL_INCOMPLETE, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM} from './actionTypes';
export const addTodo = (text)=>({
// every action must have a type thats. why we defined the actionTypes
type : ADD_TODO,
payload : {text}
});

export const toggleTodo = (id)=>({
type:TOGGLE_TODO,
payload :{id}
});

export const markCompleted = (id)=>({
    type :MARK_COMPLETED,
    payload : {id}
});

export const markIncompleted = (id)=>({
    type :MARK_INCOMPLETE,
    payload :{id}
});
export  const markAllInCompleted=()=>({
    type:MARK_ALL_INCOMPLETE,
});

export const filterTodos = (filter)=>({
    type : FILTER_TODOS,
    payload : {filter}
});

export const markAllCompleted = ()=>({
    type :MARK_ALL_COMPLETED,
});

export const removeTodo=(id)=>({
    type : REMOVE_TODO,
    payload : {id}
});

export const updateSearchTerm = (searchTerm) =>({
    type : UPDATE_SEARCH_TERM,
    payload : {searchTerm}

});