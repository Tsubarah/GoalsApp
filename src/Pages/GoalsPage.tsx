import useGoal from '../Hooks/useGoal'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'

const GoalsPage = () => {
    const { getGoals: goals, isLoading } = useGoal()

    console.log('goals', goals)

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