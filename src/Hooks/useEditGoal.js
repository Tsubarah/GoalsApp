import { useQueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import GoalsAPI from '../services/GoalsAPI'


const useEditGoal = ( id, data ) => {
  const queryClient = useQueryClient()
  
  return useMutation(GoalsAPI.updateGoal(id, data), {
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