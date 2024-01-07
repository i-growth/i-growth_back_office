import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Authontication/Login';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/auth' element={<Login />} />
        <Route path="/" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
