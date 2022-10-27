import useEditGoal from "../Hooks/useEditGoal"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Controller, useForm, useFieldArray } from "react-hook-form"

const EditGoalsForm = ({ goal }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  console.log('goal', goal)

  const { fields } = useFieldArray({
    control,
    name: "reviews",
  });

  const { mutate: editFn } = useEditGoal()

  const updateGoal = (id, data) => {
    console.log('id', id)
    editFn(id, data)
  }


  return (
    <div>
      <form onSubmit={handleSubmit(updateGoal(goal.id, goal))}>

        <label>
          <p className="label-p">Type of Goal</p>
        </label>
        <select {...register("category")}
          id="category"
          defaultValue={goal.category}
        >
          <option value="personalDevelopment">Personal Development</option>
          <option value="customerInteraction">Customer Interaction</option>
          <option value="buildingGeshdo">Building Geshdo</option>
        </select>

        <br />

        <label>
          <p className="label-p">Goal Description:</p>
        </label>
        <textarea
          {...register("description")}
          id="description"
          defaultValue={goal.description}
        ></textarea>

        <br />

        <label>
          <p className="label-p">Prio:</p>
        </label>
        <select {...register("prio")}
          id="prio"
          defaultValue={goal.prio}
        >
          <option value={Number(1)}>1</option>
          <option value={Number(2)}>2</option>
          <option value={Number(3)}>3</option>
          <option value={Number(4)}>4</option>
          <option value={Number(5)}>5</option>
        </select>

        <br />

        <label>
          <p className="label-p">Deadline:</p>
        </label>
        <Controller
          control={control}
          name="deadline"
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              defaultValue={goal.deadline}
            />
          )}
        />

        <br />

        <label>
          <p className="label-p">When is your goal done?</p>
        </label>
        <input
          {...register("target_reached")}
          type="text"
          id="doneWhen"
          defaultValue={goal.target_reached}
        ></input>

        <label>
          <p className="label-p">Milestones:</p>
        </label>
        <input
          {...register("milestones")}
          type="text"
          id="milestones"
          defaultValue={goal.milestones}
        ></input>

        <br />

        <label>
          <p className="label-p">Costs:</p></label>
        <input
          {...register("costs")}
          type="number"
          id="cost"
          defaultValue={goal.cost}
        ></input>

        <br />
        <label>
          <p className="label-p">Expected half year progress:</p>
        </label>
        <input
          {...register("half_year_progress")}
          type="text"
          id="cost"
          defaultValue={goal.half_year_progress}
        ></input>

        {fields.map((item, index) => (
          <input
            key={item.id}
            {...register(`reviews.${index}.value`)}

          />
        ))}

        <hr />

        <button 
          type="submit" 
          className="submit-button"
        >
          Save Changes
        </button>

        {/* <button className="status-button green-button" onClick={() => { }}>Completed</button> */}

        {/* <button className="delete-button red-button" onClick={() => { }}>Delete</button> */}

      </form>
    </div>
  )
}

export default EditGoalsForm