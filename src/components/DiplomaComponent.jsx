import React, { useEffect } from "react";
import displayDiplomaData from "../javaScript/displayDiplomaData";

function DiplomaComponent() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const pageURL = window.location;
            const currentPage = pageURL.pathname;

            if (currentPage === "/my-portfolio/formation") {
                displayDiplomaData();
            }
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section>
            <div className="education-container" id="education-container"></div>
        </section>
    );
}

export default DiplomaComponent;
