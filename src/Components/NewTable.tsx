import  Accordion  from "./Accordion"
import Moment from 'react-moment'
import EditGoalModal from "./EditGoalModal"
import { IGoal } from '../typings/Goal'

type TabsProps = {
  goals: IGoal[],
}

const NewTable = ({ goals }: TabsProps) => {
  return (
    <div className="wrapper">
  
    <div className="table">
      
      <div className="row header">
        <div className="cell cellPrio">
          Prio
        </div>
        <div className="cell cellDeadline">
          Deadline
        </div>
        <div className="cell cellDescription">
          Goal Description
        </div>
        <div className="cell cellTarget">
          Target reached When
        </div>
        <div className="cell cellMilestone">
            Milestone
          </div>
          <div className="cell cellProgress">
            Half year progress
          </div>
          <div className="cell cellCost">
            Cost
          </div>
      </div>
      
        {goals.map((goal, i) => (
      <div key={i} className="row">
        <div className="cell cellPrio" data-title="Prio">
          {goal.prio}
        </div>
        <div className="cell cellDeadline" data-title="DeadLine">
          <Moment format="YYYY/MM/DD">{goal.deadline}</Moment>
        </div>
        <div className="cell cellDescription" data-title="GoalDescription">
          {goal.description}
        </div>
        <div className="cell cellTarget" data-title="TargetReachedWhen">
           {goal.target_reached}
        </div>
        <div className="cell cellMilestone" data-title="Milestone">
            {goal.milestones}
          </div>
          <div className="cell cellProgress" data-title="HalfYearProgress">
            {goal.half_year_progress}
          </div>
          <div className="cell cellCost" data-title="Cost">
            {goal.cost}
          </div>

          <div>
            <div className="reviews">
              {goal.reviews.map((review, i) => (
                <div  key={i}>
                  <Accordion data={review} />
                </div>
              ))}
              <EditGoalModal goal={goal} />
            </div>
          </div>
      </div>
      
        ))}

    </div>

</div>      
  )
}

export default NewTable