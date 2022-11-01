import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"
import { IGoal } from '../typings/Goal'

type ModalProps = {
  goal: IGoal,
  // show: boolean,
  // setShow: (show: boolean) => void,
}

const EditGoalModal = ({ goal }: ModalProps) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="d-flex text-align-center justify-content-center">

      <button 
        className="addGoal-button green-button d-flex justify-content-center" 
        onClick={() => {setShow(!show)}}
      >
        Edit
      </button>

      </div>

      {
        show && (

        <div className="addGoal-modal">

          <div className="button-container">

            <button 
              className="green-button" 
              onClick={() => {setShow(!show)}}
            >
              Close
            </button>
            
          </div>

          <h2>Edit a Goal</h2>
          
          <hr />
          
          <EditGoalsForm goal={goal} setShow={setShow} show={show} />
            
        </div>
        )
      }
</>
  )
}

export default EditGoalModal