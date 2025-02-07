import journeyStep from "../json/myJourney.json";

export default function displayMyJourneyData() {
    const journeyContainer = document.getElementById('j-1');

    journeyStep.forEach(step => {
        const div = document.createElement('div');
        div.classList.add('row');
        const yearSpan = document.createElement('span');
        yearSpan.classList.add('year');
        yearSpan.appendChild(document.createTextNode(step.year || step.dates));
        div.appendChild(yearSpan);

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details');

        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(step.title || step.jobTitle));
        detailsDiv.appendChild(h2);
        div.appendChild(detailsDiv);

        const subTitle = document.createElement('p');
        subTitle.classList.add('formation-detail');
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
}
