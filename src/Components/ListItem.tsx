import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from "../typings/Userinterface"
import placeholder from "../Assets/Images/placeholder-image.jpeg"
import { useEffect, useState } from "react"

type itemProps = {
  user: IUser
  setUserFromUserlist: (user: IUser) => void
  setIsActive: React.Dispatch<React.SetStateAction<string>>
  isActive: string
  id: any
}

const ListItem = ({
  user,
  setUserFromUserlist,
  isActive,
  setIsActive,
  id,
}: itemProps) => {
  const { currentUser } = useAuthContext()
  const [target, setTarget] = useState<IUser>(user)

  const update = (e: any) => {
    if (currentUser) {
      if (e.target.className === "active") {
        setIsActive("")
        return
      }
      setIsActive(e.target.id)
    }

    window.localStorage.setItem("target", JSON.stringify(user))
    setUserFromUserlist(user)
  }

  useEffect(() => {
    if (!currentUser) {
      return
    }
  }, [])

  return (
    <li className={"item"}>
      <button
        id={id}
        className={isActive === `${id}` ? "active" : ""}
        onClick={(e) => update(e)}
      >
        <img alt="" src={target?.avatar ? target.avatar : placeholder} />
        <h3>
          {target?.first_name} {target?.last_name}
        </h3>
      </button>
    </li>
  )
}

export default ListItem
