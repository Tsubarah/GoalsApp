import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"

const EditGoalModal = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  return (
    <>
    <div className="d-flex text-align-center justify-content-center">
    <button className="addGoal-button green-button d-flex justify-content-center" onClick={handleShow}>Edit a Goal</button>
    </div>

      {
        show && (

        <div className="addGoal-modal">

          <div className="button-container">
            <button className="green-button" onClick={handleClose}>Close</button>
            </div>


            <h2>Edit a Goal</h2>
            
            <hr />
            
            
            <EditGoalsForm />
            
            

        </div>
        )
      }
</>
  )
}

export default EditGoalModal