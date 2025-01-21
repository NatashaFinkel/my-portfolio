import React, { useEffect } from 'react';
import displayHardSkills from '../../displayHardSkills';

const SkillsComponent = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const pageURL = window.location;
            const currentPage = pageURL.pathname;

            if (currentPage === "/my-portfolio/skills") {
                displayHardSkills();
            }
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='skills-containers'>
            <h2>HardSkills</h2>
            <div className="hard-skills-container" id="hard-skills-container"></div>

            <h2>SoftSkills</h2>
            <div className="soft-skills-container" id="soft-skills-container"></div>
        </div>
    );
};

export default SkillsComponent;