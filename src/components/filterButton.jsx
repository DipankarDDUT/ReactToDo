import { useDispatch, useSelector } from "react-redux";
import { filterTodos,markAllCompleted,markAllInCompleted,deleteAll } from '../redux/actions';

const FilterButton = () =>{

    const dispatch = useDispatch();
    const currentFilter=useSelector((state)=>state.filter);
    const handleFilter= (filter)=>{
        dispatch(filterTodos(filter));
    }
   

    return(
        <div>
            <select 
            value={currentFilter}
            onChange={(e)=>{handleFilter(e.target.value)}}
            name="" id="" className="text-sm px-2 py-2 rounded border border=gray-300 focus:outline-none">
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>
          <button 
          onClick={()=>{ dispatch(markAllCompleted())}}
          className=' ml-3 p-2 bg-green-500 text-white rounded hover:bg-white-600 hover:text-green focus:outline-none'>Mark All Completed</button>
         <button 
          onClick={()=>{ dispatch(markAllInCompleted())}}
          className=' ml-3 p-2 bg-yellow-500 text-white rounded hover:bg-white-600 hover:text-yellow focus:outline-none'>Mark All Incomplete</button>
         <button 
          onClick={()=>{dispatch(deleteAll())}}
          className=' ml-3 p-2 bg-red-500 text-white rounded hover:bg-white-600 hover:text-red focus:outline-none'>Delete All Todos</button>
        </div>
    )
}

export default FilterButton;