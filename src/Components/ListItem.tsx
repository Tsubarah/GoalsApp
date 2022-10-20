import image from "../Assets/Images/placeholder-image.jpeg"

const ListItem = () => {
  return (
    <a href={`/goals`}>
      <div className="user-list-item">
        <img src={image} alt="" />
        <p>John Doe</p>
      </div>
    </a>
  )
}

export default ListItem