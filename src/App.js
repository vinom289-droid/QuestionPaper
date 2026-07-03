import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Departments from "./pages/Department";
import Categories from "./pages/Categories";
import Subjects from "./pages/Subjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/dept/:id"
        element={<Departments/>}
      />
      <Route
        path="/dept/:id/:courseType"
        element={<Categories />}
      />
      <Route
        path="/dept/:id/:courseType/:category"
        element={<Subjects />}
      />
    </Routes> 
  );
}

export default App;
