import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';

function App() {
  return (
    <div className='bg-[#f6f8fc] h-screen'>
      <BrowserRouter>
      <Header/>
      <Hero/>
      <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
