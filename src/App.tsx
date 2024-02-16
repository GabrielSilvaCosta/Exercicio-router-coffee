// src/App.tsx

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CoffeeList from "./pages/coffe-list";
import NavBar from "./components/nav-bar";
import Coffee from "./pages/coffee";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffees" element={<CoffeeList />} />
        <Route path="/coffees/:coffee" element={ <Coffee /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
