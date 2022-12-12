import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import GoalsAPI from '../services/GoalsAPI'
import HistoryList from '../Components/HistoryList'
import UserInfo from '../Components/UserInfo'
import { IGoal } from '../typings/Goalinterface'
import { IUser } from '../typings/Userinterface'
import useLocalStorage from "../Hooks/useLocalStorage"
import { useAuthContext } from "../Contexts/AuthContext"

const HistoryPage = () => {
  const [user, setUser] = useState<IUser | undefined>()
  const { currentUser } = useAuthContext()
  const [inCompletedGoals, setIncompletedGoals] = useState<IGoal[]>()
  const { id } = useParams()
  const [target, setTarget] = useLocalStorage("target")
  const [goals, setGoals] = useLocalStorage(
    id === currentUser?.id.toString()
      ? currentUser?.id
      : id === target?.id.toString()
      ? target?.id
      : "",
    []
  )
                                                
  console.log('currentUser', currentUser)

  useEffect(() => {
    if (!user) {
      setUser(target)
    }
    setIncompletedGoals(goals?.filter((goal: IGoal) => goal.isComplete))
  }, [goals])

  useEffect(() => {
    if (!goals) return
    console.log(goals)
  }, [goals])

  return (
    <div className="history-page-wrapper">
      {goals && (
        <>
          <UserInfo goals={goals} user={user} />

          <HistoryList goals={goals} setGoals={setGoals}/>
        </>
      )}
    </div>
  )
}

export default HistoryPage
