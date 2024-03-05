import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './landing-page';
import Pick from './pick';
import Offer from './offer';
import Last from './last';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/> 
        <Route path="/pick" element={<Pick />}/> 
        <Route path="/offer" element={<Offer />}/> 
        <Route path="/last" element={<Last />}/> 
      </Routes>
    </Router> 
  );
}

export default App;
