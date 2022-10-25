import useGoals from '../Hooks/useGoals'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'
import { useEffect } from 'react'

const GoalsPage = () => {
    const { data: goals, isLoading} = useGoals()

    useEffect(() => {
        console.log('goals', goals)
    }, [goals])

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