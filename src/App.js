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
        <Route exact path="/marchseven/" element={<LandingPage />}/> 
        <Route path="/marchseven/pick" element={<Pick />}/> 
        <Route path="/marchseven/offer" element={<Offer />}/> 
        <Route path="/marchseven/last" element={<Last />}/> 
      </Routes>
    </Router> 
  );
}

export default App;
