import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Departments from "./pages/Department";
import Categories from "./pages/Categories";


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
    </Routes> 
  );
}

export default App;
