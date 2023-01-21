import Login from './components/Form/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import User from './components/Account/User';

function App() {
  // const dataState = useSelector((state) => state.user);
  // initial the dispatch here

  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={<Login />} />
        <Route path='/profile' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
