import  { useRef, useState } from 'react'
import './ContextMenuClick.scss'

const ContextMenuClick = ({ContextMenu, id, ref}) => {

  if (id !== ''){
    return (

      <div ref={ref} className='absolute' style={{top: `${ContextMenu.position.y}px`, left: `${ContextMenu.position.x}px`}} >
       test
     </div>
    )
  }


}

export default ContextMenuClick