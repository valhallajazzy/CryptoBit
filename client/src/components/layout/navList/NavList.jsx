
import { useSelector } from 'react-redux'

import NavItem from '../../ui/navItem/NavItem'

import {list} from '../../../data/List.data'

const NavList = () => {

  


  return (
    <div className='bg-zinc-900 h-screen'>
      <nav className='text-left '>
      {list.map(l => (
        <NavItem key={l.path} name={l.name} numbers={useSelector(state => state.todos.todos).length} />
      ))}
      </nav>
    </div>
  )
}

export default NavList

