import pastJobs from "../json/pastJobs.json";

export default function displayPastJobsData() {
    const pastJobsContainer = document.getElementById('past-jobs-container');

    pastJobs.forEach(pastJob => {
        const div = document.createElement('div');
        div.classList.add('card');

        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(pastJob.jobTitle));
        div.appendChild(h3);

        const company = document.createElement('p');
        company.appendChild(document.createTextNode(pastJob.company));
        div.appendChild(company);

        const location = document.createElement('p');
        location.appendChild(document.createTextNode(pastJob.location));
        div.appendChild(location);

        const dates = document.createElement('p');
        dates.appendChild(document.createTextNode(pastJob.dates));
        div.appendChild(dates);

        const description = document.createElement('p');
        description.appendChild(document.createTextNode(pastJob.description));
        div.appendChild(description);

        pastJobsContainer.appendChild(div);
    });
}

