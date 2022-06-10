
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RocketerPage from './pages/rocketerpage';
import FormPage from './pages/formPage';
import SubmitPage from './pages/submitPage';
import ThanksPage from './pages/thanksPage';
import SubmittedApplicationsPage from './pages/submittedApplicationsPage';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<RocketerPage />}/>
          <Route path='/form' element={<FormPage />} />
          <Route path='/submit' element={<SubmitPage />}/>
          <Route path='/thanks-page' element={<ThanksPage />}/>
          <Route path='/submitted-applications' element={<SubmittedApplicationsPage />}/>
        </Routes>
      </Router>
  );
}

export default App;
