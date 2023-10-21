
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Forgotpassword from './pages/forgotpassword';
import OTP from './pages/otp';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() 
{

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/forgotpassword" index element={<Forgotpassword />} />
          <Route path="/otp" index element={<OTP />} />
          <Route path="/home" index element={<Home  />} />
         
         
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
