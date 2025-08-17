import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useLocation } from "react-router-dom";

function Pagination(relatedpage = false) {
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

  return (
    <nav className="navbar">
      <div>
        {page > 1 && relatedpage === false && (
          <button className="act-btn" onClick={prev}>
            Previous
          </button>
        )}
        {page < totalpage && relatedpage === false && (
          <button className="act-btn" onClick={next}>
            Next
          </button>
        )}
      </div>
      <button className="act-btn theme" onClick={handletheme}>
        {mode}
      </button>
      {relatedpage === false && (
        <p className="page-details">
          Page {page} of {totalpage}
        </p>
      )}
    </nav>
  );
}

export default Pagination;
