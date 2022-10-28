import { getGoals } from "../services/GoalsAPI"
import { useQuery } from "react-query"
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'
import { useEffect, useState } from 'react'
import UserInfo from "../Components/UserInfo"

const GoalsPage = () => {
    const [goalsList, setGoalsList] = useState(undefined)

    const { data: goals, isLoading } = useQuery('goals', getGoals)

    useEffect(() => {
        setGoalsList(goals)
    }, [goals])

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