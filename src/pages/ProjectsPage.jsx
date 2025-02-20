import { useEffect } from "react";
import displayProjectsData from "../javaScript/displayProjectData";

function ProjectsPage() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const pageURL = window.location;
            const currentPage = pageURL.pathname;

            if (currentPage === "/my-portfolio/projects") {
                displayProjectsData();
            }
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <main>
            <h1>Mes projets</h1>
            <div
                className="projectPage-main-container"
                id="projectPage-main-container"
            ></div>
        </main>
    );
}

export default ProjectsPage;
