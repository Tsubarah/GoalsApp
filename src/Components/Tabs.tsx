import { useEffect, useState } from "react";
import Table from './Table';
import { IGoal } from '../typings/Goal'

// Types are used for props 
type TabsProps = {
    goals: IGoal[]
}

const Tabs = ({ goals }: TabsProps) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
      setToggleState(index);
    };

    console.log(goals)

    useEffect(() => {
        console.log(goals)
        console.log(toggleState)
    }, [goals, toggleState])

    return (
        <>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Prio
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Personal Development
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Customer Interaction
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    Building Geshdo
                </button>
            </div>

            <div className="content-tabs">

                <div className={toggleState === 1 ? "content  active-content" : "content"}>

                    <h3 className="table-headers">Personal Development</h3>
                    
                    {goals
                        .filter(goal => goal.category === "personalDevelopment" && goal.prio === Number("1"))
                        .map((goal, i) => (
                            <div className="table-wrapper" key={i}>
                                <Table goal={goal} />
                            </div>
                        ))
                    }
                    
                    <h3 className="table-headers">Customer Interaction</h3>

                    {goals
                        .filter(goal => goal.category === "customerInteraction" && goal.prio === Number("1"))
                        .map((goal, i) => (
                            <div className="table-wrapper" key={i}>
                                <Table goal={goal} />
                            </div>
                        ))
                    }

                    <h3 className="table-headers">Building Geshdo</h3>
                    
                    {goals
                        .filter(goal => goal.category === "buildingGeshdo" && goal.prio === Number("1"))
                        .map((goal, i) => (
                            <div className="table-wrapper" key={i}>
                                <Table goal={goal} />
                                <table>
                                <tr key={i}>
                                        <td>{goal.prio}</td>
                                        <td>{goal.description}</td>
                                        <td>{goal.target_reached}</td>
                                        <td>{goal.milestones}</td>
                                        <td>{goal.half_year_progress}</td>
                                        <td>{goal.cost}</td>
                                </tr>
                                </table>
                            </div>
                        ))
                    }

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
                                .filter(goal => goal.category === "personalDevelopment")
                                .map((goal, i) => (
                                    <tr key={i}>
                                        <td>{goal.prio}</td>
                                        <td>{goal.description}</td>
                                        <td>{goal.target_reached}</td>
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
                                .filter(goal => goal.category === "customerInteraction")
                                .map((goal, i) => (
                                    <tr key={i}>
                                        <td>{goal.prio}</td>
                                        <td>{goal.description}</td>
                                        <td>{goal.target_reached}</td>
                                        <td>{goal.milestones}</td>
                                        <td>{goal.half_year_progress}</td>
                                        <td>{goal.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                
                </div>

                <div className={toggleState === 4 ? "content  active-content" : "content"}>

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
                                        <td>{goal.target_reached}</td>
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