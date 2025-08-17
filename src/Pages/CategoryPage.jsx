import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs'
import Header from '../components/Header';
import Pagination from '../components/Pagination';

function CategoryPage(){
    const go = useNavigate()

    const loaction = useLocation()
    const category = loaction.pathname.split("/").at(-1).replace("-"," ")
    

    return(
        <>
        <Header/>
        <div className='blogs'>
            <div><button className="backbtn" onClick={() => {go(-1)}}> Home </button></div> 
            <h2 className='heading2'>Blogs on <span> {category} </span> </h2>
            <Blogs/>
        </div>
        <Pagination/>
        </>
    );
}

export default CategoryPage