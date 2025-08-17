import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import Loader from "../components/Spinner";
import Post from "../components/Post";
import Header from "../components/Header";
import Pagination from '../components/Pagination'

function DetailedPage() {
  const [blogs, setBlogs] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const go = useNavigate();

  const { setLoading, loading } = useContext(BlogContext);
  const blogid = location.pathname.split("/").at(-1);

  let baseurl2 = import.meta.env.VITE_RELATED_BLOGS;

  async function fetchRelatedBlog() {
    setLoading(true);
    let url = `${baseurl2}?blogId=${blogid}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      
      setBlogs(result.blog);
      setRelatedBlogs(result.relatedBlogs);
    } catch (error) {
      console.log(`Error -> ${error}`);
    }
    finally {setLoading(false)};
  }

  useEffect(() => {
    if (blogid) fetchRelatedBlog();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="detailedpage blogs">
        <div>
          <button
            className="backbtn"
            onClick={() => {
              go(-1);
            }}
          >
            Home
          </button>
        </div>

        {loading ? (
          <Loader />
        ) : blogs ? (
          <div>
            <Post details={blogs}/>
            <h2>Related Blogs</h2>
            {relatedblogs.map((x) => (
              <div key={x.id}>
                <Post details={x} />
              </div>
            ))}
          </div>
        ) : (
          <div> No Blogs </div>
        )
        }
      </div>
      <Pagination relatedpage={true}/>
    </>
  );
}
export default DetailedPage;
