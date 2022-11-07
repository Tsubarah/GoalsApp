import useGoal from '../Hooks/useGoal'
import Tabs from '../Components/Tabs'
import UserInfo from "../Components/UserInfo"
import LoadingSpinner from '../Components/LoadingSpinner'

const GoalsPage = () => {

  const { getGoals: goals, isLoading } = useGoal()

  // console.log('goals', goals)

  return (

    <div className="goals-page-wrapper">
        {isLoading && <LoadingSpinner />}

        {!isLoading && goals && (

        <>
            <UserInfo />

            <Tabs goals={goals} />
        </>
        )}
    </div>
  )
}

export default GoalsPage