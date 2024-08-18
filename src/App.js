import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;