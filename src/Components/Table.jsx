import './Table.css'
import Accordion from './Accordion'
// import useDeleteGoal from '../Hooks/useDeleteGoal'

const Table = ({ goal }) => {
  // const deleteGoalMutation = useDeleteGoal({ id: goal.id })

  const deleteGoal = async () => {
    const res = await fetch(`http://localhost:7071/api/goals/delete/${goal.id}`, {
      method: "delete",
      // body: JSON.stringify({ id: goal.id })
    })

    const data = res.json()
    console.log('data', data)
  }

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
            <>
              <tr>
                <td>{goal.prio}</td>
                <td>{goal.description}</td>
                <td>{goal.target}</td>
                <td>{goal.milestones}</td>
                <td>{goal.half_year_progress}</td>
                <td>{goal.cost}</td>
              </tr>
              <tr>
                {goal.reviews.map(review => (
                  <td colSpan={3}>
                    <Accordion data={review} />
                  </td>
                ))}
              </tr>
            </>
        </tbody>
        <button 
          className="delete-btn"
          onClick={() => deleteGoal()}
        >
          Delete
        </button>
      </table>
    </div>
  )
}

export default Table