import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './landing-page';
import Pick from './pick';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/> 
        <Route path="/pick" element={<Pick />}/> 
      </Routes>
    </Router> 
  );
}

export default App;
