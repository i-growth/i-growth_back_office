import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Authontication/Login';
import Admin from './Components/Admin/Admin';
import Vaccination_cart from './Components/Midwife/Vaccination/vaccines/Vaccine_home';
import Navbar from'./Components/Midwife/Navbar';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/auth' element={<Login />} />
        <Route path="/" element={<Admin />} />


        <Route path='/vcart' element={<Vaccination_cart/>}/>
        <Route path='/nav' element={<Navbar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
