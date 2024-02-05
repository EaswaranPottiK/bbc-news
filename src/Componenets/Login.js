import React from 'react'
import lb from '../images/loginBackground.png'
import bbcLogo from '../images/bbcLogo.jpg'
import {signInWithPopup} from 'firebase/auth'
import {auth,googleProvider} from '../firebase/setup'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const googleSignIn = async()=>{
    try{
      await signInWithPopup(auth,googleProvider)
      auth.currentUser && navigate("/")
    }
    catch(error){
      console.error(error)
    }
  }
  return (
    <div className='flex justify-between bg-black h-screen'>
        <div className='text-center ml-40 mt-20'>
           <img src={bbcLogo} className='h-14 ml-20'/>
           <p className='text-white text-3xl font-semibold py-5'>Sign In with your email id & <br></br>password</p>
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-14 w-full rounded">Next</button>
           <br></br>
           <h1 className='text-blue-500 underline text-2xl cursor-pointer' onClick={googleSignIn}>Sign In Now</h1>
        </div>
       
        <div >
            <img src={lb} className='h-screen'/>
        </div>
    </div>
  )
}

export default Login