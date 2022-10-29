import useEditGoal from "../Hooks/useEditGoal"
import useDeleteGoal from "../Hooks/useDeleteGoal";
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react'
import { checkValue } from "../utils/helpers"
import { useForm, useFieldArray } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css"

const EditGoalsForm = ({ goal, show, setShow }) => {
  const { mutate: deleteFn } = useDeleteGoal()
  const { mutate: editFn } = useEditGoal()

  const [selectedDate, setSelectedDate] = useState(goal.deadline)
  const [isComplete, setIsComplete] = useState(goal.isComplete)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
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
  
  console.log('goal', goal)

  const { fields } = useFieldArray({
    control,
    name: "reviews",
  });

  const onDeleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      deleteFn(id);
      setShow(!show)
    }
  }


  const onUpdateHandler = async (data) => {
    // console.log('GOALdeadline', goal.deadline)
    console.log('data', data)
    // console.log('DATAdeadline', data.deadline)
    const updatedGoal = {
      id: goal.id,
      creationDate: goal.creationDate,
      category: checkValue(data.category, goal.category),
      deadline: checkValue(selectedDate, goal.deadline),
      description: checkValue(data.description, goal.description),
      half_year_progress: checkValue(data.half_year_progress, goal.half_year_progress),
      isComplete: isComplete,
      milestones: checkValue(data.milestones, goal.milestones),
      prio: checkValue(data.prio, goal.prio),
      cost: checkValue(data.costs, goal.costs),
      reviews: [
        {
          type: "half_year_review",
          value: checkValue(data.half_year_review, goal.half_year_review)
        },
        {
          type: "end_of_year_review",
          value: checkValue(data.end_of_year_review, goal.end_of_year_review),
        }
      ]
    }
    // console.log('GOAL NOT UPDATED', goal)
    console.log('updated data', updatedGoal)
    // console.log('DATA', data)
    
    if (updatedGoal) {
      editFn(updatedGoal.id, updatedGoal)
    }
    // setShow(!show)
  }

  useEffect(() => {
    if (!goal) return
    setSelectedDate(goal.deadline)
  }, [goal])


  return (
    <div>
      <form onSubmit={handleSubmit(onUpdateHandler)}>

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
        <select {...register("prio", {
          valueAsNumber: true,
          })}
          id="prio"
          defaultValue={goal.prio}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <br />

        <label>
          <p className="label-p">Deadline:</p>
        </label>
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => setSelectedDate(date.toISOString())}
            selected={new Date(selectedDate)}
            minDate={new Date()}
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
          {...register("costs", {
            valueAsNumber: true,
            })}
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

        <br />

        <button 
          type="submit" 
          className="submit-button"
        >
          Save Changes
        </button>

        <button className="status-button green-button" 
          onClick={() => setIsComplete(!isComplete)}
        >
          {isComplete ? "Completed" : "Not completed"}
        </button>

        <button 
          className="delete-btn"
          onClick={() => onDeleteHandler(goal.id)}
        >
          Delete
        </button>

      </form>
    </div>
  )
}

export default EditGoalsForm