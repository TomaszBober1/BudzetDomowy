import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Navbar from './components/Navbar';
import PRoute from "./components/PRoutes";
import History from './Pages/History';
import Newexpense from './Pages/Newexpense';
import Loan from './Pages/Loan';
import Creditworthiness from './Pages/Creditworthiness';
import Graphs from './Pages/Graphs';
import LogRoute from "./components/LogRoute";
import "./Styles.css";

function App() {
  return (
    
    <>

          <UserAuthContextProvider >
            <Navbar />
            <Routes>
              
              <Route path="/home" element={ <Home /> } />        
              <Route path='/history' exact element={<PRoute> <History/> </PRoute>} />
              <Route path='/new_expense' exact element={<PRoute> <Newexpense/> </PRoute>} />
              <Route path='/loan' exact element={<PRoute> <Loan/> </PRoute>} />
              <Route path='/creditworthiness' exact element={<PRoute> <Creditworthiness/> </PRoute>} />
              <Route path='/graphs' exact element={<PRoute> <Graphs/> </PRoute>} />
              <Route path="/login" element={<LogRoute><Login /></LogRoute>} />
              <Route path="/registration" element={<LogRoute><Registration /></LogRoute>} />
            </Routes>
          </UserAuthContextProvider>
    </>
  );
}

export default App;