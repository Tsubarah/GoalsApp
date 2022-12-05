export interface IUser {
  first_name?: string
  last_name?: string
  displayName: string
  id: string
  jobTitle: string
  email: string
  mobilePhone: number
  avatar?: string
  token: string
}

export interface ITeam {
  name: string
  teamId: string
}
