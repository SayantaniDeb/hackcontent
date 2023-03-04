import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hashtag from "./Component/pages/Hashtag";
import Section from "./Component/pages/Section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Section />} />
        <Route exact path="/hashtag" element={<Hashtag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
