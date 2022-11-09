import useGoal from '../Hooks/useGoal'
// import { IGoal } from '../typings/Goal'
import HistoryList from '../Components/HistoryList'
import UserInfo from '../Components/UserInfo'

// type TabsProps = {
//     goals: IGoal[]
// }

const HistoryPage = () => {
	const { getGoals: goals , isLoading } = useGoal()

	return (
		
		<div className="history-page-wrapper">

			{isLoading && (<p>Loading... </p>)}

			{!isLoading && goals && (
				<>

				<UserInfo />

				<h2 className='history-h2'>Completed Goals</h2>

				<HistoryList goals={goals} />
				
				</>
			)}

		</div>
	)
}

export default HistoryPage