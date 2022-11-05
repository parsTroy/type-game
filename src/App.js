import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Account />} />
        <Route path='/account' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
