export interface IGoal {
  uid?: string
  id: string
  creationDate?: string
  _ts?: number
  category: string
  prio: number
  description: string
  target_reached: string
  milestones: string
  half_year_progress: string
  cost?: number
  isComplete?: boolean
  deadline: any
  reviews: IReview[]
}

interface IReview {
  type: string
  name: string
  value: string
}
