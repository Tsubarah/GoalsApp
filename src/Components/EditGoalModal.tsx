import { useState } from "react"
import EditGoalsForm from "./EditGoalsForm"
import { IGoal } from "../typings/Goalinterface"
import { useAuthContext } from "../Contexts/AuthContext"

type ModalProps = {
  goal: IGoal
  goals: IGoal[]
  handleSwipe: (id: string) => void
}

const EditGoalModal = ({ goal, goals, handleSwipe }: ModalProps) => {
  const { isManager } = useAuthContext()
  const [show, setShow] = useState(false)

  return (
    <>
      {isManager ? (
        <button
          className="button edit-btn"
          onClick={() => {
            setShow(!show)
          }}
        >
          {isManager ? "Edit" : "View"}
        </button>
      ) : (
        ""
      )}

      {show && (
        <div className="addGoal-modal">
          <div className="button-container">
            <button
              className="button close-btn"
              onClick={() => {
                setShow(!show)
              }}
            >
              Close
            </button>
          </div>

          <h2>Edit a Goal</h2>

          <hr />
          <EditGoalsForm
            setShow={setShow}
            show={show}
            goal={goal}
            goals={goals}
            handleSwipe={handleSwipe}
          />
        </div>
      )}
    </>
  )
}

export default EditGoalModal
