import React from 'react'
import { useState } from 'react'
import GoalsForm from './GoalsForm'
import "./Modal.css"

const Modal = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
        <>
        <div className="d-flex text-align-center justify-content-center">
        <button className="addGoal-button green-button d-flex justify-content-center" onClick={handleShow}>Create a Goal</button>
        </div>

          {
            show && (

            <div className="addGoal-modal">

              <div className="button-container">
                <button className="green-button" onClick={handleClose}>Close</button>
                </div>


                <h2>Create a Goal</h2>

                <hr />


                <GoalsForm />

                

            </div>
            )
          }
    </>
  )
}

export default Modal