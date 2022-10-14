import React from 'react'
import { useState } from 'react'
import GoalsForm from '../Components/GoalsForm'

const Modal = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
        <>
        <button className="addGoal-button" onClick={handleShow}>Create a Goal</button>

            <div show={show} className="addGoal-modal">

                <button onClick={handleClose}>Close</button>

                <h2>Create a Goal</h2>

                {/* There will be a form here to add goals */}

                <GoalsForm />

            </div>
    </>
  )
}

export default Modal