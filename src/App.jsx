import { useState } from 'react'
import './styles/App.css'
import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AiChatbot from './page/AiChatbot';


function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ពិភាក្សាជាមួយ AI" element={<AiChatbot />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

