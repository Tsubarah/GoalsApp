import { useQueryClient, useMutation } from 'react-query'
import GoalsAPI from "../services/GoalsAPI"

const useDeleteGoal = ({ id }) => {
  const queryClient = useQueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        manual: true,
      }
    }
  })

  return useMutation('goals', GoalsAPI.deleteGoal(id), {
    onError: (error) => {
      console.log(error.message)
    },

    onSuccess: () => {
      console.log("Goal deleted")

      queryClient.invalidateQueries('goals')
    }
  })
}

export default useDeleteGoal