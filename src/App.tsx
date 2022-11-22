import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import '../src/Assets/scss/App.scss'
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import GoalsPage from './Pages/GoalsPage';
import HistoryPage from './Pages/HistoryPage';
import { AuthPage } from './Pages/AuthPage';
import LogoutPage from './Pages/LogoutPage';
import RequireAuth from './Components/RequireAuth';
import { useAuthContext } from './Contexts/AuthContext';
import { useEffect } from 'react'

function App() {
  const { currentUser } = useAuthContext()

  useEffect(() => {

    // console.log('currentUser', currentUser)
  },[currentUser])

  return (
    <div className="App">
      {currentUser && (
        <>
        <Navbar />

        <Routes>
          <Route path="/manager" element={
          <RequireAuth>
            <ManagerPage />
          </RequireAuth>
          } />
          
          <Route path="/goals/:id" element={<GoalsPage />} />
          <Route path="/goals/history/:id" element={<HistoryPage />} />
          <Route path="/auth" element={<AuthPage />} />
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
