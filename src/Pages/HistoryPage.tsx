import useGoal from '../Hooks/useGoal'
// import { IGoal } from '../typings/Goal'
import HistoryList from '../Components/HistoryList'

// type TabsProps = {
//     goals: IGoal[]
// }

const HistoryPage = () => {
	const { getGoals: goals , isLoading } = useGoal()

	return (
		
		<div className="history-page-wrapper">

			<h2>History</h2>

			{isLoading && (<p>Loading... </p>)}

			{!isLoading && goals && (

				<HistoryList goals={goals} />

			)}

		</div>
	)
}

export default HistoryPage