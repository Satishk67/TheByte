import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useLocation } from "react-router-dom";

function Pagination({ relatedpage = false }) {
  const [mode, setMode] = useState("Dark");
  const handletheme = () => {
    if (mode === "Dark") {
      // make it light
      document.documentElement.style.setProperty("--textcolor", "black");
      document.documentElement.style.setProperty("--bgcolor", "white");
      setMode("Light");
    } else {
      document.documentElement.style.setProperty("--textcolor", "white");
      document.documentElement.style.setProperty("--bgcolor", "black");
      setMode("Dark");
    }
  };

  let tag = null;
  let category = null;

  const location = useLocation();
  if (location.pathname.includes("tag")) {
    tag = location.pathname.split("/").at(-1).replace("-", " ");
  }
  if (location.pathname.includes("category")) {
    category = location.pathname.split("/").at(-1).replace("-", " ");
  }

  const { page, totalpage, handlepageChange } = useContext(BlogContext);

  const next = () => {
    if (tag) handlepageChange(page + 1, tag, null);
    else if (category) handlepageChange(page + 1, null, category);
    else handlepageChange(page + 1);
  };
  const prev = () => {
    if (tag) handlepageChange(page - 1, tag, null);
    else if (category) handlepageChange(page - 1, null, category);
    else handlepageChange(page - 1);
  };

  if (relatedpage)
    return (
      <nav className="navbar">
        <button className="act-btn theme" onClick={handletheme}>
          {mode}
        </button>
      </nav>
    );
  else
    return (
      <nav className="navbar">
        <div className="navbox">
          {page > 1 && (
            <button className="act-btn" onClick={prev}>
              Previous
            </button>
          )}
          {page < totalpage && (
            <button className="act-btn" onClick={next}>
              Next
            </button>
          )}

          <button className="act-btn theme" onClick={handletheme}>
            {mode}
          </button>

          <p className="page-details">
            Page {page} of {totalpage}
          </p>
        </div>
      </nav>
    );
}

export default Pagination;
