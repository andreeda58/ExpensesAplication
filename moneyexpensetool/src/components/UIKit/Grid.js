
import './Grid.css';

const Grid = (props) => {
    return (
        <div className={`Grid ${props.className}`} >
            {props.children}
        </div>
    )
}

export const Main = (props) => {
    return <Grid {...props} className="main" />
}

export const Sidebar = (props) => {
    return <Grid {...props} className="sidebar" />
}

export default Grid;