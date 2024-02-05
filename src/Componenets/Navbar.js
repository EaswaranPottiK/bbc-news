import React from 'react'
import bbcLogo from '../images/bbcLogo2.png'
import user from '../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../firebase/setup'
import {signOut } from "firebase/auth";

const Navbar = (props) => {
    console.log(auth.currentUser)
    const navigate = useNavigate();
    const logOut = () => {
        signOut(auth).then(() => {
            navigate('/') 
            // even if we sign out the Log out button will still be there to avoid this we refresh the page
        }).catch((error) => {
            console.error(error)
        });
    }
  return (
    <div className='grid grid-cols-3 bg-black p-2 text-white fixed'>
        {auth.currentUser ?
            <div className='flex align-middle'>
            <img src={bbcLogo} className='h-14'/>
            <button className='text-white flex pt-3 px-3 w-48 hover:border' onClick={logOut} >
                <img src={user} className='h-7 ml-5 mr-2'/> Log Out
            </button>
        </div>
        :
        <Link to={'/singin'}>
        <div className='flex align-middle'>
            <img src={bbcLogo} className='h-14'/>
            <button className='text-white flex pt-3 px-3 w-48 hover:border'>
                <img src={user} className='h-7 ml-5 mr-2'/> Sign In
            </button>
        </div>
        </Link>   
    }
        <div className='flex'>
            <button onClick={()=> props.setMenu('All')} className='font-semibold text-sm'>Home</button>
            <button onClick={()=> props.setMenu('Technology')} className='ml-7 font-semibold text-sm'>Tech</button>
            <button onClick={()=> props.setMenu('Sports')} className='ml-7 font-semibold text-sm'>Sport</button>
            <button onClick={()=> props.setMenu('Earth')} className='ml-7 font-semibold text-sm'>Earth</button>
            <button onClick={()=> props.setMenu('Reel')} className='ml-7 font-semibold text-sm'>Reel</button>
            <button onClick={()=> props.setMenu('Worklife')} className='ml-7 font-semibold text-sm'>Worklife</button>
            <button onClick={()=> props.setMenu('Travel')} className='ml-7 font-semibold text-sm'>Travel</button>
            <button onClick={()=> props.setMenu('Culture')} className='ml-7 font-semibold text-sm'>Culture</button>
        </div>
        <div className='flex mt-4 ml-40'>
            <button className='flex'>
            <span class="material-symbols-outlined">search</span>&nbsp;&nbsp;Search BBC
            </button>
        </div>
    </div>
  )
}

export default Navbar