//import style from'./App.css';
import Login from './pages/Login.js';
import Cadastro from './pages/Cadastro.js';
import Home from './pages/Home.js';
import Perfil from './pages/Perfil.js';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'


function App() {
  return (
 <Router>
    <Link to='/Login'>Login</Link>
    <Link to='/Cadastro'>Cadastro</Link>
    <Link to='/'>Home</Link>
    <Link to='/Perfil'>Perfil</Link>
        
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/' element={<Home />} />
      <Route path='/Perfil' element={<Perfil />} />
    </Routes>
 </Router>
  );
}

export default App;
