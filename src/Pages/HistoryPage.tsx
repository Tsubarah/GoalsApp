import { useEffect } from 'react'
import { useQuery} from 'react-query'
import { useParams} from 'react-router-dom'
import { IGoal } from '../typings/Goal'
import GoalsAPI from '../services/GoalsAPI'
import LoadingSpinner from '../Components/LoadingSpinner'
import HistoryList from '../Components/HistoryList'
import UserInfo from '../Components/UserInfo'

const HistoryPage = () => {
    const { id } = useParams()
    const { data: goals, isLoading } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))

    useEffect(() => {
        if (!goals)
        return
        console.log(goals)
      },[])
      console.log('goals', goals)

	return (
		
		<div className="history-page-wrapper">


			{isLoading && <LoadingSpinner />}

			{!isLoading && goals && (
				<>

				<UserInfo goals={goals} />

				<h2 className='history-h2'>Completed Goals</h2>

				<HistoryList goals={goals} />
				
				</>
			)}

		</div>
	)
}

export default HistoryPage