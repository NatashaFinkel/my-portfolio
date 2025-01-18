import React, { useEffect } from 'react';
import displayHardSkills from '../../displayHardSkills';

const HardSkillComponent = () => {
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
        <div className="hard-skills-container" id="hard-skills-container"></div>
    );
};

export default HardSkillComponent;