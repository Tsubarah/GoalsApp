import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"
import { IGoal } from '../typings/Goal'
// import { IUser } from '../typings/User'
type ModalProps = {
  goal: IGoal,
  // user: IUser,
  setSlide: (slide: string) => void,
}

const EditGoalModal = ({ goal, setSlide }: ModalProps) => {
  const [show, setShow] = useState(false)
  const [isComplete, setIsComplete] = useState(goal.isComplete)
  // const [isManager, setIsManager] = useState(user.jobTitle.includes('Team Manager'))

  return (
    <>
    {/* { isManager ? */}
      <button 
        className="button edit-btn" 
        onClick={() => {setShow(!show)}}
      >
        {isComplete ? "View": "Edit"}
      </button>
    {/* : ""} */}
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
          
           <EditGoalsForm setShow={setShow} show={show} setSlide={setSlide} goal={goal} /> 
            
        </div>
        )
      }
    </>
  )
}

export default EditGoalModal