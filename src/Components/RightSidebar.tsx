import ConsultantProfile from "./ConsultantProfile"
import { Link } from "react-router-dom"
import { IUser } from "../typings/Userinterface"

type sidebarProps = {
  show: boolean | null
  user: IUser | undefined
}

const RightSidebar = ({ show, user }: sidebarProps) => {
  console.log("user", user)
  return (
    <div className="rightSidebar-wrapper">
      <div
        className={`${
          show === null
            ? "hidden"
            : show
            ? "slide-in-right rightSidebar"
            : "slide-out-right rightSidebar"
        }`}
      >
        <ConsultantProfile user={user} />

        <div className="consultant-buttons-container">
          <Link to={`/goals/${user?.id}`}>
            <button className="button goals-btn">Goals</button>
          </Link>

          <Link to={`/goals/history/${user?.id}`}>
            <button className="button history-btn">History</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
