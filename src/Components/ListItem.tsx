import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/Userinterface'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useEffect, useState } from 'react'
import useUsers from "../services/useUsers";

type itemProps = {
  user: IUser,
  setUserFromUserlist: (user: IUser) => void,
  setIsActive: React.Dispatch<React.SetStateAction<string>>,
  isActive: string,
  id: any,
  sidebarStatus: () => void
}

const ListItem = ({user, setUserFromUserlist, isActive, setIsActive, id, sidebarStatus}: itemProps) => {
  const [target, setTarget] = useState<IUser>(user)
  
  const { currentUser } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()

  const update = (e: any) => {
    if (currentUser) {
      if (e.target.className === "active") {
        setIsActive("")
        return
      } 
      setIsActive(e.target.id)
    }

    window.localStorage.setItem('target', JSON.stringify(user))
    setUserFromUserlist(user)
  }
  
  useEffect(() => {
    if (!currentUser) {
        return;
      }

    getUsersPhotoUrl(currentUser.token, user.id).then(imageUrl => {
      if (imageUrl) {
        setTarget({
          ...user, imageUrl: imageUrl
        })
      }
    })  
  },[])

  return (
    <li className={"item"}>
      <button 
        id={id} 
        className={isActive === `${id}` ? "active" : ""} 
        onClick={(e) => update(e)}
      >
        <img 
          src={target?.imageUrl 
                ? target.imageUrl 
                : placeholder} 
          alt="" 
        />
        <h3>{target?.displayName}</h3>
      </button>
    </li>
  )
}

export default ListItem