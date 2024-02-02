import React from 'react'
import bbcLogo from '../src/images/bbcLogo2.png'
import user from '../src/images/user.png'

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 bg-black p-2'>
        <div className='flex align-middle'>
            <img src={bbcLogo} className='h-14'/>
            <button className='text-white flex pt-3 px-3 w-48 hover:border'>
                <img src={user} className='h-7'/> Sign In
            </button>
        </div>
        <div className='text-white'>
            <button>Home</button>
            <button>News</button>
            <button>Sport</button>
            <button>Earth</button>
            <button>Reel</button>
            <button>Worklife</button>
            <button>Travel</button>
            <button>Culture</button>
        </div>
    </div>
  )
}

export default Navbar