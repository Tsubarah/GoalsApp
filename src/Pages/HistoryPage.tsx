import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import GoalsAPI from "../services/GoalsAPI"
import HistoryList from "../Components/HistoryList"
import UserInfo from "../Components/UserInfo"
import { IGoal } from "../typings/Goalinterface"
import { IUser } from "../typings/Userinterface"
import useLocalStorage from "../Hooks/useLocalStorage"
import { useAuthContext } from "../Contexts/AuthContext"

const HistoryPage = () => {
  const [user, setUser] = useState<IUser | undefined>()
  const { id } = useParams()
  const { currentUser } = useAuthContext()
  const [target, setTarget] = useLocalStorage("target")
  const [inCompletedGoals, setIncompletedGoals] = useState<IGoal[]>()
  const [goals, setGoals] = useLocalStorage(
    id == target.id
      ? target.id.toString()
      : id == currentUser?.id
      ? currentUser?.id
      : "",
    []
  )

  useEffect(() => {
    if (!user) {
      setUser(target)
    }
    setIncompletedGoals(goals?.filter((goal: IGoal) => !goal.isComplete))
  }, [goals])

  useEffect(() => {
    let targets: any = window.localStorage.getItem("target")
    let target = JSON.parse(targets)
    setUser(target)
  }, [])

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
