import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personajes from "./Pages/Personajes";
import Principal from "./Pages/Principal";
import NotFound from "./Pages/notFound/NotFound";

import NavBar from "../src/Components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
