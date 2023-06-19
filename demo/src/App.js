import "./App.css";
import DataList from "./components/DataList";
import { Route, Routes } from "react-router-dom";
import DataDetails from "./components/DataDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DataList />}></Route>
        <Route path="/:details" element={<DataDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
