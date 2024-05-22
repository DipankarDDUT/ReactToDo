import { useState } from 'react';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
import FilterButton from './filterButton';
import TodoList from './todolist';
const Todo = ()=>{
    const [newTodoText,setNewTodoText]=useState("");
    const [searchTerm,setSearchTerm]=useState("");
    const dispatch=useDispatch();
    const handleAddToDO=()=>{
        if(newTodoText.trim()!==""){
                dispatch(addTodo(newTodoText));
                setNewTodoText("");
        }
    }

    const handleSearchTodo=()=>{
        if(searchTerm.trim()!==""){
                dispatch(updateSearchTerm(searchTerm));
        }
    }
    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Todo App</h2>

            {/* input text and button */}
            <div className="flex items-center mb-4">
                <input type="text" name="addInputTodo" placeholder="Add Todo" value={newTodoText}
                onChange={(e)=>{setNewTodoText(e.target.value)}}
                className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button onClick={handleAddToDO} className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'><BsPlus/></button>
            </div>

            {/* filter and search  */}
            <div>
                <div className='flex items-center mb-4'>
                    <input type="text"  name="searchTerm" placeholder="Search..." value={searchTerm}  className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    onChange={(e)=>{setSearchTerm(e.target.value)}  } />
                <button onClick={handleSearchTodo} className=' ml-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'><BsSearch/></button>
                
                </div>
                <FilterButton />
            </div>
          <TodoList/>
        </div>
    )
}

export default Todo;