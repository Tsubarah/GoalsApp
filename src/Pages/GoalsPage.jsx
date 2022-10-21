import useGoals from '../Hooks/useGoals'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'

const GoalsPage = () => {
    const { data: goals, isLoading} = useGoals()

    console.log(data)

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