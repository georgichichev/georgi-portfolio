import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Projects from "./components/Projects/Projects.js";
import {useState} from "react";

const renderPage = (page) =>{
    switch (page) {
        case 'Home':
            return <Home/>
        case 'Projects':
            return <Projects/>
        default:
            return <Home/>
    }
}

function App() {
    const [page, setPage] = useState('home');

    const onPageClick = (e) =>{
        setPage(e.target.textContent);
    };

    return (
        <div className="mainContainer">
            <Header onPageClick={onPageClick}/>
            <main className="mainContent">
                {renderPage(page)}
            </main>
        </div>
    );
}

export default App;
