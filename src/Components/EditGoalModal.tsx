import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"
import { IGoal } from '../typings/Goal'

type ModalProps = {
  goal: IGoal,
  // show: boolean,
  // setShow: (show: boolean) => void,
  // completedSwipe: boolean | string,
  // setCompletedSwipe: (completedSwipe: boolean |string) => void,
}

const EditGoalModal = ({ goal }: ModalProps) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button 
        className="button edit-btn" 
        onClick={() => {setShow(!show)}}
      >
        Edit
      </button>

      {
        show && (

        <div className="addGoal-modal">

          <div className="button-container">

            <button 
              className="button close-btn" 
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