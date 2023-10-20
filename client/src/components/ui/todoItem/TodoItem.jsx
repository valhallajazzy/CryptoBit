import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import Check from "../check/Check"
import cn from 'classnames'
import { changeTodo } from "../../../store/todoSlice"
import { importantTodo } from "../../../store/todoSlice"
import { useDispatch } from "react-redux"
import ContextMenuClick from "../contextMenu/ContextMenuClick"
import { useState } from "react"

const TodoItem = ({todo, id}) => {

const dispatch = useDispatch()
  
const [ContextMenu, setContextMenu] = useState({
  isShow: false,
  position: {
    x:0,
    y:0
  }
})

const handleOnContextMenu = (e) => {
  e.preventDefault()
  const {pageX, pageY} = e
  setContextMenu({
    isShow: true,
    position: {
      x:pageX,
      y:pageY
    }
  })
}

  return (
    <div  onContextMenu={(e) => handleOnContextMenu(e)}  className="bg-gray-800 rounded-xl p-1.5 items-center mb-3 flex justify-between  ">
      <div className="flex">
        <button className="w-6 mr-2 " onClick={() => dispatch(changeTodo({id}))}>

        <Check isCompleted={todo.isCompleted}/>

        </button>
        <span className={cn({
          'line-through ' : todo.isCompleted,
        })}>{todo.title}</span>
      </div>
      
      {todo.isImportant ?
        <button onClick={() => dispatch(importantTodo({id}))}>
          <AiFillStar fill="white"/>
        </button>
        :
        <button onClick={() => dispatch(importantTodo({id}))}>
          <AiOutlineStar/>
        </button>
      }
      
      {ContextMenu.isShow && <ContextMenuClick ContextMenu={ContextMenu} setContextMenu= {setContextMenu} id={id} />}

    </div>
  )
}

export default TodoItem

