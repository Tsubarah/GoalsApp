import image from "../Assets/Images/placeholder-image.jpeg"
import { useState } from "react"
import { Link } from 'react-router-dom'

type itemProps = {
  show: boolean,
  setShow: (show: boolean) => void,
  
}

const ListItem = ({show, setShow}: itemProps) => {

  return (
    <a onClick={()=> {
      console.log('clicked',show)
      setShow(!show)}}>
      <div className="user-list-item">
        <img src={image} alt="" />
        <h3>John Doe</h3>
      </div>
    </a>
  )
}

export default ListItem