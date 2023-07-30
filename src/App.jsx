import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ostad from "./pages/Ostad";
import Test from "./pages/Test";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Routes>
        <Route path="/" element={<Ostad></Ostad>}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
      </Routes>
    </div>
  );
};

export default App;
