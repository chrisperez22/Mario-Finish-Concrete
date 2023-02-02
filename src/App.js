import "./styles.css";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Gallery from "./routes/Gallery";
import Services from "./routes/Services";
import About from "./routes/About";


const App = () => {
  return (
    <>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/services" element={<Services />}/>
  <Route path="/gallery" element={<Gallery />}/>
  <Route path="/contact" element={<Contact />}/>
  </Routes>


    </>

    
  );
}

export default App;
