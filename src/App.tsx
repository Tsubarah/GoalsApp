import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import '../src/Assets/scss/App.scss'
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import GoalsPage from './Pages/GoalsPage';
import HistoryPage from './Pages/HistoryPage';
import LogoutPage from './Pages/LogoutPage';
import RequireAuth from './Components/RequireAuth';
import { useAuthContext } from './Contexts/AuthContext';
import LoadingSpinner from './Components/LoadingSpinner';

function App() {
  const { currentUser, isManager, isLoading } = useAuthContext()

  return (
    <div className="App">
      {isLoading && (
        <LoadingSpinner />
      )}

      {currentUser && (
        <>
          <Navbar />

          <Routes>
            {isManager ? (
              <Route path="/" element={<ManagerPage />} />
            )
              : <Route path="/" element={<GoalsPage />} />
            }

            <Route path="/manager" element={
              <RequireAuth>
                <ManagerPage />
              </RequireAuth>
            } />

            <Route path="/goals/:id" element={<GoalsPage />} />
            <Route path="/goals/history/:id" element={<HistoryPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </>
      )}

      <ToastContainer autoClose={2000} />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
