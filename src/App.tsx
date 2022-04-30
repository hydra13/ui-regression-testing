import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./components";
import {About, Info, Main, NotFound} from './pages';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
