import { useSelector } from 'react-redux'
import {BsSun} from 'react-icons/bs'

const MyDayList = () => {

  const numbersMayDay = useSelector(state => state.todos.todos).filter(todo => todo.isCompleted !== true).length
  return (

    <button className='flex justify-between items-center h-12 w-[250px] '>
      <div className='flex items-center '>
      <BsSun />
      <h3 className='ml-4'>My Day</h3>
      </div>
      <div>{numbersMayDay}</div>
    </button>
  )
}

export default MyDayList