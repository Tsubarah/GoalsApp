import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"
import { IGoal } from '../typings/Goal'

type ModalProps = {
  goal: IGoal,
  setSlide: (slide: string) => void,
}

const EditGoalModal = ({ goal, setSlide }: ModalProps) => {
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
          
          <EditGoalsForm goal={goal} setShow={setShow} show={show} setSlide={setSlide} />
            
        </div>
        )
      }
    </>
  )
}

export default EditGoalModal