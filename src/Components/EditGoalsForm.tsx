import useGoal from '../Hooks/useGoal'
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react'
import { useForm, useFieldArray } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css"
import { IGoal } from "../typings/Goal";

type EditProps = {
  goal: IGoal,
  show: boolean,
  setShow: (show: boolean) => void,
  // completedSwipe: boolean | string,
  // setCompletedSwipe: (completedSwipe: boolean | string) => void,
}

const EditGoalsForm = ({ goal, show, setShow }: EditProps) => {
  const { deleteGoal, editGoal } = useGoal();

  const [selectedDate, setSelectedDate] = useState(goal.deadline)
  const [isComplete, setIsComplete] = useState(goal.isComplete)
  const [completedSwipe, setCompletedSwipe] = useState<boolean | string>(false)

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IGoal>({
    defaultValues: {
        reviews: [
            {
                type: "half_year_review",
                name: "Half year review",
                value: "",
            },
            {
                type: "end_of_year_review",
                name: "End of year review",
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

  const onDeleteHandler = (id: string) => {
    if (window.confirm('Are you sure?')) {
      deleteGoal.mutate(id);
      setShow(!show)
    }
  }

  const onUpdateHandler = async (data: IGoal) => {
    console.log('BEFORE completedSwipe', completedSwipe)
    console.log('isComplete?', isComplete)
    if (isComplete) {
      setCompletedSwipe(goal.id)
    }
  

    const updatedGoal: IGoal = {
      ...data,
      id: goal.id,
      creationDate: goal.creationDate,
      isComplete: isComplete,
      deadline: selectedDate,
    }
    console.log('data', data)
    console.log('updatedGoal', updatedGoal)
    editGoal.mutate({ id: updatedGoal.id, data: updatedGoal })
    setShow(!show)
  }


  useEffect(() => {
    if (!goal) return
    setSelectedDate(goal.deadline)
    setCompletedSwipe(goal.id)
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
            onChange={(date) => setSelectedDate(date ? date.toISOString(): "")}
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
          {...register("cost", {
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
          <div key={index}>
            <label>
              <p className="label-p">{item.name}</p>
            </label>
            <input
              key={item.id}
              {...register(`reviews.${index}.value`)}
            />
          </div>
        ))}

        <br />

        <button 
          type="submit" 
          className="submit-button"
        >
          Save Changes
        </button>

        <button
          type="button"
          className="status-button green-button" 
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