import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import BlogContextProvider from "./context/BlogContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </BrowserRouter>
);
