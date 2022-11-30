import GoalsForm from './GoalsForm'

type ModalProps = {
  show: boolean,
  setShow: (show: boolean) => void;
}

const Modal = ({ show, setShow}: ModalProps) => {
  return (
      <>
        {show && (
          <div className="addGoal-modal">

            <div className="button-container">
              <button 
                className="button close-btn" 
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