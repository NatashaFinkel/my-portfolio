import journeyStep from "../json/myJourney.json";
import generateHtmlElement from "./generateHtmlElement";

export default function displayMyJourneyData() {
    const journeyContainer = document.getElementById('j-1');

    journeyStep.forEach(step => {
        const div = generateHtmlElement('div', 'row');
        const yearSpan = generateHtmlElement('span', 'year');
        yearSpan.appendChild(document.createTextNode(step.year || step.dates));
        div.appendChild(yearSpan);

        const detailsDiv = generateHtmlElement('div', 'details');
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(step.title || step.jobTitle));
        detailsDiv.appendChild(h2);
        div.appendChild(detailsDiv);

        const subTitle = generateHtmlElement('p', 'formation-detail');
        subTitle.appendChild(document.createTextNode(step.subTitle || step.company));
        detailsDiv.appendChild(subTitle);

        const school = document.createElement('p');
        school.appendChild(document.createTextNode(step.school || step.location));
        detailsDiv.appendChild(school);

        const description = document.createElement('p');
        description.appendChild(document.createTextNode(step.description));
        detailsDiv.appendChild(description);

        journeyContainer.appendChild(div);
    });

    setTimeout(() => {
        const rows = document.querySelectorAll(".row");
        const timeouts = [];
        rows.forEach((item, index) => {
            const timeout = setTimeout(() => {
                item.classList.add("animation-journey-page");
            }, index * 700);
            timeouts.push(timeout);
        });
    }, 300);
}
