import { NavLink, Route } from "react-router-dom";

function Post({ details }) {
  const categoryName = details.category.replaceAll(" ", "-");
  return (
    <div className="post">
      {/* topic >> by >> date >> content >> taglines */}
      <NavLink to={`/blog/${details.id}`} className="heading navlink">
        {details.title}
      </NavLink>
      <p className="author">
        By {details.author} on {"  "}
        <NavLink
          to={`category/${categoryName}`}
          className="category navlink"
        >
          <b>{details.category}</b>
        </NavLink>
      </p>
      <p className="date">On {details.date}</p>
      <p className="content">{details.content}</p>
      <div className="tag">
        {/*tags is an array so use map */}
        {details.tags.map((i, index) => {
          return (
            <NavLink
              key={index}
              to={`tag/${i.replaceAll(" ", "-")}`}
              className="tag navlink"
            >
              #{i}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
export default Post;
