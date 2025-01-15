import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import About from './components/About';
import Join from './components/Join';
import './App.css';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const myRef = useRef(null);
    return (
        <BrowserRouter>
            <div className="App">
                <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                <div className="main-container">
                    <Sidebar isOpen={isSidebarOpen} />
                    <div className={`content-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                        <Routes>
                            <Route path="/" element={<Content />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/topics" element={<Content />} />
                            <Route path="/join" element={<Join />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
