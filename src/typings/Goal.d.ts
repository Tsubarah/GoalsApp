export interface IGoal {
  id: string;
  creationDate: string;
  _ts: number;
  category: string,
  prio: number,
  description: string,
  target_reached: string,
  milestones: string, 
  half_year_progress: string,
  cost: number,
  isComplete: boolean,
  reviews: IReview [],
}

interface IReview {
 half_year_review: string,
 end_of_year_review: string
}