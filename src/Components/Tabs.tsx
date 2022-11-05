import { useState, useEffect } from "react";
import Table from './Table';
import { IGoal } from '../typings/Goal'

// Types are used for props 
type TabsProps = {
    goals: IGoal[]
}

const Tabs = ({ goals }: TabsProps) => {
    const [toggleState, setToggleState] = useState(1);
    // const [localGoals, setLocalGoals] = useState<undefined>()
    const [personalDevelopmentPrio, setPersonalDevelopmentPrio] = useState([] as any)
    const [customerInteractionPrio, setCustomerInteractionPrio] = useState([] as any)
    const [buildingGeshdoPrio, setBuildingGeshdoPrio] = useState([] as any)
    const [personalDevelopment, setPersonalDevelopment] = useState([] as any)
    const [customerInteraction, setCustomerInteraction] = useState([] as any)
    const [buildingGeshdo, setBuildingGeshdo] = useState([] as any)

    

    const filterFunction = () => {
        const filteredPrioDev =  goals.filter(goal => goal.category === "personalDevelopment" && goal.prio === Number("1"))
        setPersonalDevelopmentPrio(filteredPrioDev)
        const filteredPrioCus =  goals.filter(goal => goal.category === "customerInteraction" && goal.prio === Number("1"))
        setCustomerInteractionPrio(filteredPrioCus)
        const filteredPrioBui =  goals.filter(goal => goal.category === "buildingGeshdo" && goal.prio === Number("1"))
        setBuildingGeshdoPrio(filteredPrioBui )
        const categoryDev = goals.filter(goal => goal.category === "personalDevelopment") 
        setPersonalDevelopment(categoryDev)
        const categoryCus = goals.filter(goal => goal.category === "customerInteraction") 
        setCustomerInteraction(categoryCus)
        const categoryBui = goals.filter(goal => goal.category === "buildingGeshdo") 
        setBuildingGeshdo(categoryBui)
    }

    // Filter functions that filter goals after how long ago a goal was created
    //Get the span of now and 3 months ago
    const threeNow = new Date();
    threeNow.setMonth(threeNow.getMonth() - 3)
    const threeMonthsAgo = threeNow.getTime()
    console.log("3 månader sedan:", threeMonthsAgo)

    //Get the span of now and 6 months ago and 12 months
    const now = new Date();
    now.setMonth(now.getMonth() - 6);
    const sixMonthsAgo = now.getTime()
    console.log("6 månader sedan: ", sixMonthsAgo)

    
    const filterThreeMonths = () => {

        const threeMonths = goals.filter(goal => Date.parse(goal.creationDate as string) >= threeMonthsAgo)
        setPersonalDevelopment(threeMonths)
        setCustomerInteraction(threeMonths)
        setBuildingGeshdo(threeMonths)
    }

    const filterSixMonths = () => {

        const sixMonths = goals.filter(goal => Date.parse(goal.creationDate as string) >= sixMonthsAgo)
        setPersonalDevelopment(sixMonths)
        setCustomerInteraction(sixMonths)
        setBuildingGeshdo(sixMonths)
    }

    const filterTwelveMonths = () => {
        const twelveMonths = goals.filter(goal => Date.parse(goal.creationDate as string) < sixMonthsAgo)
        setPersonalDevelopment(twelveMonths)
        setCustomerInteraction(twelveMonths)
        setBuildingGeshdo(twelveMonths)
    }
    

    useEffect(()=> {
        filterFunction()
    },[goals])

    const toggleTab = (index: number) => {
      setToggleState(index);
    };

    useEffect(() => {
        // console.log(goals)
        // console.log(toggleState)
    }, [goals, toggleState])

    return (
        <>
            <div className="filter-months-span-wrapper">
                <div className="filter-months">
                    <h3>Filter by month</h3>
                    <select className="filterByTimeSpan" id="timeSpan">
                        <option onClick={()=>{filterFunction()}} value="all">Show All</option>
                        <option onClick={()=>{filterThreeMonths()}}value="3months">3 Months (1-3 months)</option>
                        <option onClick={()=>{filterSixMonths()}}value="6months">6 Months (1-6 months)</option>
                        <option onClick={()=>{filterTwelveMonths()}}value="12months">12 Months (7-12 months)</option>
                    </select>
                </div>
            </div>
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
                    <Table goals={personalDevelopmentPrio} />

                    <h3 className="table-headers">Customer Interaction</h3>
                    <Table goals={customerInteractionPrio} />

                    <h3 className="table-headers">Building Geshdo</h3>
                    <Table goals={buildingGeshdoPrio} />
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Table goals={personalDevelopment} />
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <Table goals={customerInteraction} />
                </div>

                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    <Table goals={buildingGeshdo} />
                </div>
            </div>
        </>
    );
}

export default Tabs