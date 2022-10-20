import './Table.css'
import Accordion from '../Components/Accordion'

const table = ({ goals }: any) => {
  console.log(goals)
  return (
    <div className="table-wrapper">
      <table>
        <tbody>
            <tr>
                <th className="th-prio">Prio</th>
                <th className="th-description">Goal description</th>
                <th className="th-target">Target reached when</th>
                <th className="th-milestone">Milestone</th>
                <th className="th-expected">Expected half year progress</th>
                <th className="th-cost">Cost</th>
            </tr>
            {goals.map((goal: any, i:any) => (
            <>
              <tr key={i}>
                  <td>{goal.prio}</td>
                  <td>{goal.description}</td>
                  <td>{goal.target}</td>
                  <td>{goal.milestones}</td>
                  <td>{goal.half_year_progress}</td>
                  <td>{goal.cost}</td>
              </tr>
              <Accordion />
              {/* <tr key={goal.id}>
                <th className="half-review">Half Year Review</th>
                <th className="end-review">End of Year Review</th>
              </tr> */}
            </>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default table