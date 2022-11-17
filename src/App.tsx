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
import { useAuthContext } from './Contexts/AuthContext';
import useUsers from "./services/useUsers";
import LogoutPage from './Pages/LogoutPage';
import RequireAuth from './Components/RequireAuth';
import LoadingSpinner from './Components/LoadingSpinner';

function App() {
  const { accessToken, currentUser } = useAuthContext();
  const { getUserDetails } = useUsers();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    getUserDetails(accessToken)
  }, [accessToken]);

  useEffect(() => {
    console.log('currentUser', currentUser)
  }, [currentUser])

  return (
    <div className="App">
      {!currentUser && (
        <LoadingSpinner />
      )}

      <Navbar />

      <Routes>
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/goals/:id" element={
          // <RequireAuth>
            <GoalsPage />
          // </RequireAuth>
        } />
        <Route path="/goals/history/:id" element={
          <RequireAuth>
            <HistoryPage />
          </RequireAuth>
        } />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>

      <ToastContainer autoClose={2000} />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
