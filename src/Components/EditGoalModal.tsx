import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"
import { IGoal } from '../typings/Goal'
import { useAuthContext } from '../Contexts/AuthContext'

type ModalProps = {
  goal: IGoal,
  
  setSlide: (slide: string) => void,
}

const EditGoalModal = ({ goal, setSlide }: ModalProps) => {
  const [show, setShow] = useState(false)
  const [isComplete, setIsComplete] = useState(goal.isComplete)
  const { currentUser } = useAuthContext()
  const [isManager, setIsManager] = useState(currentUser?.jobTitle === 'Team Manager')

  return (
    <>
      {/* { isManager ?   */}
      <button 
        className="button edit-btn" 
        onClick={() => {setShow(!show)}}
      >
        {isComplete ? "View": "Edit"}
      </button>
      {/* : ""}   */}
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