import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, AboutUs, Services, Plans, FAQs, Contact } from './pages';
import "./styles/shared.scss";
import NavigationBar from './components/containers/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
