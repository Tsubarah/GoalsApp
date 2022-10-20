import { useForm, useFieldArray } from 'react-hook-form'
import useCreateGoal from '../Hooks/useCreateGoal'
import "./GoalsForm.css"

const GoalsForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      reviews: [
        { half_year_review: "" },
        { end_of_year_review: "" },
      ]
    }
  })

  const { fields } = useFieldArray({
    control,
    name: "reviews",
  })

  const createGoalMutation = useCreateGoal()

  return (
    <div>
        <form onSubmit={handleSubmit(createGoalMutation.mutate)}>

        <label><p className="label-p">Type of Goal</p></label>
            <select 
              {...register("category")}
              id="category" 
            >
                <option value="personalDevelopment">Personal Development</option>
                <option value="customerInteraction">Customer Interaction</option>
                <option value="buildingGeshdo">Building Geshdo</option>
            </select><br />

            <label><p className="label-p">Goal Description:</p></label>
            <textarea
              {...register("description")}
              id="description" 
              placeholder="Describe your goal here..." 
            >
            </textarea>
            
            <br />

            <label><p className="label-p">Prio:</p></label>
            <select 
              {...register("prio")}
              id="prio"
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <br />

            <label><p className="label-p">When is your goal done?</p></label>
            <input 
              {...register("target_reached")}
              type="text" 
              id="doneWhen" 
            >
            </input>
            
            <br />

            <label><p className="label-p">Milestones:</p></label>
            <input 
              {...register("milestones")}
              type="text" 
              id="milestones" 
            >
            </input>

            <br />

            <label><p className="label-p">Costs:</p></label>
            <input 
              {...register("cost")}
              type="text" 
              id="cost" 
            >
              </input>

            <br />

            <label><p className="label-p">Expected half year progress:</p></label>
            <input 
              {...register("half_year_progress")}
              type="text" 
              id="cost" 
            >
              </input>

            <br />

            {fields.map((item, index) => (
              <input 
                className="hidden"
                key={item.id}
                {...register(`reviews.${index}.value`)}
              />
            ))}
            {/* <input 
              {...register("half_year_review")}
              type="text" 
              id="cost" 
              className="hidden"
            >
              </input>

            <br />

            <input 
              {...register("end_of_year_review")}
              type="text" 
              id="cost" 
              className="hidden"
            >
              </input> */}


            <br />

            <button 
              type="submit" 
              className="submit-button"
            >
              Create
            </button>

        </form>
    </div>
  )
}

export default GoalsForm