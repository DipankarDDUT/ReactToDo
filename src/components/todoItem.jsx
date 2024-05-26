import {FaToggleOff, FaToggleOn} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toggleTodo,removeTodo } from '../redux/actions';
import { FaDeleteLeft } from "react-icons/fa6";

export const TodoItem = ({todo,index}) =>{
    console.log(index);
    const dispatch=useDispatch();
    return(
        <li className="flex flex-col sm:flex-row sm:items-center justify-center justify-between border-b-2 py-2 gap-4 ">
            <div className="flex items-center">
                <span className="mr-4 text-gray-500 ">
                    {index+1}
                </span>
                <span className={`mr-4 ${todo.completed?"line-through text-gray-500":""}`}>
                    {todo.text}
                </span>
                <div className="space-x-3 ml-3">
                    <button onClick={()=>{dispatch(toggleTodo(index))}} className={`mr-2 text-sm  text-white sm:px-2 py-1 px-1 rounded ${todo.completed?"bg-green-500":"bg-yellow-500"} `} >{todo.completed ? <FaToggleOn />:<FaToggleOff/>}</button>
                </div>
                <div className="space-x-3 ml-3">
                    <button onClick={()=>{dispatch(removeTodo(index))}} className="mr-2 text-sm  text-white sm:px-2 py-1 px-1 rounded  bg-red-500" > <FaDeleteLeft /></button>
                </div>

            </div>
        </li>
    )
}