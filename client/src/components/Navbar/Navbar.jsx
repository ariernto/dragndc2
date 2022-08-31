import { Link } from "react-router-dom";
import "./Navbar.css"


export default function Navbar() {
  return (
    <div>
        <Link to={'/'} id="Logo" ><img src="https://github.com/Jacobdye99/DnDCC2/blob/main/Assets/dungeons-and-dragons-723167.png?raw=true" alt="DnD Logo" id="Logo" /></Link>
    </div>
  )
}
