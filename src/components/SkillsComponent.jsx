import React, { useEffect } from "react";
import displaySkills from "../javaScript/displaySkills";

const SkillsComponent = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const pageURL = window.location;
            const currentPage = pageURL.pathname;

            if (currentPage === "/my-portfolio/skills") {
                displaySkills();
            }
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="skills-containers">
            <div className="h2-div">
                <h2>HardSkills</h2>
            </div>
            <div
                className="container hard-skills-container"
                id="hard-skills-container"
            ></div>

            <div className="h2-div">
                <h2>SoftSkills</h2>
            </div>
            <div
                className="container soft-skills-container"
                id="soft-skills-container"
            ></div>
        </div>
    );
};

export default SkillsComponent;
