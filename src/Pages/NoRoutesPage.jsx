import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

function NoRoutesPage () {
    const go = useNavigate()
    return (
        <>
        <Header/>
        <div className="blogs">
            <div className="no-route">
            <h3>No Proper Route</h3>
            <button className="backbtn" onClick={() => go(-1)}>Home</button>
            </div>
        </div>
        <Pagination/>
        </>
    );
}

export default NoRoutesPage