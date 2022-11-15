import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import '../src/Assets/scss/App.scss'
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import GoalsPage from './Pages/GoalsPage';
import HistoryPage from './Pages/HistoryPage';
import { AuthPage } from './Pages/AuthPage';
import { useEffect } from 'react'
// import { useAuth } from "./services/auth";
import { useAuthContext } from './Contexts/AuthContext';
import useUsers from "./services/useUsers";
import LogoutPage from './Pages/LogoutPage';


function App() {
    const { accessToken } = useAuthContext();
    const { getUserDetails } = useUsers();

    useEffect(() => {
        if (!accessToken) {
          return;
        }
        async function getUser(accessToken: string) {
          await getUserDetails(accessToken)
        }
        getUser(accessToken)
      }, [accessToken]);
      
    return (
        <div className="App">

            <Navbar />

            <Routes>
                <Route path="/" element={<ManagerPage />} />
                <Route path="/goals/:id" element={<GoalsPage />} />
                <Route path="/goals/history/:id" element={<HistoryPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>

            <ToastContainer autoClose={2000} />
            <ReactQueryDevtools />
        </div>
    );
}

export default App;
