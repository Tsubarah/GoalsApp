import { useState } from 'react'
import GoalsForm from './GoalsForm'

const Modal = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
        <>
        <div className="d-flex button-holder">
        <button className="addGoal-button green-button d-flex" onClick={handleShow}>Create a Goal</button>
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