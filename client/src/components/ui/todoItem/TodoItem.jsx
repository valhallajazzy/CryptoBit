import { AiOutlineClose } from "react-icons/ai"
import Check from "../check/Check"
import cn from 'classnames'
import { changeTodo } from "../../../store/todoSlice"
import { removeTodo } from "../../../store/todoSlice"
import { useDispatch } from "react-redux"

const TodoItem = ({todo, id}) => {

  const dispatch = useDispatch()

  return (
    <div className="bg-gray-800 rounded-xl p-1.5 items-center mb-3 flex justify-between  ">
      <div className="flex">
        <button className="w-6 mr-2 " onClick={() => dispatch(changeTodo({id}))}>

        <Check isCompleted={todo.isCompleted}/>

        </button>
        <span className={cn({
          'line-through ' : todo.isCompleted,
        })}>{todo.title}</span>
      </div>
      
      <button onClick={() => dispatch(removeTodo({id}))}>
        <AiOutlineClose/>
      </button>
      
    </div>
  )
}

export default TodoItem

