import useEditGoal from "../Hooks/useEditGoal"
import { Controller, useForm, useFieldArray } from "react-hook-form"

const EditGoalsForm = ({ setShow, goal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors},
        reset,
    } = useForm()

    const editGoalMutation = useEditGoal()

    const editGoal = async (data) => {
        await editGoalMutation.mutate(data, goal.id)

    }

  return (
    <div>
    <form onSubmit={handleSubmit(editGoal)}>
        <h2>Edit Goal</h2>
    <label><p className="label-p">Type of Goal</p></label>
        <select name="category" id="category">
            <option value="personalDevelopment">Personal Development</option>
            <option value="customerInteraction">Customer Interaction</option>
            <option value="buildingGeshdo">Building Geshdo</option>
        </select><br />

        <label><p className="label-p">Goal Description:</p></label><br />
        <textarea id="goalName" placeholder="Describe your goal here..." name="goalName"></textarea><br />

        <label><p className="label-p">Prio:</p></label>
        <select name="prio" id="prio">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select><br />

        <label><p className="label-p">When is your goal done?</p></label><br />
        <input type="text" id="doneWhen" name="doneWhen"></input><br />

        <label><p className="label-p">Milestones:</p></label><br />
        <input type="text" id="milestones" name="milestones"></input><br />

        <label><p className="label-p">Costs:</p></label><br />
        <input type="text" id="cost" name="cost"></input><br />

        <label><p className="label-p">Comments:</p></label><br />
        <textarea id="comments" placeholder="Write here..." name="comments"></textarea><br />

        <hr />

        <button type="submit" className="submit-button">Save Changes</button>

    </form>
</div>
  )
}

export default EditGoalsForm