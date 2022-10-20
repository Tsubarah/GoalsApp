import { useState } from "react";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <div className="container">
    <div className="bloc-tabs">
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Personal Development
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Customer Interaction
      </button>
      <button
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
      >
        Building Geshdo
      </button>
    </div>

    <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <h2>Personal Development</h2>
        <hr />
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
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <h2>Customer Interaction</h2>
        <hr />
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

      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <h2>Building Geshdo</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
          nostrum rerum laudantium totam unde adipisci incidunt modi alias!
          Accusamus in quia odit aspernatur provident et ad vel distinctio
          recusandae totam quidem repudiandae omnis veritatis nostrum
          laboriosam architecto optio rem, dignissimos voluptatum beatae
          aperiam voluptatem atque. Beatae rerum dolores sunt.
        </p>
      </div>
    </div>
  </div>
);
}

export default Tabs