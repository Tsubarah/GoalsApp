import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"
import { IGoal } from '../typings/Goalinterface'
import { useAuthContext } from '../Contexts/AuthContext'

type ModalProps = {
  goal: IGoal,
}

const EditGoalModal = ({goal}: ModalProps) => {
  const { currentUser } = useAuthContext()
  
  const [show, setShow] = useState(false)
  const [isManager, setIsManager] = useState(currentUser?.jobTitle === 'Intern')

  
  return (
    <>
      {isManager ?   
        <button 
          className="button edit-btn" 
          onClick={() => {setShow(!show)}}
        >
          {isManager ? "Edit": "View"}
        </button>
        
       : ""}   

      {show && (
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
           <EditGoalsForm setShow={setShow} show={show} goal={goal} /> 
        </div>
        )
      }
    </>
  )
}

export default EditGoalModal