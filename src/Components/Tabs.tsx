import { useState, useEffect } from "react";
import Table from './Table';
import { IGoal } from '../typings/Goalinterface'
import { IUser } from '../typings/Userinterface'
import Modal from '../Components/Modal'
import TabsDetails from '../Components/TabsDetails'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../Contexts/AuthContext";

// Types are used for props 
type TabsProps = {
  goals: IGoal[],
  user: IUser | undefined,
}

const Tabs = ({ goals, user }: TabsProps) => {
  const [toggleState, setToggleState] = useState(1);
  const [show, setShow] = useState<boolean>(false)
  const [month, setMonth] = useState<string>("all")
  const { currentUser } = useAuthContext()
  const [isManager, setIsManager] = useState(currentUser?.jobTitle === 'Intern')

  

  const sections = [
    {
      id: 1,
      name: 'Prio',
      category: 'prio',
      goals: goals?.filter(goal => goal.prio === 1).sort((a, b) => b.category.localeCompare(a.category)).sort((a, b) => a.deadline.localeCompare(b.deadline)),
    },
    {
      id: 2,
      name: 'Personal Development',
      category: 'personalDevelopment',
      goals: goals?.filter(goal => goal.category === "personalDevelopment").sort((a, b) => a.deadline.localeCompare(b.deadline)),
    },
    {
      id: 3,
      name: 'Customer Interaction',
      category: 'customerInteraction',
      goals: goals?.filter(goal => goal.category === "customerInteraction").sort((a, b) => a.deadline.localeCompare(b.deadline)),
    },
    {
      id: 4,
      name: 'Building Geshdo',
      category: 'buildingGeshdo',
      goals: goals?.filter(goal => goal.category === "buildingGeshdo").sort((a, b) => a.deadline.localeCompare(b.deadline)),
    }
  ]

  // const incompleteGoals = sections[0].goals.filter(goal => !goal.isComplete)
  const prioGoals = sections[0].goals
  const filterByCategories = sections.filter(section => section.name !== "Prio")
  const filterPrioPD = sections[0].goals.filter(goal => goal.category === "personalDevelopment")
  const filterPrioCI = sections[0].goals.filter(goal => goal.category === "customerInteraction")
  const filterPrioBG = sections[0].goals.filter(goal => goal.category === "buildingGeshdo")

  //Get the span of now and 3 months ago
  const threeNow = new Date();
  threeNow.setMonth(threeNow.getMonth() - 3)
  const threeMonthsAgo = threeNow.getTime()

  const sixNow = new Date();
  sixNow.setMonth(sixNow.getMonth() - 6);
  const sixMonthsAgo = sixNow.getTime()

  const twelveNow = new Date();
  twelveNow.setMonth(twelveNow.getMonth() - 12);
  const twelveMonthsAgo = twelveNow.getTime()

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  useEffect(() => {
  }, [goals, toggleState])

  return (
    <>
      <Modal setShow={setShow} show={show} />

      <div className="select-header">
        <h3>Filter by month</h3>
      </div>
      <div className="filter-months-span-wrapper">
        <div className="filter-months">
          <select 
            className="filterByTimeSpan" 
            id="timeSpan" 
            onChange={(e) => 
              setMonth(e.currentTarget.value)}
          >
            <option value="all">Show All</option>
            <option value="3months">3 Months (1-3 months)</option>
            <option value="6months">6 Months (1-6 months)</option>
            <option value="12months">12 Months (1-12 months)</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <div>
          {isManager ? 
            <button
              className="button create-btn"
              onClick={() => setShow(!show)}
            >
              Create goal
            </button>
            : "" }
            <Link to={`/goals/history/${user ? user.id : currentUser?.id}`}>
              <button className='button my-history-btn'>History →</button>
            </Link>
        </div>
      </div>
            
      <div className="bloc-tabs">
        {sections.map((section, i) => (
          <button
            key={i}
            className={toggleState === section.id
              ? "tabs active-tabs"
              : "tabs"
            }
            onClick={() => toggleTab(section.id)}
          >
            {section.name}
          </button>
        ))}
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1
          ? "content active-content"
          : "content"
        }
        >
          {prioGoals && (
            <>
              {month === '3months' ? (

                <TabsDetails prioPD={filterPrioPD} prioCI={filterPrioCI} prioBG={filterPrioBG} months={threeMonthsAgo} />

              ) : month === '6months' ? (

                <TabsDetails prioPD={filterPrioPD} prioCI={filterPrioCI} prioBG={filterPrioBG} months={sixMonthsAgo} />

              ) : month === '12months' ? (

                <TabsDetails prioPD={filterPrioPD} prioCI={filterPrioCI} prioBG={filterPrioBG} months={twelveMonthsAgo} />
                
              ) : (
                <div>
                  <h2 className="table-headers">Personal Development</h2>
                  <Table goals={filterPrioPD.filter(goal => !goal.isComplete)} />
                  <h2 className="table-headers">Customer Interaction</h2>
                  <Table goals={filterPrioCI.filter(goal => !goal.isComplete)} />
                  <h2 className="table-headers">Building Geshdo</h2>
                  <Table goals={filterPrioBG.filter(goal => !goal.isComplete)} />
                </div>
              )}
            </>
          )}
        </div>
        {filterByCategories.map(section => (
          <div className={toggleState === section.id
            ? "content active-content"
            : "content"
          }
          >
            {month === "3months" ? (
              <div>
                <h2 className="table-headers">{section.name}</h2>
                <Table goals={section.goals.filter((goal => Date.parse(goal.creationDate as string) >= threeMonthsAgo))} />
              </div>
            ) : month === "6months" ? (
              <div>
                <h2 className="table-headers">{section.name}</h2>
                <Table goals={section.goals.filter((goal => Date.parse(goal.creationDate as string) >= sixMonthsAgo))} />
              </div>
            ) : month === "twelvemonths" ? (
              <div>
                <h2 className="table-headers">{section.name}</h2>
                <Table goals={section.goals.filter((goal => Date.parse(goal.creationDate as string) >= twelveMonthsAgo))} />
              </div>
            ) : (
              <div>
                <h2 className="table-headers">{section.name}</h2>
                <Table goals={section.goals.filter(goal => !goal.isComplete)} />
              </div>
            )}
          </div>
          )
        )}
      </div>
    </>
  );
}

export default Tabs