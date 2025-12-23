import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";


function App() {
  return (
    <div className="bg-[#DFDFDD] h-full w-full">
      <Routes>
        <Route path="/" element={< Home />} />
      </Routes>
    </div>
  )
}

export default App
