import { useState } from 'react'
import GoalsForm from './GoalsForm'



const Modal = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
      <>
        <button 
          className="button create-btn" 
          onClick={() => setShow(!show)}
        >
          Create a Goal
        </button>

        {show && (
          <div className="addGoal-modal">

            <div className="button-container">
              <button 
                className="button close-btn" 
                onClick={() => setShow(!show)}
              >
                Close
              </button>
            </div>

            <h2>Create a Goal</h2>

            <hr />

            <GoalsForm setShow={setShow} show={show} />

          </div>
          )
        }
      </>
    )
}

export default Modal