
import { useSelector } from 'react-redux'

import NavItem from '../../ui/navItem/NavItem'

import {list} from '../../../data/List.data'

const NavList = () => {

  


  return (
    <div className='bg-zinc-900 h-screen'>
      <nav className='text-left '>
      {list.map(l => (
        reduxName = l.reduxName,
        <NavItem key={l.path} name={l.name} numbers={useSelector(state => state.[reduxName].[reduxName]).length} />
      ))}
      </nav>
    </div>
  )
}

export default NavList

