import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useCreateGoal from '../Hooks/useCreateGoal'
import "./GoalsForm.css"


const GoalsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm()

  const createGoalMutation = useCreateGoal()

  
  // const handleCreateSubmit = (data) => {
    
  //   const newGoal = {
  //     category: data.category,
  //     description: data.description,
  //     prio: Number(data.prio),
  //     target_reached: data.target_reached,
  //     milestones: data.milestones,
  //     cost: Number(data.cost),
  //     half_year_progress: null,
  //     isComplete: false,
  //   }

  //   // console.log(newGoal)
  //   // onSubmit(newGoal)
  // }

  // useEffect(() => {
    
  // }, [])

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
            <br />
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
            <br />
            <input 
              {...register("target_reached")}
              type="text" 
              id="doneWhen" 
            >
            </input>
            
            <br />

            <label><p className="label-p">Milestones:</p></label>
            <br />
            <input 
              {...register("milestones")}
              type="text" 
              id="milestones" 
            >
            </input>

            <br />

            <label><p className="label-p">Costs:</p></label>
            <br />
            <input 
              {...register("cost")}
              type="text" 
              id="cost" 
            >
              </input>

            <br />

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