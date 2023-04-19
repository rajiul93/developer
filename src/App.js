import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
