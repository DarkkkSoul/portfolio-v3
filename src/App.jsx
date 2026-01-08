import Home from "./pages/Home";
import Snippets from "./pages/Snippets";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="bg-[#DFDFDD] h-full w-full">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/snippets" element={< Snippets />} />
      </Routes>
    </div>
  )
}

export default App
