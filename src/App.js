import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Component/pages/Context";
import Hashtag from "./Component/pages/Hashtag";
import Idea from "./Component/pages/Idea";
import Meme from "./Component/pages/Meme";
import Section from "./Component/pages/Section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Section />} />
        <Route exact path="/hashtag" element={<Hashtag/>} />
        <Route exact path="/Context" element={<Context/>} />
        <Route exact path="/idea" element={<Idea/>} />
        <Route exact path="/meme" element={<Meme/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
