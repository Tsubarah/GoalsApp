import Accordion from "./Accordion";
import Moment from 'react-moment';
import EditGoalModal from './EditGoalModal';
import { IGoal } from '../typings/Goal'

type TabsProps = {
    goals: IGoal[]
}

const table = ({ goals }: TabsProps) => {

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

                {goals.map((goal, i) => (
                    <tbody key={i}>
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
                            {goal.reviews.map((review,i) => (
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

export default table;
