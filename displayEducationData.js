import diplomas from './diplomas.json';

export default function displayEducationData() {
    const educationContainer = document.getElementById('education-container');

    diplomas.forEach(diploma => {
        const div = document.createElement('div');
        div.classList.add('row');

        const yearSpan = document.createElement('span');
        yearSpan.classList.add('year');
        yearSpan.appendChild(document.createTextNode(diploma.year));
        div.appendChild(yearSpan);

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details');
        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(diploma.title));
        detailsDiv.appendChild(h2);
        div.appendChild(detailsDiv);

        const subTitle = document.createElement('p');
        subTitle.classList.add('formation-detail');
        subTitle.appendChild(document.createTextNode(diploma.subTitle));
        detailsDiv.appendChild(subTitle);

        const school = document.createElement('p');
        school.appendChild(document.createTextNode(diploma.school));
        detailsDiv.appendChild(school);

        const description = document.createElement('p');
        description.appendChild(document.createTextNode(diploma.description));
        detailsDiv.appendChild(description);

        educationContainer.appendChild(div);
    });
}
