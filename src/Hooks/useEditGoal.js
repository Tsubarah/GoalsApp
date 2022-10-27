import { useQueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { updateGoal } from '../services/GoalsAPI'


const useEditGoal = ( id, data ) => {
  console.log('id', id)
  console.log('data', data)
  const queryClient = useQueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        manual: true,
      }
    }
  })
  
  return useMutation((id, data) => updateGoal(id, data), {
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
