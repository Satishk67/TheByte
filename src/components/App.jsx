import { useContext, useEffect,  } from 'react'
import {BlogContext} from '../context/BlogContext'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom'
import BlogPage from '../Pages/DetailedPage'
import TagPage from '../Pages/TagPage'
import Home from '../Pages/Home'
import CategoryPage from '../Pages/CategoryPage'
import NoRoutesPage from '../Pages/NoRoutesPage'
import Header from './Header'

function App() {

  const {fetchblog} = useContext(BlogContext)
   /*
      this time will need two more variables in fetch blog to parse 
      And these variables we will get from the api link itself
      for this task we require useParams and useLocation Hooks
    */
  const [searchparam, setsearchParam] = useSearchParams(); // to select or access parameters from search url
  const location = useLocation() // to access curr location

  useEffect(
    () => {
      const page = searchparam.get("page") ?? 1; // 1 is default value
      if(location.pathname.includes("tag")){
        const tag = location.pathname.split("/").at(-1).replace("-"," ");
        fetchblog(Number(page),tag);
      }
      else if(location.pathname.includes("category")){
        const category = location.pathname.split("/").at(-1).replace("-"," ");
        fetchblog(Number(page),null,category);
      }
      else fetchblog(Number(page));
  },[location.pathname, location.search]
)

  return (
   
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* Dynamic rouiting : when anyone write anything after /blog then it will be considered as blogid [dynamic parameter] */}
      <Route path='/blog/:blogId' element={<BlogPage/>} /> 
      <Route path='/tag/:tag' element={<TagPage/>} />
      <Route path='/category/:category' element={<CategoryPage/>} />
      <Route path='/*' element={<NoRoutesPage/>}/>
    </Routes>
    
  )
}

export default App
