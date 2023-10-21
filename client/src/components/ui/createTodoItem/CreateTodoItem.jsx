import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../store/todoSlice'

const CreateTodoItem = ({isImportant, planned}) => {

  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({title, isImportant, planned}))
    setTitle('')
  }

  return (
    <div className=' flex border-2 rounded-xl ' >
      <input className=' mx-3 py-1 bg-transparent w-11/12 outline-none'
      type='text'
      placeholder='Add a task'
      onChange={e => setTitle(e.target.value)}
      value={title}
      
      onKeyPress={e => e.key === 'Enter' && addTask()}
      ></input>
      {title &&
        <button className='bg-pink-600 w-1/12 flex justify-center items-center rounded-r-xl' type='button' onClick={addTask} > <AiOutlinePlus/> </button>
      }
    </div>
  )
}

export default CreateTodoItem