import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import "./GoalsForm.css"


const GoalsForm = ({ onSubmit }) => {

  // input states
  const [newCategory, setNewCategory] = useState('')
  const [newPrio, setNewPrio] = useState(null)
  const [newTargetReached, setNewTargetReached] = useState('')
  const [newMilestones, setNewMilestones] = useState('')
  const [newHalfYearProgress, setNewHalfYearProgress] = useState('')
  const [newCost, setNewCost] = useState(null)
  const [newDescription, setNewDescription] = useState('')

  // input references
  // const newCategoryRef = useRef()
  // const newPrioRef = useRef()
  // const newTargetReachedRef = useRef()
  // const milestonesRef = useRef()
  // const newHalfYearProgressRef = useRef()
  // const newCostRef = useRef()
  // const newDescriptionRef = useRef()

  const {
    register,
    handleSubmit,
    reset,
  } = useForm()

  const handleCreateSubmit = (e) => {
    e.preventDefault()
    
    const newGoal = {
      category: newCategory,
      prio: newPrio,
      target_reached: newTargetReached,
      milestones: newMilestones,
      half_year_progress: newHalfYearProgress,
      cost: newCost,
      description: newDescription,
      isComplete: false,
    }


    onSubmit(newGoal)
  }

  return (
    <div>
        <form onSubmit={handleSubmit(handleCreateSubmit)}>

        <label><p className="label-p">Type of Goal</p></label>
            <select 
              {...register("category")}
              defaultValue={"Choose a type"}
              name="category" 
              id="category" 
              onChange={e => setNewCategory(e.target.value)} 
              value={newCategory}
            >
                <option value="personalDevelopment">Personal Development</option>
                <option value="customerInteraction">Customer Interaction</option>
                <option value="buildingGeshdo">Building Geshdo</option>
            </select><br />

            <label><p className="label-p">Goal Description:</p></label>
            <br />
            <textarea
              {...register("description")}
              id="goalName" 
              placeholder="Describe your goal here..." 
              name="goalName">
            </textarea>
            
            <br />

            <label><p className="label-p">Prio:</p></label>
            <select 
              name="prio" 
              id="prio"
              onChange={(e) => setNewPrio(e.target.value)}  
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <br />

            <label><p className="label-p">When is your goal done?</p></label>
            <br />
            <input 
              {...register("target_reached")}
              type="text" 
              id="doneWhen" 
              name="doneWhen">
            </input>
            
            <br />

            <label><p className="label-p">Milestones:</p></label>
            <br />
            <input 
              type="text" 
              id="milestones" 
              name="milestones">
            </input>

            <br />

            <label><p className="label-p">Costs:</p></label>
            <br />
            <input type="text" id="cost" name="cost"></input>

            <br />

            <label><p className="label-p">Comments:</p></label>
            <br />
            <textarea id="comments" placeholder="Write here..." name="comments"></textarea>

            <br />

            <hr />

            <button type="submit" className="submit-button">Create</button>

        </form>
    </div>
  )
}

export default GoalsForm