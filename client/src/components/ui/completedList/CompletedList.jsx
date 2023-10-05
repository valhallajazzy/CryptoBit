import { useState } from "react"
import './CompletedList.scss'
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import TodoItem from "../todoItem/TodoItem";
import { useSelector } from "react-redux";


const CompletedList = ({filteredTodos}) => {

  const todos = useSelector(state => state.todos.todos)
  const [open, setOpen] = useState(true);

  return (

    <div>
      <button className="flex items-center mb-5 gap-1" onClick={() => setOpen(!open)}>
        {open ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}

        <h3 className='text-2xl font-medium '>Completed - {filteredTodos.length}</h3>
      </button>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        {todos.filter(todo => todo.isCompleted === true).map(todo =>(
          <TodoItem key={todo.id} todo={todo} id={todo.id} />
        ))}
      </div>

    </div>
  )
}

export default CompletedList