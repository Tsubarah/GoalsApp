import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { IGoal } from '../typings/Goalinterface'
import GoalsAPI from '../services/GoalsAPI'
// import LoadingSpinner from '../Components/LoadingSpinner'
import HistoryList from '../Components/HistoryList'
import UserInfo from '../Components/UserInfo'
import { IUser } from '../typings/Userinterface'


const HistoryPage = () => {
		const [user, setUser] = useState<IUser | undefined>()
    const { id } = useParams()
    const { data: goals, isLoading } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))

		useEffect(() => {
			let targets: any = window.localStorage.getItem('target')
			let target = JSON.parse(targets)
			setUser(target)
		}, [])
	

    useEffect(() => {
        if (!goals)
        return
        console.log(goals)
      },[])
      console.log('goals', goals)

	return (
		
		<div className="history-page-wrapper">


			{/* {isLoading && <div className='loading-spinner'><LoadingSpinner /></div>} */}

			{goals && (
				<>

				<UserInfo goals={goals} user={user} />

				<h2 className='history-h2'>History</h2>

				<HistoryList  goals={goals} />
				
				</>
			)}

		</div>
	)
}

export default HistoryPage