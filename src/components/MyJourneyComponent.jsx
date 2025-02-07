import { useEffect } from "react";
import displayJourneyData from "../javaScript/displayJourneyData";

export default function MyJourneyComponent() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const pageURL = window.location;
            const currentPage = pageURL.pathname;

            if (currentPage === "/my-portfolio/mon-parcours") {
                displayJourneyData();
            }
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <section id="j-1"></section>
    );
}
