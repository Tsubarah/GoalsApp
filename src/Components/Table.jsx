import './Table.css'
import Accordion from './Accordion'
import useDeleteGoal from '../Hooks/useDeleteGoal'


const Table = ({ goal }) => {

  const { mutate: deleteFn } = useDeleteGoal()
  

  const onDeleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      deleteFn(id);
    }
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
          onClick={() => onDeleteHandler(goal.id)}
        >
          Delete
        </button>
      </table>
    </div>
  )
}

export default Table