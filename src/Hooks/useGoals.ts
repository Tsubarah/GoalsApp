import { useQuery } from "react-query"
import GoalsAPI from "../services/GoalsAPI"
import { IGoal } from "../typings/Goal"

const useGoals = () => {
    return useQuery<IGoal []>('goals', GoalsAPI.getGoals)
}

export default useGoals