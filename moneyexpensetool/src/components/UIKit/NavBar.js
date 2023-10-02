import { Link } from "react-router-dom";


const NavBar = ({ routesCollection }) => {



    const ListOfNavegation = routesCollection.map((data,index) => {
        return (
            <li key={index} className="nav-item">
                <Link className="nav-link text-dark" to={data.path}>{data.title}</Link>
            </li>
        )
    })



    return (
    
    <nav className="navbar navbar-expand-lg justify-content-center">
        <ul className="nav -nav">
            {ListOfNavegation}
        </ul>
    </nav>)
}

export default NavBar;