import useGoals from '../Hooks/useGoals'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'

// interface IGoal {
//     category: string,
//     prio: number,
//     description: string,
//     target_reached: string,
//     milestones: string, 
//     half_year_progress: string,
//     cost: number,
//     isComplete: boolean,
//     reviews: [],
// }

const GoalsPage = () => {
    const { data: goals, isLoading} = useGoals()


    return (
        
        <div className="container">

            <Modal />

            {isLoading && (<p>Loading...</p>)}

            {!isLoading && goals && (
            
                <Tabs goals={goals} />
    
            )}
            
        </div>
    )
}

export default GoalsPage