import { useQuery, useQueryClient, useMutation } from 'react-query'
import GoalsAPI from '../services/GoalsAPI'
import { IGoal } from '../typings/Goal'
import { toast } from 'react-toastify'

const useGoal = () => {
  const queryClient = useQueryClient()

  // const queryClient = useQueryClient({
  //   defaultOptions: {
  //     queries: {
  //       enabled: false,
  //       manual: true,
  //     }
  //   }
  // })


  // const getGoal = useQuery<IGoal>(['goal', id], () => GoalsAPI.getGoal(id))


  const { data: getGoals, isLoading } = useQuery<IGoal[]>('goals', GoalsAPI.getGoals, {
  })


  const createGoal = useMutation(GoalsAPI.createGoal, {
    onError: (error: { message: String}) => {
      console.log(error.message)
    },

    onSuccess: () => {
      toast.success('New goal created! 🥳')

      queryClient.invalidateQueries('goals')
    }
  })


  const editGoal = useMutation([(id: string, data: IGoal) => GoalsAPI.updateGoal(id, data), {
    onSuccess: () => {
      toast.success('Goal updated!')

      queryClient.invalidateQueries('goals')
  },
    onError:(error: { message: string }) => {
        console.log(error.message)
    },
  }])


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
    // getGoal,
    getGoals,
    createGoal,
    editGoal,
    deleteGoal,
    isLoading,
  }
}

export default useGoal