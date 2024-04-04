
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import  Login  from './pages/Login.jsx';
import  Register  from './pages/Register.jsx';
import  Dashboard  from './pages/Dashboard.jsx';
import  Blog  from './pages/Blog.jsx';
import  Esami  from './pages/Esami.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    
   

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/esami" element={<Esami />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>

</BrowserRouter>

  )
}

export default App
