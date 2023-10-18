import './Layout.scss'
import NavList from './navList/NavList'

const Layout = ({children}) => {



  return (
    <div  className='containers'>
      <div className='sideBlock'>
      <NavList/>
      </div>
      <div  className='children'>
        {children}
      </div>
    </div>

  )
}

export default Layout

