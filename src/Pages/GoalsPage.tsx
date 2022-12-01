import Tabs from '../Components/Tabs'
import UserInfo from "../Components/UserInfo"
import { useQuery } from 'react-query'
import GoalsAPI from '../services/GoalsAPI'
import { useParams } from 'react-router-dom'
import { IGoal } from '../typings/Goalinterface'
import { useEffect, useState } from 'react'
import { IUser } from '../typings/Userinterface'
import { useAuthContext } from '../Contexts/AuthContext'

const GoalsPage = () => {
  const { id } = useParams()
  const { currentUser } = useAuthContext()
  const { data: goals } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))
  const [inCompletedGoals, setIncompletedGoals] = useState<IGoal[]>()
  const [user, setUser] = useState<IUser | undefined>()

  useEffect(() => {
    let targets: any = window.localStorage.getItem('target')
    let target = JSON.parse(targets)
    setUser(target)
  }, [])

  useEffect(()=> {
    setIncompletedGoals(goals?.filter((goal) => !goal.isComplete));
    console.log('inCompletedGoals', inCompletedGoals)
},[goals])

  return (
    <div className="goals-page-wrapper">
      {currentUser && (
        <>
          {goals && (
            <UserInfo goals={goals} user={user} />
          )}
          
          {inCompletedGoals && (
            <Tabs goals={inCompletedGoals} user={user} />
          )}
        </>
      )}
    </div>
  )
}

export default GoalsPage