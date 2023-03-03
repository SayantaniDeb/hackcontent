import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavComponent from "./Component/pages/Navbar";
import Section from "./Component/pages/Section";



function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Section/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
