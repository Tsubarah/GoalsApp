import { useQueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { updateGoal } from '../services/GoalsAPI'


const useEditGoal = () => {
  const queryClient = useQueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        manual: true,
      }
    }
  })
  
  return useMutation((id, data) => updateGoal(id, data), {
    onSuccess: () => {
      toast.success('Goal updated!')

      queryClient.invalidateQueries('goals')
  },
    onError:(error) => {
        console.log(error.message)
    },
  })
}

export default useEditGoal
