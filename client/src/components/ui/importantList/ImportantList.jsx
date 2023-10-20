import { useSelector } from 'react-redux'
import {AiOutlineStar} from 'react-icons/ai'

const ImportantList = () => {
  const numbersMayDay = useSelector(state => state.todos.todos).filter(todo => todo.isImportant === true && todo.isCompleted !== true).length
  return (
    <button className='flex justify-between items-center h-12 w-[250px]'>
      <div className='flex items-center '>
      <AiOutlineStar color='#dea6b1' />
      <h3 className='ml-4'>Important</h3>
      </div>
      <div>{numbersMayDay}</div>
    </button>
    
  )
}

export default ImportantList