import { useQueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import GoalsAPI from '../services/GoalsAPI'


const useEditGoal = () => {
    const queryClient = useQueryClient()
  return useMutation(GoalsAPI.updateGoal, {
    onError:(error) => {
        console.log(error.message)
    },

    onSuccess: () => {
        toast.success('Goal updated!')

        queryClient.invalidateQueries('goals')
    }
  }
    
  )
}

export default useEditGoal