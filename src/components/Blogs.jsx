import { useContext, react } from "react";
import {BlogContext} from "../context/BlogContext";
import Loader from './Spinner'
import Post from './Post'

function Blogs(){
    
    const {post, loading} = useContext(BlogContext);

    return (
        <div className="blogs">
        {
            loading ? (
                <Loader /> 
            ):  post.length === 0 ? (
                <div> <br />No Posts </div>
            ) : (
                    post.map((i) => (<Post key = {i.id} details= {i}/>)
                )
            )
        } 
        </div>
    );
    
}

export default Blogs