import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/containers/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
