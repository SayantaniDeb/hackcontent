import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hashtag from "./Component/pages/Hashtag";
import Section from "./Component/pages/Section";
import ChatEngine2 from "./Container/ChatApp/ChatEngine2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Section />} />
        <Route exact path="/hashtag" element={<Hashtag />} />
        <Route exact path="/chatapp" element={<ChatEngine2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
