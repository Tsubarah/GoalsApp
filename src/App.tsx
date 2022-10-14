import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import ManagerPage from './Pages/ManagerPage';

function App() {
    return (
        <div className="App">

            <Navbar />

            <Routes>
                <Route path="/" element={<ManagerPage />} />

            </Routes>

        </div>
    );
}

export default App;
