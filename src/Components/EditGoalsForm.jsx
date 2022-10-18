import React from 'react'

const EditGoalsForm = () => {
  return (
    <div>
    <form>
        <h2>Edit Goal</h2>
    <label><p className="lable-p">Type of Goal</p></label>
        <select name="prio" id="prio">
            <option value="personalDevelopment">Personal Development</option>
            <option value="customerInteraction">Customer Interaction</option>
            <option value="buildingGeshdo">Building Geshdo</option>
        </select><br />

        <label><p className="lable-p">Goal Description:</p></label><br />
        <textarea id="goalName" placeholder="Descriobe your goal here..." name="goalName"></textarea><br />

        <label><p className="lable-p">Prio:</p></label>
        <select name="prio" id="prio">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select><br />

        <label><p className="lable-p">When is your goal done?</p></label><br />
        <input type="text" id="doneWhen" name="doenWhen"></input><br />

        <label><p className="lable-p">Milestones:</p></label><br />
        <input type="text" id="milestones" name="milestones"></input><br />

        <label><p className="lable-p">Costs:</p></label><br />
        <input type="text" id="cost" name="cost"></input><br />

        <label><p className="lable-p">Comments:</p></label><br />
        <textarea id="comments" placeholder="Write here..." name="comments"></textarea><br />

        <hr />

        <button type="submit" className="submit-button">Save Changes</button>

    </form>
</div>
  )
}

export default EditGoalsForm