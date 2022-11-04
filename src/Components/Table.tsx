import Accordion from "./Accordion";
import Moment from 'react-moment';
import EditGoalModal from './EditGoalModal';
import { IGoal } from '../typings/Goal'
import { Key, useEffect, useState } from "react";
import clsx from 'clsx'
// import { useEffect, useState } from "react";

type TabsProps = {
  goals: IGoal[],
  // localGoals: IGoal[],
}

const Table = ({ goals }: TabsProps) => {
  const [inCompleteGoals, setInCompleteGoals] = useState([] as any)
  const [inComplete, setInComplete] = useState()

  let slide: string;
  
  const filterGoals = () => {
    const inCompleted = goals.filter(goal => !goal.isComplete)
    slide = clsx(inCompleted.map(goal => !goal.isComplete) ? "" : "slide-out-right");
    console.log('Incomplete', inCompleted)
    
    // setTimeout(() => {
      setInCompleteGoals(inCompleted)
    // }, 2000)
  }

  useEffect(() => {
    if (!goals) return
      filterGoals()
    console.log('incomplete', inCompleteGoals)
    console.log('goals', goals)
  }, [goals])

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th className="th-prio">Prio</th>
            <th className="th-deadline">Deadline</th>
            <th className="th-description">Goal description</th>
            <th className="th-target">Target reached when</th>
            <th className="th-milestone">Milestone</th>
            <th className="th-expected">
              Expected half year progress
            </th>
            <th className="th-cost">Cost</th>
          </tr>
        </thead>
    
        {inCompleteGoals.map((goal: IGoal, i: Key | null | undefined) => (
          <tbody key={i} className={slide ? slide : ""}>
            <tr>
              <td>{goal.prio}</td>
              <td><Moment format="YYYY/MM/DD">{goal.deadline}</Moment></td>
              <td>{goal.description}</td>
              <td>{goal.target_reached}</td>
              <td>{goal.milestones}</td>
              <td>{goal.half_year_progress}</td>
              <td>{goal.cost}</td>
            </tr>

            <tr>
              {goal.reviews.map((review, i) => (
                <td colSpan={3} key={i}>
                  <Accordion data={review} />
                </td>
              ))}
              <EditGoalModal goal={goal} />
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
