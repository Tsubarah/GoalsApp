import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../src/Assets/scss/App.scss'
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import GoalsPage from './Pages/GoalsPage';
import HistoryPage from './Pages/HistoryPage';

function App() {
    return (
        <div className="App">

            <Navbar />

            <Routes>
                <Route path="/" element={<ManagerPage />} />
                <Route path="/goals" element={<GoalsPage />} />
                <Route path="/history" element={<HistoryPage />} />

            </Routes>

            <ReactQueryDevtools />
        </div>
    );
}

export default App;
