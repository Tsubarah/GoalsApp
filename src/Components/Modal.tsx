import GoalsForm from "./GoalsForm"
import { IGoal } from "../typings/Goalinterface"

type ModalProps = {
  show: boolean
  setShow: (show: boolean) => void
  goals: IGoal[]
  setGoals: any
}

const Modal = ({ show, setShow, goals, setGoals }: ModalProps) => {
  return (
    <>
      {show && (
        <div className="addGoal-modal">
          <div className="button-container">
            <button className="button close-btn" onClick={() => setShow(!show)}>
              Close
            </button>
          </div>

          <h2>Create a Goal</h2>

          <hr />

          <GoalsForm
            goals={goals}
            setGoals={setGoals}
            setShow={setShow}
            show={show}
          />
        </div>
      )}
    </>
  )
}

export default Modal
