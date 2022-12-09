import useGoal from "../Hooks/useGoal"
import DatePicker from "react-datepicker"
import { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import "react-datepicker/dist/react-datepicker.css"
import { IGoal } from "../typings/Goalinterface"
import { useAuthContext } from "../Contexts/AuthContext"
import { useParams } from "react-router-dom"

type EditProps = {
  goal: IGoal
  goals: IGoal[]
  show: boolean
  setShow: (show: boolean) => void
  handleSwipe: (id: string) => void
  setGoals: any
}

const EditGoalsForm = ({
  goal,
  goals,
  show,
  setShow,
  handleSwipe,
  setGoals
}: EditProps) => {
  const { isManager } = useAuthContext()
  const { deleteGoal, editGoal } = useGoal()
  const { id } = useParams()

  const [selectedDate, setSelectedDate] = useState(goal.deadline)
  const [isComplete, setIsComplete] = useState(goal.isComplete)

  console.log("goal", goal)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGoal>({
    defaultValues: {
      id: goal.id,
      creationDate: goal.creationDate,
      reviews: [
        {
          type: "half_year_review",
          name: "Half year review",
          value: goal?.reviews[0].value || "",
        },
        {
          type: "end_of_year_review",
          name: "End of year review",
          value: goal?.reviews[0].value || "",
        },
      ],
    },
  })

  const { fields } = useFieldArray({
    control,
    name: "reviews",
  })

  const onDeleteHandler = (goalId: string) => {
    const index = goals.findIndex((object) => {
      return object.id === goalId
    })
    goals.splice(index, 1)
    if (window.confirm("Are you sure you want to delete this goal?")) {
      if (id) {
        localStorage.setItem(id, JSON.stringify(goals))
      }
      console.log("goals", goals)
      // deleteGoal.mutate(id);
      setShow(!show)
    }
    setGoals([...goals])
  }

  const onUpdateHandler = async (data: IGoal) => {
    setShow(!show)
    const updatedGoal: IGoal = {
      ...data,
      uid: goal.uid,
      isComplete: isComplete,
      deadline: selectedDate,
    }
    if (updatedGoal.isComplete) {
      handleSwipe(updatedGoal.id)
    }
    console.log("updatedGoal", updatedGoal)

    setTimeout(() => {
      // editGoal.mutate({ id: updatedGoal.id, data: updatedGoal })
      if (id) {
        const index = goals.findIndex((object) => {
          return object.id === data.id
        })
        goals.splice(index, 1, updatedGoal)
        // localStorage.setItem(id, JSON.stringify(goals))
        setGoals([...goals])
    }
}, 1000)
  }

  useEffect(() => {}, [goals])

  useEffect(() => {
    if (!goal) return
    setSelectedDate(goal.deadline)
  }, [goal])

  return (
    <div>
      <form onSubmit={handleSubmit(onUpdateHandler)}>
        <div className="top-section">
          <div className="left">
            <label>
              <p className="label-p">Type of Goal:</p>
            </label>
            <select
              {...register("category")}
              id="category"
              defaultValue={goal.category}
            >
              <option value="personalDevelopment">Personal Development</option>
              <option value="customerInteraction">Customer Interaction</option>
              <option value="buildingGeshdo">Building Geshdo</option>
            </select>
          </div>

          <div className="right">
            <label>
              <p className="label-p">Prio:</p>
            </label>
            <select
              {...register("prio", {
                valueAsNumber: true,
              })}
              id="prio"
              defaultValue={goal.prio}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
        </div>

        <div className="middle-section">
          <div className="left">
            <label>
              <p className="label-p">Deadline:</p>
            </label>
            <DatePicker
              placeholderText="Select date"
              onChange={(date) =>
                setSelectedDate(date ? date.toISOString() : "")
              }
              selected={new Date(selectedDate)}
              minDate={new Date()}
            />
          </div>

          <div className="right">
            <label>
              <p className="label-p">Costs:</p>
            </label>
            <input
              {...register("cost", {
                valueAsNumber: true,
              })}
              type="number"
              id="cost"
              defaultValue={goal.cost}
            ></input>
          </div>
        </div>

        <label>
          <p className="label-p">Goal Description:</p>
        </label>
        <textarea
          {...register("description")}
          id="description"
          defaultValue={goal.description}
        ></textarea>

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
              <p className="label-p">{item.name}:</p>
            </label>
            <input key={item.id} {...register(`reviews.${index}.value`)} />
          </div>
        ))}

        {isManager ? (
          <div className="buttons-container">
            <div>
              <button type="submit" className="button submit-btn">
                Save Changes
              </button>
            </div>

            <div>
              <button
                type="button"
                className="button status-btn"
                onClick={() => setIsComplete(!isComplete)}
              >
                {isComplete ? "Completed" : "Not completed"}
              </button>
            </div>

            <div>
              <button
                className="button delete-btn"
                onClick={() => onDeleteHandler(goal.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  )
}

export default EditGoalsForm
