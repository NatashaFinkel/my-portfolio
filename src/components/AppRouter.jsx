// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import MyJourneyPage from "../pages/MyJourneyPage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";
import ErrorPage from "../pages/ErrorPage";
import NavBar from "./NavBar";

const AppRouter = () => {
    return (
        <Router basename="/my-portfolio">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="mon-parcours" element={<MyJourneyPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
