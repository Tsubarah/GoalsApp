import React from 'react'

const GoalsForm = () => {
  return (
    <div>
        <form action="">
            <label for="goalName">Goal Description: </label>
            <textarea id="goalName" placeholder="Descriobe your goal here..." name="goalName" rows="30" cols="30"></textarea>

            <label for="prio">Prio: </label>
            <select name="prio" id="prio"></select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                
            <label for="doneWhen"></label>
            <input type="text" id="doneWhen" name="doenWhen">When is your goal done? </input>

            <label for="milestones"></label>
            <input type="text" id="milestones" name="milestones">Milestones: </input>

            <label for="cost">Costs: </label>
            <input type="text" id="cost" name="cost"></input>

            <label for="comments">Comments: </label>
            <textarea id="comments" placeholder="Write here..." name="comments" rows="30" cols="30"></textarea>

        </form>
    </div>
  )
}

export default GoalsForm