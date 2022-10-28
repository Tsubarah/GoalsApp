
import useGoals from '../Hooks/useGoals'
import Tabs from '../Components/Tabs'
// import { IGoal } from '../typings/Goal'
import HistoryList from '../Components/HistoryList'

// type TabsProps = {
//     goals: IGoal[]
// }

const HistoryPage = () => {
	const { data:goals , isLoading } = useGoals()

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