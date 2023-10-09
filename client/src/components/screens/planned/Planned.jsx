import React from 'react'
import Layout from '../../layout/Layout'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import styles from './Planned.module.scss'
import CreateTodoItem from '../../ui/createTodoItem/CreateTodoItem'
import TodoItem from '../../ui/todoItem/TodoItem'

const Planned = () => {

  const todos = useSelector(state => state.todos.todos)

  return (
    <Layout>
      <div className='text-3xl font-bold flex items-center gap-3 text-[#5be0da] mb-9'>
      <AiOutlineUnorderedList  />
        Planned
      </div>

      <div className={styles.todoComponent}>
        {todos.filter(todo => todo.isCompleted === false && todo.planned !== '').map(todo =>(
          <TodoItem key={todo.id} todo={todo} id={todo.id} />
        ))}

      </div>

      <div className='absolute bottom-0 mb-10 w-[560px]'>
      <CreateTodoItem />
      </div> 
      
    </Layout>
  )
}

export default Planned