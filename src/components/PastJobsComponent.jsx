import React, { useEffect } from "react";
import displayPastJobsData from "../javaScript/displayPastJobsData";

const PastJobsComponent = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const pageURL = window.location;
            const currentPage = pageURL.pathname;

            if (currentPage === "/my-portfolio/past-jobs") {
                displayPastJobsData();
            }
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="past-jobs-container" id="past-jobs-container"></div>
    );
};

export default PastJobsComponent;
