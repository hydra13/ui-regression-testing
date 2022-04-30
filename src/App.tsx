import {Routes, Route} from "react-router-dom";
import {Header} from "./components";
import {About, Info, Main, NotFound} from './pages';


function App() {
  return (
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
  );
}

export default App;
