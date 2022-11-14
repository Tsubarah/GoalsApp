import { useState, useEffect } from "react";
import Table from "./Table";

const HistoryList = ({ goals }) => {
    const [completedDev, setCompletedDev] = useState([]);
    const [completedCus, setCompletedCus] = useState([]);
    const [completedBui, setCompletedBui] = useState([]);

    const filtering = () => {
        const completedGoals = goals.filter((goal) => goal.isComplete === true);

        const completedDevGoals = completedGoals.filter(
            (goal) => goal.category === "personalDevelopment"
        );
        setCompletedDev(completedDevGoals);

        const completedCusGoals = completedGoals.filter(
            (goal) => goal.category === "customerInteraction"
        );
        setCompletedCus(completedCusGoals);

        const completedBuiGoals = completedGoals.filter(
            (goal) => goal.category === "buildingGeshdo"
        );
        setCompletedBui(completedBuiGoals);
    };

    useEffect(() => {
        filtering();
    }, [goals]);

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
                    <div className="history-deadline"><h3>Deadline</h3></div>
                    <div className="history-category"><h3>Category</h3></div>
                    <div className="history-description"><h3>Goal Description</h3></div>
                    <div className="history-creationDate"><h3>Creation Date</h3></div>
                </div>
                <ul>
                    <li>
                        <div className="history-list-item">
                           <div className="history-list-div">
                                <div className="history-deadline"> 9/9/22 </div>
                                <div className="history-category"> Building Geshdo</div> 
                                <div className="history-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, molestias illo, quae nemo porro magnam iure aperiam quisquam cumque aut, laudantium id rem at in dolor vitae! Et, quasi explicabo.</div>
                                <div className="history-creationDate">6/7/23</div>
                            </div>
                            
                           <button className="history-list-button">
                            View
                           </button>
                           </div>
                        
                        </li>
                        <li>
                        <div className="history-list-item">
                           <div className="history-list-div">
                                <div className="history-deadline"> 22/22/22 </div>
                                <div className="history-category">Personal Development</div>
                                <div className="history-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati, aperiam repellat temporibus cumque, beatae a cum, voluptatem dignissimos facere fugiat perferendis repellendus? Commodi neque, vel in ipsa voluptas dolores!</div> 
                                <div className="history-creationDate">7/8/22</div>
                            </div>
                           <button className="history-list-button">
                            View
                           </button>
                        </div>
                        </li>
                        <li>
                        <div className="history-list-item">
                           <div className="history-list-div">
                           <div className="history-deadline"> 9/9/22 </div>
                                <div className="history-category"> Customer Interaction</div> 
                                <div className="history-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati esse, praesentium rem excepturi beatae commodi vero eaque eius natus neque! Eligendi ratione omnis sit atque odit voluptate ea harum!</div>
                                <div className="history-creationDate">6/9/20</div>
                            </div>
                           <button className="history-list-button">
                            View
                           </button>
                        </div>
                        </li>
                    
                    
                </ul>
            </div> 
        </>
    );
};

export default HistoryList;
