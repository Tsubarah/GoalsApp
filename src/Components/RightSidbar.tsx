
import Profile from './Profile'
import { useState } from 'react'

const RightSidbar = () => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className='rightSidbar'>
        
        <Profile />
  
    </div>
  )
}

export default RightSidbar