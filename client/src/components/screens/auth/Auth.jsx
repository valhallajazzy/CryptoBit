import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Loader from '../../ui/Loader'

const Auth = () => {
  
  const isLoading = false

  const navigate = useNavigate()

  const {register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  })

  const  onSubmit = async (data) => {
    try{


    }catch (err){

    }
    reset()
    
  }

  return (
    <div className='flex justify-center mt-52' >
      <div>
        <div>
          <img className='flex mx-auto mb-6 ' src='/favicon.svg'/>
          <h1 className='text-3xl font-semibold text-center mb-8'>Todo for you</h1>
        </div>
        {isLoading && <Loader/>}
        <h2 className='ml-3 text-2xl mb-3'>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className='block mx-auto px-1 mb-5 text-lg w-60 h-8 text-black outline-none'
          type='email' 
          placeholder='Enter your email'
          {...register('username', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Incorrect email format"
            }
          })}
          />
          <input className='block mx-auto px-1 mb-7 text-lg w-60 h-8 text-black outline-none'
          type='password' 
          placeholder='Enter your password'
          {...register('password', {
            required: 'Password is required', 
            minLength: {
              value: 5,
              message: "Minimum 5 characters"
            }
          })}
          />
          <div className='text-red-700 mt-[-20px] text-lg ml-3 '>
            {(errors?.username || errors?.password)  && <p>{(errors?.username?.message || errors?.password?.message) || "Error"}</p>}
          </div>

          <div className='text-base  mb-7'>
            <span>You don't have an account ?</span>
            {' '}
            <a  className='text-blue-400 hover:underline hover:text-blue-500 ' onClick={() => setType('login')} href='/signup'>Сreate it</a>
          </div>
          <div className='flex gap-2 justify-center '>
          <button onClick={() => navigate('/')} className='bg-zinc-500 px-5 py-1 hover:bg-zinc-700' type='button'>Back</button>
          <button  className='bg-sky-900 px-5 py-1 hover:bg-sky-950' type='submit' disabled={!isValid} >Log in</button>

          </div>
        </form>

      </div>
    </div>
  )
}

export default Auth