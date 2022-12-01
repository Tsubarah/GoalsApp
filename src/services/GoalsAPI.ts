import { IGoal } from '../typings/Goalinterface'
/**
 * Service for communicating with the json-server backend
 */
import axios from 'axios'
 
axios.defaults.baseURL = 'https://api.goalsnow.geshdo.dev/'

/**
  * GET an endpoint
  * @param {string} endpoint
  * @returns Promise
*/

const FAKE_DELAY = 1500

const get = async (endpoint: string) => {
  const res = await axios.get(endpoint)

  // FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY))

  return res.data
}

/**
 * Get all goals
 */
export const getGoals = async (uid: string | undefined):Promise<IGoal[]> => {
//   const [_key, { id }] = queryKey
  console.log('uid', uid)
  return get(`/goals/${uid}`)
}


/**
 * Get single goal
 */
export const getGoal = (id: string) => {
  return get(`/goals/${id}`)
}


/**
 * Create a new Goal
 * @param data Object with properties and values for the new goal
 */
const createGoal = async (data: IGoal) => {
  const res = await axios.post('/goals/create', data)
  console.log(data)
  return res.data
}


/**
 * Update a goal
 * @param goal_id Goal to update
 * @param data Data to update goal with
 */
export const updateGoal = async (goal_id: string, data: IGoal) => {
  console.log('data in API', goal_id, data)
  const res = await axios.put(`/goals/${goal_id}`, data)
  return res.data
}


/**
 * Delete a goal
 * @param goal_id goal to delete
 */
export const deleteGoal = async (goal_id: string) => {
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