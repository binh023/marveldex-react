import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Heroes from "./pages/Heroes.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import HeroDetails from "./pages/HeroDetails.jsx";
import Battle from "./pages/Battle.jsx";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/heroes" element={<Heroes />} />
                <Route path="/heroes/:id" element={<HeroDetails/>}/>
                <Route path="/sobre" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/battle" element={<Battle />} />
            </Routes>
        </>
    );
}

export default App;