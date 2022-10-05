import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import {useState} from "react";

function App() {
    return (
        <div className="mainContainer">
            <Header/>
            <main className="mainContent">
                {/*<Projects/>*/}
                <About/>
            </main>
        </div>
    );
}

export default App;
