import { Link } from 'react-router-dom';

const SaveSuccessfully = (props) => {

    const ContinueClicked = () => {
        props.Continue(false)
    }

    return (<div>
        <h3>
            Save Successfully into the dataBase
        </h3>
        <div><button className="btn btn-warning" onClick={ContinueClicked}>continue</button>
            <Link className="btn btn-success" to="/">Back to Menu</Link></div>

    </div>)
}


export default SaveSuccessfully;