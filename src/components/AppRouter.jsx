// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import ProjectsPage from "../pages/ProjectsPage";
import FormationPage from "../pages/FormationPage";
import SkillsPage from "../pages/SkillsPage";
import PastJobsPage from "../pages/PastJobsPage";
import ErrorPage from "../pages/ErrorPage";
import NavBar from "./NavBar";

const AppRouter = () => {
    return (
        <Router basename="/my-portfolio">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="formation" element={<FormationPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/past-jobs" element={<PastJobsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
