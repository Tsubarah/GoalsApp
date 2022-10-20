import { useState } from "react";

const Tabs = ({ goals }) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
        <>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Personal Development
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Customer Interaction
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Building Geshdo
                </button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>

                    <div className="table-wrapper">
                        <table>
                            <tbody>
                                <tr>
                                    <th className="th-prio">Prio</th>
                                    <th className="th-description">Goal description</th>
                                    <th className="th-target">Target reached when</th>
                                    <th className="th-milestone">Milestone</th>
                                    <th className="th-expected">Expected half year progress</th>
                                    <th className="th-cost">Cost</th>
                                </tr>
                                {goals
                                .filter(goal => goal.category === "personalDevelopment")
                                .map((goal, i) => (
                                    <tr key={i}>
                                        <td>{goal.prio}</td>
                                        <td>{goal.description}</td>
                                        <td>{goal.target}</td>
                                        <td>{goal.milestones}</td>
                                        <td>{goal.half_year_progress}</td>
                                        <td>{goal.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>

                    <div className="table-wrapper">
                        <table>
                            <tbody>
                                <tr>
                                    <th className="th-prio">Prio</th>
                                    <th className="th-description">Goal description</th>
                                    <th className="th-target">Target reached when</th>
                                    <th className="th-milestone">Milestone</th>
                                    <th className="th-expected">Expected half year progress</th>
                                    <th className="th-cost">Cost</th>
                                </tr>
                                {goals
                                .filter(goal => goal.category === "customerInteraction")
                                .map((goal, i) => (
                                    <tr key={i}>
                                        <td>{goal.prio}</td>
                                        <td>{goal.description}</td>
                                        <td>{goal.target}</td>
                                        <td>{goal.milestones}</td>
                                        <td>{goal.half_year_progress}</td>
                                        <td>{goal.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>

                    <div className="table-wrapper">
                        <table>
                            <tbody>
                                <tr>
                                    <th className="th-prio">Prio</th>
                                    <th className="th-description">Goal description</th>
                                    <th className="th-target">Target reached when</th>
                                    <th className="th-milestone">Milestone</th>
                                    <th className="th-expected">Expected half year progress</th>
                                    <th className="th-cost">Cost</th>
                                </tr>
                                {goals
                                .filter(goal => goal.category === "buildingGeshdo")
                                .map((goal, i) => (
                                    <tr key={i}>
                                        <td>{goal.prio}</td>
                                        <td>{goal.description}</td>
                                        <td>{goal.target}</td>
                                        <td>{goal.milestones}</td>
                                        <td>{goal.half_year_progress}</td>
                                        <td>{goal.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Tabs