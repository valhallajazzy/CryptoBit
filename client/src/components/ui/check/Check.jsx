import cn from 'classnames'
import { AiOutlineCheck } from 'react-icons/ai'

const Check = ({isCompleted}) => {
  return (
    <div className={ cn(` border-2 rounded-xl border-pink-400  w-5 h-5  flex items-center justify-center cursor-pointer `, 
    {
      'bg-pink-400': isCompleted,
    }
    )}>
      {isCompleted && <AiOutlineCheck/>}

    </div>
  )
}

export default Check