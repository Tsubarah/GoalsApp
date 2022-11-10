import Accordion from "./Accordion"
import Moment from 'react-moment'
import EditGoalModal from "./EditGoalModal"
import { IGoal } from '../typings/Goal'
// import { Key, useEffect, useState } from "react";
// import clsx from 'clsx'
// import { useEffect, useState } from "react";

type TabsProps = {
    goals: IGoal[],
}

const Table = ({ goals }: TabsProps) => {
    return (
        <>
            <div className="table-wrapper">
                <div className="header-wrapper">
                    <div className="headers header-prio">
                        <h4>Prio</h4>
                    </div>
                    <div className="headers header-deadline">
                        <h4>Deadline</h4>
                    </div>
                    <div className="headers header-description">
                        <h4>Goal Description</h4>
                    </div>
                    <div className="headers header-target">
                        <h4>Target reached when</h4>
                    </div>
                    <div className="headers header-milestone">
                        <h4>Milestone</h4>
                    </div>
                    <div className="headers header-progress">
                        <h4>Half year progress</h4>
                    </div>
                    <div className="headers header-cost">
                        <h4>Cost</h4>
                    </div>
                </div>
                <div className="body-wrapper">
                {goals.map((goal, i) => (
                    <div className="cell-row" key={i}>

                        <div className="goal-info">
                            <div className="cells cells-prio">
                                <p>{goal.prio}</p>
                            </div>
                            <div className="cells cells-deadline">
                                <p><Moment format="YYYY/MM/DD">{goal.deadline}</Moment></p>
                            </div>
                            <div className="cells cells-description">
                                <p>{goal.description}</p>
                            </div>
                            <div className="cells cells-target">
                                <p>{goal.target_reached}</p>
                            </div>
                            <div className="cells cells-milestone">
                                <p>{goal.milestones}</p>
                            </div>
                            <div className="cells cells-progress">
                                <p>{goal.half_year_progress}</p>
                            </div>
                            <div className="cells cells-cost">
                                <p>{goal.cost}</p>
                            </div>
                        </div>
                        <div className="reviews">
                            <div className="revs">
                                {goal?.reviews.map((review, i) => (
                                    <div className="accordion" key={i}>
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
        </>
    )
}

export default Table