import Accordion from "./Accordion"
import Moment from 'react-moment'
import EditGoalModal from "./EditGoalModal"
import { IGoal } from '../typings/Goal'
import { Key, useEffect, useState } from "react";
import clsx from 'clsx'
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
                                <h4>{goal.prio}</h4>
                            </div>
                            <div className="cells cells-deadline">
                                <h4><Moment format="YYYY/MM/DD">{goal.deadline}</Moment></h4>
                            </div>
                            <div className="cells cells-description">
                                <h4>{goal.description}</h4>
                            </div>
                            <div className="cells cells-target">
                                <h4>{goal.target_reached}</h4>
                            </div>
                            <div className="cells cells-milestone">
                                <h4>{goal.milestones}</h4>
                            </div>
                            <div className="cells cells-progress">
                                <h4>{goal.half_year_progress}</h4>
                            </div>
                            <div className="cells cells-cost">
                                <h4>{goal.cost}</h4>
                            </div>
                        </div>
                        <div className="reviews">
                            <div className="revs">
                                {goal.reviews.map((review, i) => (
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