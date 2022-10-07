import { Bio, Frontend, Backend, Webscraping, Desktop, Chat } from "./pages";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="webscraping" element={<Webscraping />} />
          <Route path="desktop" element={<Desktop />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
