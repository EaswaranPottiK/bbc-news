import React, { useState } from 'react'
import Navbar from './Navbar'
import Body from './Body'

const Main = () => {
  const [menu, setMenu] = useState('')
  // console.log(menu)
  return (
    <div className='grid grid-rows-2'>
        <Navbar setMenu={setMenu}/>
        <Body menu={menu}/>
    </div>
  )
}

export default Main