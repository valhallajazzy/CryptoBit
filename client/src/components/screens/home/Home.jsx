import { useNavigate } from "react-router-dom"


const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='flex justify-center mt-52 '>
      <div className=''>
        <img className='flex mx-auto mb-6 ' src="/favicon.svg"  />
        <h1 className='text-3xl font-semibold text-center mb-10'>Todo for you</h1>
        <h2 className=' w-[350px] text-center'>To Do поможет вам сосредоточиться на любом занятии — от работы до игры.</h2>
        <button className='flex items-center mx-auto mt-10  text-center p-2  bg-sky-900 hover:bg-sky-950' 
        type="button" onClick={() => navigate('/auth')}><span className='pb-1'>Начало работы</span></button>
      </div>
    </div>
  )
}

export default Home