
import MyDayList from '../../ui/myDayList/MyDayList'
import ImportantList from '../../ui/importantList/ImportantList'
import PlannedList from '../../ui/plannedList/PlannedList'
import { useNavigate } from 'react-router-dom'


const NavList = () => {

  const navigate = useNavigate()


  return (
    <div className='bg-[#10151d] h-screen rounded-xl '>
      <nav className='text-left px-3  '>
        <ul>
          <li onClick={() => navigate('/myday')}>
            <MyDayList />
          </li>
          <li onClick={() => navigate('/important')}>
            <ImportantList />
          </li>
          <li onClick={() => navigate('/planned')}>
            <PlannedList />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavList

