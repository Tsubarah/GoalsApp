import image from "../Assets/Images/placeholder-image.jpeg"
import "./ListItem.css"

const ListItem = () => {
  return (
    <div className="user-list-item">
      <img src={image} alt="" />
      <p>John Doe</p>
    </div>
  )
}

export default ListItem