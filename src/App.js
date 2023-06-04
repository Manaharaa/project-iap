import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';




export default function App() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  };