import Tabs from "../Components/Tabs"
import UserInfo from "../Components/UserInfo"
import { IGoal } from "../typings/Goalinterface"
import { useEffect, useState } from "react"
import { IUser } from "../typings/Userinterface"
import { useAuthContext } from "../Contexts/AuthContext"
import useLocalStorage from "../Hooks/useLocalStorage"
import { useParams } from "react-router-dom"

const GoalsPage = () => {
  const { id } = useParams()
  const { currentUser } = useAuthContext()
  const [inCompletedGoals, setIncompletedGoals] = useState<IGoal[]>()
  const [user, setUser] = useState<IUser | undefined>()
  const [target, setTarget] = useLocalStorage("target")
  const [goals, setGoals] = useLocalStorage(id == target.id
                                              ? target.id.toString()
                                              : id == currentUser?.id
                                                ? currentUser?.id
                                                : "", [])


  useEffect(() => {
    if (!user) {
      setUser(target)
    }
    setIncompletedGoals(goals?.filter((goal: any) => !goal.isComplete))
  }, [goals])

  return (
    <div className="goals-page-wrapper">
      {currentUser && (
        <>
          {<UserInfo user={user} />}

          {inCompletedGoals && (
            <Tabs goals={goals} setGoals={setGoals} user={user} />
          )}
        </>
      )}
    </div>
  )
}

export default GoalsPage
