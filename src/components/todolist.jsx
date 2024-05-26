import { useSelector } from "react-redux";
import { TodoItem } from "./todoItem";

//state is coming like this but it should not be 
  // {
        //     "state": {
        //         "todos": [],
        //         "filter": "ALL",
        //         "searchTerm": ""
        //     },
        //     "todos": [
        //         {
        //             "text": "xzxczc",
        //             "completed": false
        //         },
        //         {
        //             "text": "asdasdasd",
        //             "completed": false
        //         }
        //     ]
        // }

const TodoList = ()=>{



    const filteredTodos=useSelector((state)=>{
      
        const todos =state.todos;
        const filter=state.state.filter ? state.state.filter:"";
        const searchTerm=state.state.searchTerm ?state.state.searchTerm.toLowerCase():"";

        if(Array.isArray(todos) ){
            return todos.length>0 &&  todos.filter((todo)=>{
            
                const matchFilter = (filter === "COMPLETED" && todo.completed) || 
                (filter ==="INCOMPLETE" && !todo.completed) || (filter==="ALL");
                const matchSearch = todo?.text?.toLowerCase().includes(searchTerm);
                
                return matchFilter && matchSearch;
            })
        }
     
    })
    return(
   <ul>
    <li className="my-2 text-sm italic">All todo list ....</li>
    {
      Array.isArray(filteredTodos) &&  filteredTodos.map((todo,index)=>(    
            <TodoItem key={index} todo={todo} index={index}/>
        ))
    }
   </ul>
    )
}


export default TodoList;