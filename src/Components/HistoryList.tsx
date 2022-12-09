import { useEffect, useState } from "react"
import { IGoal } from "../typings/Goalinterface"
import EditGoalModal from "./EditGoalModal"
import Moment from "react-moment"

type HistoryProps = {
  goals: IGoal[]
}

const HistoryList = ({ goals }: HistoryProps) => {
  const [swipeId, setSwipeId] = useState("")

  const handleSwipe = (id: string) => {
    setSwipeId(id)
  }

  const completedGoals = goals.filter((goal) => goal.isComplete)

  useEffect(() => {}, [goals])

  return (
    <>
      <div className="history-list-wrapper">
        <div className="history-header">
          <div className="headers history-creationDate">
            <h4>Creation Date </h4>
          </div>
          <div className="headers history-category">
            <h4>Category</h4>
          </div>
          <div className="headers history-description">
            <h4>Goal Description</h4>
          </div>
          <div className="headers history-review">
            <h4>End of year review</h4>
          </div>
          <div className="headers history-deadline">
            <h4 className="deadline">Deadline</h4>
          </div>
          <div className="headers placeholder"></div>
        </div>

        <div className="history-body">
          <ul>
            {completedGoals.map((goal, i) => (
              <li
                key={i}
                className={
                  goal.id === swipeId
                    ? "history-list-item slide-out-left"
                    : "history-list-item"
                }
              >
                <div className="body history-creationDate">
                  <p>
                    <Moment format="YYYY/MM/DD">{goal.creationDate}</Moment>
                  </p>
                </div>
                <div className="body history-category">
                  <p>
                    {goal.category
                      .replace(/([a-z])([A-Z])/g, "$1 $2")
                      .toUpperCase()}
                  </p>
                </div>
                <div className="body history-description">
                  <p>{goal.description}</p>
                </div>
                <div className="body history-review">
                  <p>{goal.reviews[1].value}</p>
                </div>
                <div className="body history-deadline">
                  <p>
                    <Moment format="YYYY/MM/DD">{goal.deadline}</Moment>
                  </p>
                </div>
                <div className=" body history-button-holder">
                  <EditGoalModal
                    goal={goal}
                    goals={goals}
                    handleSwipe={handleSwipe}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default HistoryList
