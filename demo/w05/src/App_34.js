import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import BlogsStaticPage_34 from "./pages/BlogsStaticPage_34.js";
import BlogsLocalJsonPage_34 from "./pages/BlogsLocalJsonPage_34.js";
import BlogsNodeServerPage_34 from "./pages/BlogsNodeServerPage_34.js";
import HomePage_34 from "./pages/HomePage_34";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card_34" element={<BlogsStaticPage_34 />}></Route>
        <Route
          path="/card2_local_34"
          element={<BlogsLocalJsonPage_34 />}
        ></Route>
        <Route
          path="/card2_node_34"
          element={<BlogsNodeServerPage_34 />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
