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
  const [target, setTarget] = useLocalStorage("target", {
    first_name: "string",
    last_name: "string",
    displayName: "string",
    id: "string",
    jobTitle: "Intern",
    email: "string",
    mobilePhone: 0,
    avatar: "string",
  })
  const [goals, setGoals] = useLocalStorage(
    id === currentUser?.id.toString()
      ? currentUser?.id
      : id === target?.id.toString()
      ? target?.id
      : "",
    []
  )

  useEffect(() => {
    if (!user) {
      setUser(target)
    }
    setIncompletedGoals(goals?.filter((goal: IGoal) => !goal.isComplete))
  }, [goals])

  return (
    <div className="goals-page-wrapper">
      {currentUser && (
        <>
          {<UserInfo user={user} goals={goals} />}

          {inCompletedGoals && (
            <Tabs goals={inCompletedGoals} setGoals={setGoals} user={user} />
          )}
        </>
      )}
    </div>
  )
}

export default GoalsPage
