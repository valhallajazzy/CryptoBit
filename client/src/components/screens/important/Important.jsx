import Layout from '../../layout/Layout'
import styles from './Important.module.scss'
import TodoItem from '../../ui/todoItem/TodoItem'
import CreateTodoItem from '../../ui/createTodoItem/CreateTodoItem'
import { AiOutlineStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'


const Important = () => {

  const todos = useSelector(state => state.todos.todos)


  return (
    <Layout>
      <div className='text-3xl font-bold flex items-center gap-3 text-[#dea6b1] mb-9'>
        <AiOutlineStar />
        Important
      </div>

      <div className={styles.todoComponent}>
        {todos.filter(todo => todo.isCompleted === false && todo.important === true ).map(todo =>(
          <TodoItem key={todo.id} todo={todo} id={todo.id} />
        ))}

      </div>

      <div className='absolute bottom-0 mb-10 w-[560px]'>
      <CreateTodoItem important={true} planned={''}/>
      </div> 
      
    </Layout>
  )
}

export default Important