import { useState, useEffect } from "react";
import { IGoal } from '../typings/Goalinterface'
import EditGoalModal from "./EditGoalModal";
import Moment from "react-moment";

 type HistoryProps = {
    goals: IGoal[],
    
 }


const HistoryList = ({ goals }:HistoryProps) => {
    const [slide, setSlide] = useState("")
    // const [completedDev, setCompletedDev] = useState([]);
    // const [completedCus, setCompletedCus] = useState([]);
    // const [completedBui, setCompletedBui] = useState([]);

    const filtering = () => {
       

        // const completedDevGoals = completedGoals.filter(
        //     (goal) => goal.category === "personalDevelopment"
        // );
        // setCompletedDev(completedDevGoals);

        // const completedCusGoals = completedGoals.filter(
        //     (goal) => goal.category === "customerInteraction"
        // );
        // setCompletedCus(completedCusGoals);

        // const completedBuiGoals = completedGoals.filter(
        //     (goal) => goal.category === "buildingGeshdo"
        // );
        // setCompletedBui(completedBuiGoals);
    };
    const completedGoals = goals.filter((goal) => goal.isComplete === true);


    useEffect(() => {
        filtering();
    }, [slide, goals]);
    console.log('completed', completedGoals)
    return (
        <>
             {/* <div>
                <h2 className="history-headers">Personal Development</h2>
                <Table goals={completedDev} />
            </div>

            <div>
                <h2 className="history-headers">Customer Interaction</h2>
                <Table goals={completedCus} />
            </div>

            <div>
                <h2 className="history-headers">Building Geshdo</h2>
                <Table goals={completedBui} />
            </div>  */}

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
