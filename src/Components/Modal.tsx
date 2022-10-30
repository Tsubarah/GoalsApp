import { useState } from 'react'
import GoalsForm from './GoalsForm'



const Modal = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
        <>
          <div className="d-flex text-align-center justify-content-center">

            <button 
              className="addGoal-button green-button d-flex justify-content-center" 
              onClick={() => setShow(!show)}
            >
              Create a Goal
            </button>
          </div>

          {
            show && (

              <div className="addGoal-modal">

                <div className="button-container">
                  <button 
                    className="green-button" 
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