import image from "../Assets/Images/placeholder-image.jpeg"

const ListItem = () => {
  return (
    <a href={`/goals`}>
      <div className="user-list-item">
        <img src={image} alt="" />
        <h3>John Doe</h3>
      </div>
    </a>
  )
}

export default ListItem