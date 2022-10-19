import { useQuery } from "react-query"
import GoalsAPI from "../services/GoalsAPI"

const useGoals = () => {
    return useQuery('goals', GoalsAPI.getGoals)
}

export default useGoals