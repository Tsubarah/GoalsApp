import "./Table.css";
import Accordion from "./Accordion";

const table = ({ goals }) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th className="th-prio">Prio</th>
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
                            <td>{goal.description}</td>
                            <td>{goal.target}</td>
                            <td>{goal.milestones}</td>
                            <td>{goal.half_year_progress}</td>
                            <td>{goal.cost}</td>
                        </tr>

                        <tr className="whatever">
                            <td colSpan={3}>
                                <Accordion data={goal.reviews[0]} />
                            </td>
                            <td colSpan={3}>
                                <Accordion data={goal.reviews[1]} />
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default table;
