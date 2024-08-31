import './App.css';
import Login from './pages/login';
import Register from './pages/register';
<<<<<<< HEAD
import Romance from './pages/romance';
import Horror from './pages/horror';
=======
>>>>>>> dd1f65f1228e57463de8701e25779c2a5dac6332
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
<<<<<<< HEAD
          <Link to="/romance" className="button">Romance</Link>
          <Link to="/horror" className="button">Horror</Link>
          
=======
>>>>>>> dd1f65f1228e57463de8701e25779c2a5dac6332
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
          <Route path="/romance" element={< Romance/>} />
          <Route path="/horror" element={< Horror/>} />
=======
>>>>>>> dd1f65f1228e57463de8701e25779c2a5dac6332
        </Routes>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
 export default App;
=======
export default App;
>>>>>>> dd1f65f1228e57463de8701e25779c2a5dac6332
