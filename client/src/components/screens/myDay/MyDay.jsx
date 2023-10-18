import Layout from '../../layout/Layout'
import styles from './MyDay.module.scss'
import TodoItem from '../../ui/todoItem/TodoItem'
import CreateTodoItem from '../../ui/createTodoItem/CreateTodoItem'
import CompletedList from '../../ui/completedList/CompletedList'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import ContextMenuClick from '../../ui/contextMenu/ContextMenuClick'
import handleRightClick from '../../ui/todoItem/TodoItem' 
import {useOnClickOutside} from '../../../hooks/useClickOutside/useOnClickOutside'


let today = new Date();
let options = { weekday: 'long', month: 'long', day: 'numeric' };
let now = today.toLocaleString('en-US', options);


const MyDay = () => {

  const todos = useSelector(state => state.todos.todos)

  const filteredTodos = todos.filter(todo => todo.isCompleted === true)
  
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

  let ref = useOnClickOutside(() => {
    setContextMenu({isShow:false})
  })


  return (
    <Layout> 
      <div>

          <div className='mb-8 '>
            <h1 className='text-3xl font-bold mb-1 '>My day </h1>
            <h2 className='font-normal text-xl'>{now}</h2>
          </div>

          <div  className={styles.todoComponent}>
          {todos.filter(todo => todo.isCompleted === false).map(todo =>(
            <div ref={ref} onContextMenu={(e) => handleOnContextMenu(e)}>
              <TodoItem key={todo.id} todo={todo} id={todo.id} />
            </div>
          ))}
          {filteredTodos.length > 0 &&
          <CompletedList  filteredTodos={filteredTodos} />
          }
          </div>

          <div className='absolute bottom-0 mb-10 w-[560px]'>
          <CreateTodoItem important={false} planned={''}/>
          </div> 
          {ContextMenu.isShow && <ContextMenuClick ContextMenu={ContextMenu} id={handleRightClick} />}
          </div>
    </Layout>
  )
}

export default MyDay
