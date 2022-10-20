/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'
 
axios.defaults.baseURL = 'http://localhost:7071/api'

/**
  * GET an endpoint
  * @param {string} endpoint
  * @returns Promise
*/

const get = async (endpoint) => {
  const res = await axios.get(endpoint)

  // FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY))

  return res.data
}

/**
 * Get all goals
 */
const getGoals = () => {
  return get('/goals')
}


/**
 * Get single goal
 */
const getGoal = (id) => {
  return get(`/goals/${id}`)
}


/**
 * Create a new Goal
 * @param data Object with properties and values for the new goal
 */
const createGoal = async (data) => {
  const res = await axios.post('/goals', data, {
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  return res.data
}


/**
 * Update a goal
 * @param goal_id Goal to update
 * @param data Data to update goal with
 */
const updateGoal = async (goal_id, data) => {
  const res = await axios.patch(`/goals/${goal_id}`, data)
  return res.data
}


/**
 * Delete a goal
 * @param goal_id goal to delete
 */
const deleteGoal = async (goal_id) => {
  const res = await axios.delete(`/goals/${goal_id}`)
  return res.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getGoals,
	getGoal,
	createGoal,
	updateGoal,
	deleteGoal,
}