import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './Components/common/Navigation';
import Header from './Components/common/Header';
import Contact from './Components/Contact/contact';


function App() {
  return (
    <Router>
      <Header />
      <div className="flex h-screen pt-10">
        <div className=' w-1/3 bg-black hidden md:block'>
          <Navigation />
        </div>
        <div className='w-full md:w-2/3 h-full bg-slate-500'>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/charts" element={<>Charts</>} />
          </Routes>
        </div>
      </div >
    </Router>
  );
}

export default App;
