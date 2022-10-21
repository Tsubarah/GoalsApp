import './Table.css'
import Accordion from './Accordion'

const table = ({ goals }) => {
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
          {goals.map((goal, i) => (
            <>
              <tr key={i}>
                <td>{goal.prio}</td>
                <td>{goal.description}</td>
                <td>{goal.target}</td>
                <td>{goal.milestones}</td>
                <td>{goal.half_year_progress}</td>
                <td>{goal.cost}</td>
              </tr>
              <tr className="whatever">
                <td colSpan={3}>
                  <Accordion data={goal.reviews[0]} />
                </td>
                <td colspan={3}>
                  <Accordion data={goal.reviews[1]} />
                </td>
              </tr>
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