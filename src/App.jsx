import React from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import AiChatbot from './page/AiChatbot';
import Educational from './page/Educational';
import Blog from './page/Blog';


function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ពិភាក្សាជាមួយ AI" element={<AiChatbot />} />
          <Route path="/ការអប់រំ" element={<Educational />} />
          <Route path="/អត្តបទ" element={<Blog/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

