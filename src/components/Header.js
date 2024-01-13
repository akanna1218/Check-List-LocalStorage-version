import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Header = () => {
  const {headerInfo}=useContext(DataContext)
  return (
  <header className='header'> 

    <h1>
{headerInfo}    </h1>

  </header>
  
    )                                                    // for every component we should have separate Js, css file for better organization. 
}



export default Header


