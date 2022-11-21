import Table from './Table';
import { IGoal } from '../typings/Goalinterface'

type TabsDetailsProps = {
  prioPD: IGoal[],
  prioCI: IGoal[],
  prioBG: IGoal[],
  months: number,
}

const TabsDetails = ({ prioPD, prioCI, prioBG, months }: TabsDetailsProps) => {
  return (
    <>
      <h2 className="table-headers">Personal Development</h2>
      <Table goals={prioPD.filter((goal => !goal.isComplete && Date.parse(goal.creationDate as string) >= months))} />
      <h2 className="table-headers">Customer Interaction</h2>
      <Table goals={prioCI.filter((goal => !goal.isComplete && Date.parse(goal.creationDate as string) >= months))} />
      <h2 className="table-headers">Building Geshdo</h2>
      <Table goals={prioBG.filter((goal => !goal.isComplete && Date.parse(goal.creationDate as string) >= months))} />
    </>
  )
}

export default TabsDetails