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
            <div>
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
            </div>
        </>
    );
};

export default HistoryList;
