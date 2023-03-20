import { Component } from 'react';
// import './pages/Styles/Main.cssx';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions'
import FrequentyAskedQuestions from './pages/FrequentyAskedQuestions';
// import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import CaseStudy3 from './pages/CaseStudy3';
import CaseStudy4 from './pages/CaseStudy4';
import API from './pages/API';
import NotFound from './pages/NotFound';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ScrollToTop from './ScrollToTop';
import PartnersDigitalHealth from './pages/PartnersDigitalHealth';
import PartnersHealthcareSystems from './pages/PartnersHealthcareSystems';
import PartnersHealthPlans from './pages/PartnersHealthPlans';
import ShineAI from './pages/ShineAI';

function App() {

  return(
    <div>
      <div className="parent-container">
        <Router basename='/'>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/solutions" element={ <Solutions /> } />
            <Route path="/api" element={ <API /> } />
            <Route path="/faq" element={ <FrequentyAskedQuestions /> } />
            <Route path="/case_studies" element={ <CaseStudies /> } />
            <Route path="/case_studies/case_study_1" element={ <CaseStudy1 /> } />
            <Route path="/case_studies/case_study_2" element={ <CaseStudy2 /> } />
            <Route path="/case_studies/case_study_3" element={ <CaseStudy3 /> } />
            <Route path="/case_studies/case_study_4" element={ <CaseStudy4 /> } />
            <Route path="/digital_health" element={ <PartnersDigitalHealth /> } />
            <Route path="/healthcare_systems" element={ <PartnersHealthcareSystems /> } />
            <Route path="/health_plans" element={ <PartnersHealthPlans /> } />
            <Route path="/shineai" element={ <ShineAI /> } />
            <Route path="*" exact={true} element={ <NotFound /> } />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App;
