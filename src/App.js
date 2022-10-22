import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import History from './Pages/History';
import Newexpense from './Pages/Newexpense';
import Loan from './Pages/Loan';
import Creditworthiness from './Pages/Creditworthiness';
import Graphs from './Pages/Graphs';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/history' exact element={<History/>} />
        <Route path='/new_expense' exact element={<Newexpense/>} />
        <Route path='/loan' exact element={<Loan/>} />
        <Route path='/creditworthiness' exact element={<Creditworthiness/>} />
        <Route path='/graphs' exact element={<Graphs/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
