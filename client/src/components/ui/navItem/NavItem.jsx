import { useNavigate } from "react-router-dom"




const NavItem = ({name, path, numbers }) => {

  const navigate = useNavigate()



  return (
    <button className='block'>{name} {numbers} </button>
  )
}

export default NavItem