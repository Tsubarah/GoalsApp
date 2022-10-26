import { useQueryClient, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { deleteGoal } from "../services/GoalsAPI"

const useDeleteGoal = () => {
  const queryClient = useQueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        manual: true,
      }
    }
  })

  return useMutation((id) => deleteGoal(id), {
    onSuccess() {
      toast.error("Deleting goal! 🗑")
      queryClient.invalidateQueries('goals');
    },
    onError(error) {
      console.log('error', error)
    }
  })
}

export default useDeleteGoal