import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

function TagPage(){
    const go = useNavigate();

    const loaction = useLocation();
    const tag = loaction.pathname.split("/").at(-1).replace("-"," ")
    

    return(
        <>
            <Header/>
            <div className='blogs'>    
                <button className="backbtn" onClick={()=>{go(-1)}}>Home</button>
                <h2 className='heading2'>Blogs Tagged <span># {tag} </span> </h2>
                <Blogs/>
            </div>
            <Pagination/>
        </>
    );
}

export default TagPage