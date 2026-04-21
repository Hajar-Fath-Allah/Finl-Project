import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; // Make sure you have a basic Home.jsx in src/pages
import FormPage from './pages/FormPage'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Step 1: Navigation Menu */}
      <nav className="navbar">
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: '20px', background: '#333', color: 'white' }}>
          <li>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/form" style={{ color: 'white', textDecoration: 'none' }}>Registration Form</Link>
          </li>
        </ul>
      </nav>

      {/* Step 1 & 7: Routing Logic */}
      <div className="content-area" style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;