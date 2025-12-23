import Home from "./pages/Home";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Snippets from "./pages/Snippets";
import Socials from "./pages/Socials";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="bg-[#DFDFDD] h-full w-full">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/work" element={< Work />} />
        <Route path="/blogs" element={< Blogs />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/snippets" element={< Snippets />} />
        <Route path="/socials" element={< Socials />} />
      </Routes>
    </div>
  )
}

export default App
