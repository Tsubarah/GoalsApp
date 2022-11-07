import image from "../Assets/Images/placeholder-image.jpeg"

type itemProps = {
  show: boolean | null,
  setShow: (show: boolean) => void,
}

const ListItem = ({show, setShow}: itemProps) => {
  return (
    <li className="item">
      <button onClick={() => setShow(!show)}>
      <img src={image} alt="" />
      <h3>John Doe</h3>
      </button>
    </li>
  )
}

export default ListItem