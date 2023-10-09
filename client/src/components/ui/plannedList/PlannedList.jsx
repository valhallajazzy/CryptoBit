import { useSelector } from "react-redux"
import {AiOutlineUnorderedList} from 'react-icons/ai'

const PlannedList = () => {
  const numbersMayDay = useSelector(state => state.todos.todos).filter(todo => todo.planned !== '').length
  return (
    <button className='flex justify-between items-center h-12 w-[250px]'>
      <div className='flex items-center '>
      <AiOutlineUnorderedList  />
      <h3 className='ml-4'>Planned</h3>
      </div>
      <div>{numbersMayDay}</div>
    </button>
    
  )
}

export default PlannedList