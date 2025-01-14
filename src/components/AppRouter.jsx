// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/homePage";
import ProjectsPage from "../pages/ProjectsPage";
import FormationPage from "../pages/FormationPage";
import SkillsPage from '../pages/SkillsPage';
import PastJobsPage from "../pages/PastJobsPage";
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const AppRouter = () => {
    return (
        <Router basename="/my-portfolio">
            {/* ici : <NavBar /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="projets" element={<ProjectsPage />} />
                <Route path="formation" element={<FormationPage />} />
                <Route path="/compétences" element={<SkillsPage />} />
                <Route path="/expérience-professionnelle" element={<PastJobsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;