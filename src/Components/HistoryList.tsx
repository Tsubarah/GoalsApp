import { useState, useEffect } from "react";
import { IGoal } from '../typings/Goalinterface'
import EditGoalModal from "./EditGoalModal";
import Moment from "react-moment";

 type HistoryProps = {
    goals: IGoal[],
 }

const HistoryList = ({ goals }:HistoryProps) => {
    const [slide, setSlide] = useState("")
 
    const completedGoals = goals.filter((goal) => goal.isComplete === true);


    useEffect(() => {
    }, [slide, goals]);

   

    return (
        <>
        
             <div className="history-list-wrapper">

                <div className="history-header">
                    <div className="history-creationDate"><h3>Creation Date </h3></div>
                    <div className="history-category category"><h3>Category</h3></div>
                    <div className="history-description description"><h3>Goal Description</h3></div>
                    <div className="history-deadline deadline"><h3 className="deadline">Deadline</h3></div>
                </div>
                
                <ul>
                {completedGoals.map((goal, i)=> (
                    <li key={i}>
                        
                        <div className="history-list-item">
                        
                           <div className="history-list-div">
                                <div className="history-creationDate"><Moment format="YYYY/MM/DD">{goal.creationDate}</Moment></div>
                                <div className="history-category"> {goal.category.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}</div>
                                <div className="history-description">{goal.description}</div>
                                <div className="history-deadline deadline"><Moment format="YYYY/MM/DD">{goal.deadline}</Moment></div>
                            </div>

                            <div className="history-button-holder">
                                <EditGoalModal setSlide={setSlide} goal={goal}/>
                            </div>

                        </div>
                        
                        </li>
                        ))}
                </ul>
            </div> 
        </>
    );
};

export default HistoryList;
