import React, { useEffect } from 'react';
import displayEducationData from '../../displayEducationData';

function EducationComponent() {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const pageURL = window.location;
            const currentPage = pageURL.pathname;

            if (currentPage === "/my-portfolio/formation") {
                displayEducationData();
            }
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section className="light-background">
            <div className="education-container" id="education-container">
            </div>
        </section>
    )
};

export default EducationComponent;