import { useState, useEffect } from "react";
import Table from './Table';
import { IGoal } from '../typings/Goal'

// Types are used for props 
type TabsProps = {
    goals: IGoal[]
}

const Tabs = ({ goals }: TabsProps) => {
    const [toggleState, setToggleState] = useState(1);
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

    //15552000000 six months in millisecounds

    let spanSixMonths = Date.now() - 15552000000

    console.log('hejhej',spanSixMonths)

    const filterSixMonths = () => {

        const sixMonths = goals.filter(goal => Date.parse(goal.creationDate) >= spanSixMonths)
        
        console.log('sixmonths',sixMonths)
    }

    console.log(filterSixMonths())

    

    
    useEffect(()=> {
        filterFunction()
    },[goals])

    const toggleTab = (index: number) => {
      setToggleState(index);
    };
    
    console.log(goals)

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
            <button className="green-button" onClick={() => {filterSixMonths()}}>Goals 6 months</button>
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