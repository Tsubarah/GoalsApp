import { useState, useEffect } from "react";
import Table from './Table';
import { IGoal } from '../typings/Goal'
import Modal from '../Components/Modal'

// Types are used for props 
type TabsProps = {
  goals: IGoal[],
}

const Tabs = ({ goals }: TabsProps) => {
  const [toggleState, setToggleState] = useState(1);
  const [show, setShow] = useState<boolean>(false)
  // const [personalDevelopmentPrio, setPersonalDevelopmentPrio] = useState([] as any)
  // const [customerInteractionPrio, setCustomerInteractionPrio] = useState([] as any)
  // const [buildingGeshdoPrio, setBuildingGeshdoPrio] = useState([] as any)
  // const [personalDevelopment, setPersonalDevelopment] = useState([] as any)
  // const [customerInteraction, setCustomerInteraction] = useState([] as any)
  // const [buildingGeshdo, setBuildingGeshdo] = useState([] as any)

  const sections = [
    {
      id: 1,
      name: 'All',
      category: 'all',
      goals: goals,
    },
    {
      id: 2,
      name: 'Personal Development',
      category: 'personalDevelopment',
      goals: goals?.filter(goal => goal.category === "personalDevelopment"),
      // prio: goals?.filter(goal => goal.prio === Number("1"))
    },
    {
      id: 3,
      name: 'Customer Interaction',
      category: 'customerInteraction',
      goals: goals?.filter(goal => goal.category === "customerInteraction"),
      prio: goals?.filter(goal => goal.category === "customerInteraction" && goal.prio === Number("1"))
    },
    {
      id: 4,
      name: 'Building Geshdo',
      category: 'buildingGeshdo',
      goals: goals?.filter(goal => goal.category === "buildingGeshdo"),
      prio: goals?.filter(goal => goal.category === "buildingGeshdo" && goal.prio === Number("1"))
    }
  ]

  //Get the span of now and 3 months ago
  const threeNow = new Date();
  threeNow.setMonth(threeNow.getMonth() - 3)
  const threeMonthsAgo = threeNow.getTime()

  const sixNow = new Date();
  sixNow.setMonth(sixNow.getMonth() - 6);
  const sixMonthsAgo = sixNow.getTime()


  // const monthSpan = [ ((GÖR EN SWITCH))
  //   {
  //     id: 1,
  //     name: "all",
  //   },
  //   {
  //     id: 2,
  //     name: "3 months",
  //     // show: sections.map(section => section.goals).filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) >= threeMonthsAgo))
  //   },
  //   {
  //     id: 3,
  //     name: "6 months",
  //   },
  //   {
  //     id: 4,
  //     name: "12 months"
  //   }
  // ]

  console.log('sections', sections)

  // const filterFunction = () => {
  //   const filteredPrioDev = goals.filter(goal => goal.category === "personalDevelopment" && goal.prio === Number("1"))
  //   setPersonalDevelopmentPrio(filteredPrioDev)
  //   const filteredPrioCus = goals.filter(goal => goal.category === "customerInteraction" && goal.prio === Number("1"))
  //   setCustomerInteractionPrio(filteredPrioCus)
  //   const filteredPrioBui = goals.filter(goal => goal.category === "buildingGeshdo" && goal.prio === Number("1"))
  //   setBuildingGeshdoPrio(filteredPrioBui)
  //   const categoryDev = goals.filter(goal => goal.category === "personalDevelopment")
  //   setPersonalDevelopment(categoryDev)
  //   const categoryCus = goals.filter(goal => goal.category === "customerInteraction")
  //   setCustomerInteraction(categoryCus)
  //   const categoryBui = goals.filter(goal => goal.category === "buildingGeshdo")
  //   setBuildingGeshdo(categoryBui)
  // }

  // Filter functions that filter goals after how long ago a goal was created

  // console.log("3 månader sedan:", threeMonthsAgo)

  //Get the span of now and 6 months ago and 12 months

  // console.log("6 månader sedan: ", sixMonthsAgo)


  // const filterThreeMonths = () => {

  //   const threeMonthsPD = personalDevelopment.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) >= threeMonthsAgo)
  //   const threeMonthsCI = customerInteraction.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) >= threeMonthsAgo)
  //   const threeMonthsBG = buildingGeshdo.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) >= threeMonthsAgo)
  //   setPersonalDevelopment(threeMonthsPD)
  //   setCustomerInteraction(threeMonthsCI)
  //   setBuildingGeshdo(threeMonthsBG)
  //   console.log('customerInteraction', customerInteraction)
  // }

  // const filterSixMonths = () => {
  //   const sixMonthsPD = personalDevelopment.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) >= sixMonthsAgo)
  //   const sixMonthsCI = customerInteraction.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) >= sixMonthsAgo)
  //   const sixMonthsBG = buildingGeshdo.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) >= sixMonthsAgo)
  //   setPersonalDevelopment(sixMonthsPD)
  //   setCustomerInteraction(sixMonthsCI)
  //   setBuildingGeshdo(sixMonthsBG)
  //   console.log('customerInteraction', customerInteraction)
  // }

  // const filterTwelveMonths = () => {
  //   const twelveMonthsPD = personalDevelopment.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) < sixMonthsAgo)
  //   const twelveMonthsCI = customerInteraction.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) < sixMonthsAgo)
  //   const twelveMonthsBG = buildingGeshdo.filter((goal: { creationDate: string; }) => Date.parse(goal.creationDate as string) < sixMonthsAgo)
  //   setPersonalDevelopment(twelveMonthsPD)
  //   setCustomerInteraction(twelveMonthsCI)
  //   setBuildingGeshdo(twelveMonthsBG)
  //   console.log('customerInteraction', customerInteraction)
  // }

  // const filterByMonth = (index: any) => {
  //   if (index === 'all') {
  //     filterFunction()
  //   }
  //   if (index === '3months') {
  //     filterThreeMonths()
  //   }
  //   if (index === '6months') {
  //     filterSixMonths()
  //   }
  //   if (index === '12months') {
  //     filterTwelveMonths()
  //   }
  // }

  useEffect(() => {
    // filterFunction()
  }, [goals])

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  useEffect(() => {
    // console.log(goals)
    // console.log(toggleState)
  }, [goals, toggleState])

  return (
    <>

      <Modal setShow={setShow} show={show} />

      <div className="select-header">
        <h3>Filter by month</h3>
      </div>
      <div className="filter-months-span-wrapper">
        <div className="filter-months">
        {/* <select className="filterByTimeSpan" id="timeSpan">
          {sections.map(section => (
            <option></option>
          ))} */}
          {/* <select className="filterByTimeSpan" id="timeSpan" onChange={(e) => filterByMonth(e.currentTarget.value)}> */}
            {/* <option onClick={() => filterFunction} value="all">Show All</option>
            <option onClick={() => filterThreeMonths} value="3months">3 Months (1-3 months)</option>
            <option onClick={() => filterSixMonths} value="6months">6 Months (1-6 months)</option>
            <option onClick={() => filterTwelveMonths} value="12months">12 Months (7-12 months)</option>
          </select> */}
          <span className="custom-arrow"></span>
        </div>
        <div>
          <button
            className="button create-btn"
            onClick={() => setShow(!show)}
          >
            Create a Goal
          </button>
        </div>
      </div>

      <div className="bloc-tabs">
        {sections.map(section => (
          <button
          className={toggleState === section.id ? "tabs active-tabs" : "tabs"} 
          onClick={() => toggleTab(section.id)}
          >
            {section.name}
          </button>
        ))}
      </div>
      
      <div className="content-tabs">
        {sections.map(section => (
          <div className={toggleState === section.id ? "content active-content" : "content"}>
            <h2 className="table-headers">{section.name}</h2>
            <Table goals={section.goals}/>
          </div>
        ))}
      </div>
      {/* <div className="content-tabs">

        <div className={toggleState === 1
          ? "content  active-content"
          : "content"}
        >
          <h2 className="table-headers">Personal Development</h2>
          <Table goals={personalDevelopmentPrio} />

          <h2 className="table-headers">Customer Interaction</h2>
          <Table goals={customerInteractionPrio} />

          <h2 className="table-headers">Building Geshdo</h2>
          <Table goals={buildingGeshdoPrio} />
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <h2 className="table-headers">Personal Development</h2>
          <Table goals={personalDevelopment} />
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          <h2 className="table-headers">Customer Interaction</h2>
          <Table goals={customerInteraction} />
        </div>

        <div className={toggleState === 4 ? "content  active-content" : "content"}>
          <h2 className="table-headers">Building Geshdo</h2>
          <Table goals={buildingGeshdo} />
        </div>
      </div> */}
    </>
  );
}

export default Tabs