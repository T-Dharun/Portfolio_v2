import './App.css'
import Portfolio from './pages/Portfolio';
import { ToastContainer} from 'react-toastify';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once:true, 
    });
  }, []);
  return (
    <>
      <div className="App">
        <ToastContainer />
        <Portfolio/>  
      </div>
    </>
  )
}

export default App;