import { Routes, Route } from 'react-router-dom'
import './App.css';
import ManagerPage from './Pages/ManagerPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<ManagerPage />} />

      </Routes>

    </div>
  );
}

export default App;
