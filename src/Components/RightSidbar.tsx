
import ConsultantProfile from './ConsultantProfile'
import { useState } from 'react'

type sidebarProps ={
  show: boolean,
  setShow: (show: boolean) => void,
}

const RightSidbar = ({show, setShow}: sidebarProps) => {
  
  return (
    <div className='profileWrapper'>
      {show && (  
    
        <ConsultantProfile />

    )}
    </div>
  )
}

export default RightSidbar