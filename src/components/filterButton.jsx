import { useDispatch, useSelector } from "react-redux";
import { filterTodos,markAllCompleted } from '../redux/actions';

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
        </div>
    )
}

export default FilterButton;