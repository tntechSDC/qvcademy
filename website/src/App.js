import './App.css';
import LandingPage from "./pages/welcomeLandingPage.js";
import { Routes, Route } from "react-router-dom";
import NoPage from './pages/error404page.js';
import GettingStarted from './pages/gettingStartedPage.js';
import LearningHome from './pages/learningLandingPage.js';
import ProblemsHome from './pages/problemsLandingPage.js';
import ContactUs from './pages/aboutUs.js';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/problems" element={<ProblemsHome />} />
          <Route path="/learning" element={<LearningHome />} />
           <Route path="/get-started" element={<GettingStarted />} />
           <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
       </Routes>
    </>
 );
}


export default App;
