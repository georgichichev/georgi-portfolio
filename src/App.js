import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Projects from "./components/Projects/Projects.js";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Info from "./components/Info/Info.js";
import Contact from "./components/Contact/Contact.js";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground.js";

function App() {
    return (

        <div className="mainContainer">
            <BrowserRouter>
                <Header/>
                <main className="mainContent">
                    <ParticlesBackground/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Navigate to="/"/>}/>
                        <Route path="/info" element={<Info/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
