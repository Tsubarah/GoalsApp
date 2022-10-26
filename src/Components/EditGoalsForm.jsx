import useEditGoal from "../Hooks/useEditGoal"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Controller, useForm, useFieldArray } from "react-hook-form"

const EditGoalsForm = ({ setShow, goal }) => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors},
        reset,
    } = useForm({
        defaultValues: {
            reviews: [
                {
                    type: "half_year_review",
                    value: "",
                },
                {
                    type: "end_of_year_review",
                    value: "",
                },
            ],
        },
    })

    const { fields } = useFieldArray({
        control,
        name: "reviews",
    });

    const editGoalMutation = useEditGoal()

    const editGoal = (data) => {
         editGoalMutation.mutate(data, goal.id)

    }

  return (
    <div>
    <form onSubmit={handleSubmit(editGoal)}>
        <h2>Edit Goal</h2>
        <label>
            <p className="label-p">Type of Goal</p>
        </label>
        <select {...register("category")} 
                id="category" defaultValue={category}>
            <option value="personalDevelopment">Personal Development</option>
            <option value="customerInteraction">Customer Interaction</option>
            <option value="buildingGeshdo">Building Geshdo</option>
        </select>
        
        <br />

        <label>
            <p className="label-p">Goal Description:</p>
        </label><br />
        <textarea {...register("description")} id="description" defaultValue={description}></textarea>
        
        <br />

        <label>
            <p className="label-p">Prio:</p>
        </label>
        <select {...register("prio")} id="prio"
        defaultValue={prio}>
            <option value={Number(1)}>1</option>
            <option value={Number(2)}>2</option>
            <option value={Number(3)}>3</option>
            <option value={Number(4)}>4</option>
            <option value={Number(5)}>5</option>
        </select>
        
        <br />

        <label>
            <p className="label-p">Deadline</p>
        </label><br />
        <Controller
                    control={control}
                    name="deadline"
                    render={({ field }) => (
                        <DatePicker
                            placeholderText="Select date"
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                            defaultValue={deadline}
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
            defaultValue={target_reached}
        ></input>

        <label>
            <p className="label-p">Milestones:</p>
        </label>
        <br />
        <input 
            {...register("milestones")} 
            type="text" 
            id="milestones"
            defaultValue={milestones}
        ></input>

            <br />

        <label>
            <p className="label-p">Costs:</p></label><br />
        <input {...register("costs")} 
                type="number" 
                id="cost"
                defaultValue={cost}
        ></input>
        
        <br />
        <label>
            <p className="label-p">Expected half year progress:</p>
        </label>
        <input
            {...register("half_year_progress")}
            type="text"
            id="cost"
            defaultValue={half_year_progress}
        ></input>

        {fields.map((item, index) => (
                    <input
                        className="hidden"
                        key={item.id}
                        {...register(`reviews.${index}.value`)}
                        
                    />
                ))}

        

        <hr />

        

        <button type="submit" className="submit-button">Save Changes</button>

        <button className="status-button">Completed</button>

        <button className="delete-button">Delete</button>

    </form>
</div>
  )
}

export default EditGoalsForm