import { useOnClickOutside } from '../../../hooks/useClickOutside/useOnClickOutside'
import './ContextMenuClick.scss'
import {TbSunOff} from 'react-icons/tb'

const ContextMenuClick = ({ContextMenu, id, setContextMenu}) => {

  let ref = useOnClickOutside(() => {
    setContextMenu({isShow:false})
  })

  if (id !== ''){
    return (
      <menu ref={ref} className='absolute bg-[#10151d] text-white text-black rounded-sm py-4 w-max px-5' style={{top: `${ContextMenu.position.y}px`, left: `${ContextMenu.position.x}px`}} >
       <button className='flex items-center py-2'>
        <TbSunOff style={{fontSize: '24px', marginRight: '10px'}}/>
        Remove from My Day
       </button>
       <button className=''>
        Mark as important
       </button>
       <button className='block mb-1'>
       <AiOutlineStar style={{fontSize: '24px', marginRight: '10px'}}/>
        Mark as completed
       </button>
       <hr></hr>
       <button className='block text-[#e44c4c] mt-1'>
        Mark as completed
       </button>
     </menu>
    )
  }


}

export default ContextMenuClick