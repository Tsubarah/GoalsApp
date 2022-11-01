import useGoal from '../Hooks/useGoal'
import Tabs from '../Components/Tabs'
// import { IGoal } from '../typings/Goal'
import HistoryList from '../Components/HistoryList'

// type TabsProps = {
//     goals: IGoal[]
// }

const HistoryPage = () => {
	const { getGoals: goals , isLoading } = useGoal()

	return (
		
		<div className="container">

			<h2>History</h2>

			{isLoading && (<p>Loading... </p>)}

			{!isLoading && goals && (

				<HistoryList goals={goals} />

			)}

		</div>
	)
}

export default HistoryPage