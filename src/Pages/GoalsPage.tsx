import Tabs from '../Components/Tabs'
import UserInfo from "../Components/UserInfo"
import { useQuery } from 'react-query'
import GoalsAPI from '../services/GoalsAPI'
import { useParams } from 'react-router-dom'
import { IGoal } from '../typings/Goalinterface'
import { useEffect, useState } from 'react'
import { IUser } from '../typings/Userinterface'

const GoalsPage = () => {
  const { id } = useParams()
  const { data: goals } = useQuery<IGoal[]>(['goals', id], () => GoalsAPI.getGoals(id))
  
  const [user, setUser] = useState<IUser | undefined>()

  useEffect(() => {
    let targets: any = window.localStorage.getItem('target')
    let target = JSON.parse(targets)
    setUser(target)
  }, [])

  return (
    <div className="goals-page-wrapper">

      {goals && (
        <>
          <UserInfo goals={goals} user={user} />

          <Tabs goals={goals} user={user} />
        </>
      )}
    </div>
  )
}

export default GoalsPage