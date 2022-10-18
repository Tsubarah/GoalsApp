import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import GoalsPage from './Pages/GoalsPage';

function App() {
    return (
        <div className="App">

            <Navbar />

            <Routes>
                <Route path="/" element={<ManagerPage />} />
                <Route path="/goals" element={<GoalsPage />} />

            </Routes>

        </div>
    );
}

export default App;
