import './Rows.css';

const Rows = (props) => {
    return (
        <div className="Rows">
            {props.children}
        </div>
    )
}

export default Rows;