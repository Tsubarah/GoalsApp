import { useQueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import GoalsAPI from '../services/GoalsAPI'

const useCreateGoal = () => {
  const queryClient = useQueryClient()

  return useMutation(GoalsAPI.createGoal, {
    onError: (error) => {
      console.log(error.message)
    },

    onSuccess: () => {
      toast.success('Goal created!')

      queryClient.invalidateQueries('goals')
    }
  })
}

export default useCreateGoal