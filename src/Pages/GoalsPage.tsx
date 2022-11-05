import useGoal from '../Hooks/useGoal'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'
import UserInfo from "../Components/UserInfo"
import LoadingSpinner from '../Components/LoadingSpinner'
import { useState } from 'react'

const GoalsPage = () => {
  const [show, setShow] = useState<boolean>(false)

  const { getGoals: goals, isLoading } = useGoal()

  // console.log('goals', goals)

  return (
    <div className="goals-page-wrapper">
        {isLoading && <LoadingSpinner />}

        {!isLoading && goals && (

          <>
            <Modal setShow={setShow} show={show} />

            <UserInfo />

            <button 
              className="button create-btn" 
              onClick={() => setShow(!show)}
            >
              Create a Goal
            </button>

            <Tabs goals={goals} />
          </>
        )}
    </div>
  )
}

export default GoalsPage