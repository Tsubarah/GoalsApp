import { useAuthContext } from "../Contexts/AuthContext"
import { IUser } from '../typings/Userinterface'
import placeholder from '../Assets/Images/placeholder-image.jpeg'
import { useEffect, useState } from 'react'
import useUsers from "../services/useUsers";

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
  user: IUser,
  setUserFromUserlist: (user: IUser) => void,
  setIsActive: any,
  isActive: string,
  id: any,
}

const ListItem = ({show, setShow, user, setUserFromUserlist, isActive, setIsActive, id}: itemProps) => {
  const { currentUser } = useAuthContext()
  const { getUsersPhotoUrl } = useUsers()
  const [target, setTarget] = useState<IUser>(user)

  // const prevTarget = usePrevious(target);
  // isActive === `${id}` ? "active" : undefined + 

  const update = (e: any) => {
    if (currentUser) {
      setShow(true)
      setIsActive(e.target.id)
      console.log('e.target', e.target)
    }

    let localStorageTarget: any = window.localStorage.getItem('target')
    let prevTarget = JSON.parse(localStorageTarget)
    window.localStorage.setItem('target', JSON.stringify(user))
    setUserFromUserlist(user)

    if (prevTarget.displayName === user.displayName) {
      setShow(!show)
    }
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
        className={isActive === `${id}` ? "active" : undefined} 
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