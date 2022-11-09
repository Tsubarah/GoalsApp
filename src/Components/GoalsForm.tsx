import { Controller, useForm, useFieldArray } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import useGoal from '../Hooks/useGoal'
import { IGoal } from '../typings/Goal'
import { useParams} from 'react-router-dom'

type FormProps = {
  show: boolean,
  setShow: (show: boolean) => void;
}

const GoalsForm:Function = ({ setShow, show}: FormProps) => {
  const { id } = useParams()
  const { createGoal } = useGoal();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
  });

  const { fields } = useFieldArray({
    control,
    name: "reviews",
  });

  const create = (data: IGoal ) => {
    data = {...data, uid: id}
    console.log('data', data)
    createGoal.mutate(data)
    reset()
    setShow(!show)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(create)}>
        <div className="top-section">

          <div className="left">
            <label>
              <p className="label-p">Type of Goal:</p>
            </label>
            <select {...register("category")}
              id="category"
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
            <select {...register("prio", {
              valueAsNumber: true,
              })}
              id="prio"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>

        <div className="middle-section">
          <div className="left">
            <label>
              <p className="label-p">Deadline:</p>
            </label>
            <Controller
              control={control}
              name="deadline"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  dateFormat="dd-MM-yyyy"
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date) => { field.onChange(date) }}
                  minDate={new Date()}
                  required
                />
              )}
            />
          </div>
          
          <div className="right">
            <label>
              <p className="label-p">Costs:</p></label>
            <input
              {...register("cost", {
                valueAsNumber: true,
                })}
              type="number"
              id="cost"
            ></input>
          </div>
        </div>

        <label>
          <p className="label-p">Goal Description:</p>
        </label>
        <textarea
          {...register("description")}
          id="description"
          placeholder="Describe your goal here..."
        ></textarea>

        <label>
          <p className="label-p">When is your goal done?</p>
        </label>
        <input
          {...register("target_reached")}
          type="text"
          id="doneWhen"
        ></input>

        <label>
          <p className="label-p">Milestones:</p>
        </label>
        <input
          {...register("milestones")}
          type="text"
          id="milestones"
        ></input>

        <label>
          <p className="label-p">Expected half year progress:</p>
        </label>
        <input
          {...register("half_year_progress")}
          type="text"
          id="half-year-progress"
        ></input>

        {fields.map((item, index) => (
          <input
            type="hidden"
            key={item.id}
            {...register(`reviews.${index}.value`)}
          />
        ))}

        <button type="submit" className="button submit-btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default GoalsForm;