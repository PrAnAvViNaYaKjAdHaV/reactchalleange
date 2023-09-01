
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from './Routes/navigation.route';
import Home from './Routes/home.route';
import Auth from './Routes/auth/auth.route';
import BrowseHomse from './Routes/browsehomes/browsehomes.routes';
import { useContext, useEffect } from 'react';
import { AuthContext } from './store/auth.context';
function App() {
  const Authsettion = useContext(AuthContext)
  const { dispatch } = Authsettion
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('auth');
    dispatch({ type: 'Login', payload: sessionAuth });
  }, [dispatch])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Auth />} />
        <Route path='browsehomes' element={<BrowseHomse />} />
      </Route>
    </Routes>
  )
}

export default App
