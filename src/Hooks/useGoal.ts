import { useQuery, useQueryClient, useMutation } from 'react-query'
import GoalsAPI from '../services/GoalsAPI'
import { useEffect, useState } from "react";
import { IGoal } from '../typings/Goal'
import { IUser } from '../typings/User'
// import { useAuth } from "../services/auth";
import { useAuthContext } from '../Contexts/AuthContext';
import useUsers from "../services/useUsers";
import { toast } from 'react-toastify'

type editGoalParams = {
  id: string,
  data: IGoal,
}

const useGoal = () => {
  const queryClient = useQueryClient()
  const { accessToken } = useAuthContext();
  const { getUserDetails } = useUsers()
  const [userData, setUserData] = useState<IUser>();

  // const queryClient = useQueryClient({
  //   defaultOptions: {
  //     queries: {
  //       enabled: false,
  //       manual: true,
  //     }
  //   }
  // })  

  // const getGoal = useQuery<IGoal>(['goal', id], () => GoalsAPI.getGoal(id))

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    
    async function getUser(accessToken: string) {
      const user = await getUserDetails(accessToken)
      if (user) {
        setUserData(user)
      }
    }
    getUser(accessToken)
  },[accessToken])

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
    // getGoal,
    // getGoals,
    createGoal,
    editGoal,
    deleteGoal,
    // isLoading,
  }
}

export default useGoal