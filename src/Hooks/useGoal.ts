import { useQueryClient, useMutation } from 'react-query'
import GoalsAPI from '../services/GoalsAPI'
import { IGoal } from '../typings/Goalinterface'
import { toast } from 'react-toastify'

type editGoalParams = {
  id: string,
  data: IGoal,
}

const useGoal = () => {
  const queryClient = useQueryClient()

//   const { data: getGoals, isLoading } = useQuery<IGoal[]>(['goals', userData?.id], GoalsAPI.getGoals, {
//   })

  const createGoal = useMutation(GoalsAPI.createGoal, {
    onError: (error: { message: String}) => {
      console.log(error.message)
    },

    onSuccess: () => {
      toast.success('New goal created! 🥳')

      queryClient.invalidateQueries('goals')
    }
  })

  const editGoal = useMutation(({ id, data } : editGoalParams) => GoalsAPI.updateGoal(id, data), {
    onSuccess: () => {
      toast.success('Goal updated!')

      queryClient.invalidateQueries('goals')
  },
    onError:(error: { message: string }) => {
        console.log(error.message)
    },
  })


  const deleteGoal = useMutation((id: string) => GoalsAPI.deleteGoal(id), {
    onSuccess() {
      toast.error("Deleting goal! 🗑")
      queryClient.invalidateQueries('goals');
    },
    onError(error) {
      console.log('error', error)
    }
  })


  return {
    createGoal,
    editGoal,
    deleteGoal,
  }
}

export default useGoal