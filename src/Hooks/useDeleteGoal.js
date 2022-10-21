import { useQueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import GoalsAPI from '../services/GoalsAPI'

const useDeleteGoal = () => {
    const queryClient = useQueryClient()


  return useMutation(GoalsAPI.deleteGoal, {
    onError: (error) => {
        console.log(error.message)
    },

    onSuccess:() => {
        toast.success('Goal deleted!')

        queryClient.invalidateQueries('goals')
    }
  }) (
    
  )
}

export default useDeleteGoal