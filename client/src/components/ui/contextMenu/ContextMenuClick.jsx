import { useOnClickOutside } from '../../../hooks/useClickOutside/useOnClickOutside'
import './ContextMenuClick.scss'
import {LuStarOff} from 'react-icons/lu'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineCheck} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from "../../../store/todoSlice"
import { importantTodo } from "../../../store/todoSlice"
import { changeTodo } from "../../../store/todoSlice"

const ContextMenuClick = ({ContextMenu, id, setContextMenu}) => {

  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos.todos)
  const currentTodo = todos.find(todo => todo.id === id)

  let ref = useOnClickOutside(() => {
    setContextMenu({isShow:false})
  })
    return (
      <menu ref={ref} className='absolute bg-[#10151d] text-white text-black rounded-sm w-max text-[16px] backdrop-blur bg-opacity-50' style={{top: `${ContextMenu.position.y}px`, left: `${ContextMenu.position.x}px`}} >
       
       {currentTodo.isImportant ? 
        <button onClick={() => dispatch(importantTodo({id}))} >
          <LuStarOff  style={{fontSize: '18px', marginRight: '10px'}}/>
          Remove importance
        </button>
       :
        <button onClick={() => dispatch(importantTodo({id}))} >
          <AiOutlineStar style={{fontSize: '20px', marginRight: '10px'}}/>
          Mark as important
        </button>
       }
       {currentTodo.isCompleted ? 
        <button onClick={() => dispatch(changeTodo({id}))} >
          <div style={{fontSize: '18px', marginRight: '10px', border: 'solid 1.5px white', borderRadius: '15px', width: '18px', height:'18px'}} />
          Mark as not completed
        </button>
       :
        <button onClick={() => dispatch(changeTodo({id}))} >
          <AiOutlineCheck style={{fontSize: '18px', marginRight: '10px', border: 'solid 1.5px white', borderRadius: '15px',}} />
          Mark as completed
        </button>
        }

       <hr></hr>
       <button onClick={() => dispatch(removeTodo({id}))}>
        <BsTrash style={{fontSize: '20px', marginRight: '10px', color: '#e44c4c'}}  />
        Delete task
       </button>
     </menu>
    )
  

}

export default ContextMenuClick