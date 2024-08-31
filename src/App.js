import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Romance from './pages/romance';
import Horror from './pages/horror';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
          <Link to="/romance" className="button">Romance</Link>
          <Link to="/horror" className="button">Horror</Link>
          
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/romance" element={< Romance/>} />
          <Route path="/horror" element={< Horror/>} />
        </Routes>
      </div>
    </Router>
  );
}

 export default App;