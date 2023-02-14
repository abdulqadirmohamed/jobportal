import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';

function App() {
  return (
    <div className='bg-[#f6f8fc] h-screen'>
      <Header/>
      <Hero/>
      <Home/>
    </div>
  );
}

export default App;
