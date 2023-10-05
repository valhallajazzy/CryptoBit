import './Layout.scss'
import NavItem from '../ui/navItem/NavItem'
import NavList from './navList/NavList'

const Layout = ({children}) => {


  return (
    <div className='containers'>
      <div className='sideBlock'>
      <NavList/>
      </div>
      <div className='children'>
        {children}
      </div>
    </div>

  )
}

export default Layout

