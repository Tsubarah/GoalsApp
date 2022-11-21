import Tabs from '../Components/Tabs'
import UserInfo from "../Components/UserInfo"
// import LoadingSpinner from '../Components/LoadingSpinner'
import { useQuery } from 'react-query'
import GoalsAPI from '../services/GoalsAPI'
import { useParams } from 'react-router-dom'
import { IGoal } from '../typings/Goal'
import { useAuthContext } from '../Contexts/AuthContext'

const GoalsPage = () => {
  const { id } = useParams()
  const { setIsLoading } = useAuthContext()
  const { data: goals, isLoading } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))

  return (
    <div className="goals-page-wrapper">

      {goals && (
        <>
          <UserInfo goals={goals} />

          <Tabs goals={goals} />
        </>
      )}
    </div>
  )
}

export default GoalsPage