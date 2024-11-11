import './App.css';
import LandingPage from "./mainPages/welcomeLandingPage.js";
import { Routes, Route } from "react-router-dom";
import NoPage from './mainPages/error404page.js';
import GettingStarted from './mainPages/gettingStartedPage.js';
import LearningHome from './mainPages/learningLandingPage.js';
import ProblemsHome from './mainPages/problemsLandingPage.js';
import ContactUs from './mainPages/aboutUs.js';
import Login from './mainPages/login.js';
import Register from './mainPages/register.js';
import CppHome from './languagePages/cpp/cppGettingStarted.js';

function App() {
  return (
     <>
        {/*routes for the code*/}
       <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/problems" element={<ProblemsHome />} />
          <Route path="/learning" element={<LearningHome />} />
           <Route path="/get-started" element={<GettingStarted />} />
           <Route path="/contactUs" element={<ContactUs />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/cppHome" element={<CppHome />} />
          <Route path="*" element={<NoPage />} />
       </Routes>
    </>
 );
}


export default App;
