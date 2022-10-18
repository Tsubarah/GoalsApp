import './GoalsPage.css'

const GoalsPage = () => {
    return (
        <div className="container">

            <div className="category-header">
                <h2>Personal development</h2>
                <button className='add-btn'>Add Goal +</button>
            </div>
            <div className="table-wrapper">
                <table>
                    <tr>
                        <th className="th-prio">Prio</th>
                        <th className="th-description">Goal description</th>
                        <th className="th-target">Target reached when</th>
                        <th className="th-milestone">Milestone</th>
                        <th className="th-expected">Expected half year progress</th>
                        <th className="th-cost">Cost</th>
                    </tr>
                    <tr>
                        <td>1-5</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit labore voluptatem eius placeat voluptates nesciunt a aliquam voluptatum repellendus?</td>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos a inventore iure dolorum quod fugit dicta distinctio eligendi nostrum similique.</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere accusantium facilis veniam vero mollitia impedit dolor similique tempore! Quisquam blanditiis, ab possimus voluptatem necessitatibus esse modi adipisci nihil repellendus.</td>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos a inventore iure </td>
                        <td>300kr</td>
                    </tr>

                </table>
                <table>
                    <tr>
                        <th className="half-review">Half Year Review</th>
                        <th className="end-review">End of Year Review</th>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat dolorem dignissimos est dolorum quidem ipsam debitis animi vero, nihil doloribus eligendi consequuntur rem sit culpa atque fuga at ratione numquam rerum eius porro obcaecati maiores! Impedit velit assumenda corporis aliquid quidem exercitationem? Ea cupiditate eos assumenda aliquam quas, nulla totam ut animi? Explicabo aperiam iusto obcaecati placeat delectus exercitationem!</td>
                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, quod quasi aliquid, placeat rem, quam esse quisquam iure debitis nulla ut iusto dicta! Quidem soluta, obcaecati molestiae dignissimos assumenda natus. Neque maiores dolor sequi beatae vero odio quas esse est assumenda excepturi reiciendis, laboriosam ipsa vitae quis asperiores! Voluptas corporis fugit ex nihil culpa vero possimus accusantium labore ipsa voluptate.</td>
                    </tr>
                </table>
            </div>

            <div className="category-header">
                <h2>Interaction with customer</h2>
                <button className='add-btn'>Add Goal +</button>
            </div>
            <div className="table-wrapper">
                <table>
                    <tr>
                        <th className="th-prio">Prio</th>
                        <th className="th-description">Goal description</th>
                        <th className="th-target">Target reached when</th>
                        <th className="th-milestone">Milestone</th>
                        <th className="th-expected">Expected half year progress</th>
                        <th className="th-cost">Cost</th>
                    </tr>
                    <tr>
                        <td>1-5</td>
                        <td>Lorem ipsum dolor elit. Officiis sit labore voluptatem eius placeat voluptates nesciunt a aliquam voluptatum repellendus?</td>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. fugit dicta distinctio eligendi nostrum similique.</td>
                        <td>necessitatibus esse modi adipisci nihil repellendus.</td>
                        <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos a inventore iure </td>
                        <td>300kr</td>
                    </tr>

                </table>
                <table>
                    <tr>
                        <th className="half-review">Half Year Review</th>
                        <th className="end-review">End of Year Review</th>
                    </tr>
                    <tr>
                        <td>Lihil doloribus eligendi consequuntur rem sit culpa atque fuga at ratione numquam rerum eius porro obcaecati maiores! Impedit velit assumenda corporis aliquid quidem exercitationem? Ea cupiditate eos assumenda aliquam quas, nulla totam ut animi? Explicabo aperiam iusto obcaecati placeat delectus exercitationem!</td>
                        <td>Neque maiores dolor sequi beatae vero odio quas esse est assumenda excepturi reiciendis, laboriosam ipsa vitae quis asperiores! Voluptas corporis fugit ex nihil culpa vero possimus accusantium labore ipsa voluptate.</td>
                    </tr>
                </table>
            </div>
      </div>
    )
}

export default GoalsPage