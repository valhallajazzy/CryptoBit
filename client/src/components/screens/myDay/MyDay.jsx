import Layout from '../../layout/Layout'
import styles from './MyDay.module.scss'
import TodoItem from '../../ui/todoItem/TodoItem'
import CreateTodoItem from '../../ui/createTodoItem/CreateTodoItem'
import CompletedList from '../../ui/completedList/CompletedList'
import { useSelector } from 'react-redux'

let today = new Date();
let options = { weekday: 'long', month: 'long', day: 'numeric' };
let now = today.toLocaleString('en-US', options);

const MyDay = () => {

  const todos = useSelector(state => state.todos.todos)

  const filteredTodos = todos.filter(todo => todo.isCompleted === true)

  return (
    <Layout>
        <div className='mb-8 '>
          <h1 className='text-3xl font-bold mb-1 '>My day </h1>
          <h2 className='font-normal text-xl'>{now}</h2>
        </div>


        <div className={styles.todoComponent}>
        {todos.filter(todo => todo.isCompleted === false).map(todo =>(
          <TodoItem key={todo.id} todo={todo} id={todo.id} />
        ))}
        {filteredTodos.length > 0 &&
        <CompletedList  filteredTodos={filteredTodos} />
        }
        </div>

        <div className='absolute bottom-0 mb-10 w-[560px]'>
        <CreateTodoItem/>
        </div> 
    </Layout>
  )
}

export default MyDay
