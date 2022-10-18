import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';
import ConsultantPage from './Pages/ConsultantPage';

function App() {
    return (
        <div className="App">

            <Navbar />

            <Routes>
                <Route path="/" element={<ManagerPage />} />
                <Route path="/consultant" element={<ConsultantPage />} />

            </Routes>

        </div>
    );
}

export default App;
