
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Forgotpassword from './pages/forgotpassword';
import OTP from './pages/otp';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/mainPage';
import Fashion from './services/fashion'
import Law from './services/law ';
import HR from './services/hr';
import ResetPassword from './pages/passwordReset'
import Consultancy from './services/consultancy';
import Form from './services/form';


function App() 
{

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" index element={<Home  />}/>
        <Route path="/main" index element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/email/:email" index element={<ResetPassword />} />
          <Route path="/forgotpassword" index element={<Forgotpassword />} />
          <Route path="/sendmail" index element={<OTP />} /> 
          <Route path="/fashion" index element={<Fashion />} />
          <Route path="/law" index element={<Law />} />
          <Route path="/hr" index element={< HR />} />
          <Route path="/consultancy" index element={< Consultancy />} />
          <Route path="/form" index element={< Form />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
