import useGoal from '../Hooks/useGoal'
import Tabs from '../Components/Tabs'
import Modal from '../Components/Modal'

const GoalsPage = () => {
    const { getGoals: goals, isLoading } = useGoal()

    // console.log('goals', goals)

    return (
        
        <div className="container">

            <Modal />

            {isLoading && (<p>Loading...</p>)}

            {!isLoading && goals && (
<<<<<<< HEAD
            
                <Tabs goals={goals} />
    
=======

                <>
                    <div className="category-header">
                        <h2>Personal development</h2>
                        <button className='add-btn'>Add Goal +</button>
                    </div>
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
                                    <tr key={i}>
                                        <td>{goal.prio}</td>
                                        <td>{goal.description}</td>
                                        <td>{goal.target}</td>
                                        <td>{goal.milestones}</td>
                                        <td>{goal.half_year_progress}</td>
                                        <td>{goal.cost}</td>
                                    </tr>
                                ))}
                                </tbody>
                             </table>
                             <button onClick={DeleteGoal}>
                                    Delete
                             </button>
                             {/* <table>
                                 <tr>
                                     <th className="half-review">Half Year Review</th>
                                     <th className="end-review">End of Year Review</th>
                                 </tr>
                                 <tr>
                                     <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dolorem dignissimos est dolorum quidem ipsam debitis animi vero, nihil doloribus eligendi consequuntur rem sit culpa atque fuga at ratione numquam rerum eius porro obcaecati maiores! Impedit velit assumenda corporis aliquid quidem exercitationem? Ea cupiditate eos assumenda aliquam quas, nulla totam ut animi? Explicabo aperiam iusto obcaecati placeat delectus exercitationem!</td>
                                     <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quod quasi aliquid, placeat rem, quam esse quisquam iure debitis nulla ut iusto dicta! Quidem soluta, obcaecati molestiae dignissimos assumenda natus. Neque maiores dolor sequi beatae vero odio quas esse est assumenda excepturi reiciendis, laboriosam ipsa vitae quis asperiores! Voluptas corporis fugit ex nihil culpa vero possimus accusantium labore ipsa voluptate.</td>
                                 </tr>
                             </table> */}
                         </div>
                    

                   
                </>
>>>>>>> e7b6ffb (Added delete button)
            )}
            
        </div>
    )
}

export default GoalsPage