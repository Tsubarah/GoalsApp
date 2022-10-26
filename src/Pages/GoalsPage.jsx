import { getGoals } from "../services/GoalsAPI"
import { useQuery } from "react-query"
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'
import { useEffect, useState } from 'react'

const GoalsPage = () => {
    const [goalsList, setGoalsList] = useState(undefined)

    const { data: goals, isLoading } = useQuery('goals', getGoals)

    useEffect(() => {
        setGoalsList(goals)
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