import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import '../src/Assets/scss/App.scss'
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import GoalsPage from './Pages/GoalsPage';
import HistoryPage from './Pages/HistoryPage';
import { AuthPage } from './Pages/AuthPage';

function App() {
    return (
        <div className="App">

            <Navbar />

            <Routes>
                <Route path="/" element={<ManagerPage />} />
                <Route path="/goals/:id" element={<GoalsPage />} />
                <Route path="/history/:id" element={<HistoryPage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>

            <ToastContainer autoClose={2000} />
            <ReactQueryDevtools />
        </div>
    );
}

export default App;
