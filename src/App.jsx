import './App.css'
import Portfolio from './pages/Portfolio';
import { ToastContainer} from 'react-toastify';
function App() {

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