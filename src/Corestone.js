import React from 'react'
import Header from './navbar/Header'

const Corestone = ({children}) => {
  return (
    <div className='corestone'>
      <div className=' container mx-auto'>
          <Header/>
      </div>
      <div className='container mx-auto border-1 w-full h-full bg-slate-100' >
        {children}
      </div>
    </div>
  )
}
export default Corestone