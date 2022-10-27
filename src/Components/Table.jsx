import Accordion from "./Accordion";
import Moment from 'react-moment';
import EditGoalModal from './EditGoalModal';

const table = ({ goals }) => {

    // const deleteGoal = async () => {
    //     try {
    //       const res = await fetch(`http://localhost:7071/api/goals/delete/${goal.id}`, {
    //         method: "delete",
    //       })
    //       console.log("Goal successfully deleted. Status code:", res.status)
    
    //     } catch (error) {
    //       console.log(error.message)
    //     }
    //   }

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
                {/* <button 
                    className="delete-btn"
                    onClick={() => deleteGoal()}
                    >
                    Delete
                </button> */}
            </table>
        </div>
    );
};

export default table;
