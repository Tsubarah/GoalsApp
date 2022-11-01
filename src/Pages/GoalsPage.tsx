import useGoal from '../Hooks/useGoal'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'
import UserInfo from "../Components/UserInfo"

const GoalsPage = () => {
    const { getGoals: goals, isLoading } = useGoal()

    // console.log('goals', goals)

    return (
        
        <div className="container">

            {isLoading && (<p>Loading...</p>)}

            {!isLoading && goals && (
                
                <>
                    <Modal />
                    
                    <UserInfo />
                    
                    <Tabs goals={goals} />
                </>
            )}
            
        </div>
    )
}

export default GoalsPage