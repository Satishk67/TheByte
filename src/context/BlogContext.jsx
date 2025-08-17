
import { createContext, useState } from "react"
// step 1 [creation]
export const BlogContext = createContext()
const baseurl = import.meta.env.VITE_BASE_URL;

export default function BlogContextProvider({children}){
    const [loading,setLoading] = useState(false)
    const [post,setPost] = useState([])
    const [page,setPage] = useState(1)
    const [totalpage, setTotalPage] = useState(null)

    // data filling
    async function fetchblog(page=1,tag=null,category=null) {
        setLoading(true);
        let url = `${baseurl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`
        }
        try{
            const res = await fetch(url)
            const response = await res.json();

            setPage(response.page);
            setPost(response.posts);
            setTotalPage(response.totalPages);

        }
        catch(error){ console.log(`Error : ${error}`) }
        finally{ setLoading(false) }
    }

    function handlepageChange(page,tag=null,category){
        setPage(page);
        fetchblog(page,tag,category);
    }

    const data = {
        loading,post,page,totalpage,setLoading,setPage,setTotalPage,setPost,handlepageChange,fetchblog
    }

    // step 2 [providing]
    return<BlogContext.Provider value={data}>{children}</BlogContext.Provider>
    
    

}