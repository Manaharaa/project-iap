import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import Apps from './components/Dashboard';




export default function App() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/homepage" element={<HomePage/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/LoginPage" element={<LoginPage/>} />
      <Route path="/dashboardApp" element={<Apps/>} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  };