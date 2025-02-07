import projects from "../json/projects.json";

export default function displayProjectsData() {
    const projectContainer = document.getElementById('projectPage-main-container');

    projects.forEach(project => {
        const div = document.createElement('div');
        div.classList.add('project-container');
        div.id = project.id;

        const projectImg = document.createElement('img');
        projectImg.src = project.src;
        projectImg.alt = project.alt;
        projectImg.classList.add('project-img');
        div.appendChild(projectImg);

        const additionalImg = document.createElement('img');
        additionalImg.src = project.additionalImgSrc;
        additionalImg.alt = project.additionalImgAlt;
        additionalImg.classList.add(project.additionalImgClassName);

        if (project.additionalImgSrc != undefined) {
            div.appendChild(additionalImg);
        }

        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtnSpan = document.createElement('span');
        closeBtnSpan.id = "close-btn";
        closeBtnSpan.classList.add('close');
        closeBtnSpan.innerHTML = '&times;';

        // FIXME :  ça ne marche pas ! 
        /* closeBtnSpan.addEventListener('click', () => {
                modal.style.display = 'none';
            }); */
        modalContent.appendChild(closeBtnSpan);

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(project.title));
        modalContent.appendChild(h3);

        const modalMainDiv = document.createElement('div');
        modalMainDiv.classList.add('modal-main-div');

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('project-description');
        const descriptionHeading = document.createElement('p');
        descriptionHeading.classList.add('modal-txt-heading');
        descriptionHeading.textContent = "Objectif :";
        descriptionDiv.appendChild(descriptionHeading);
        const descriptionP = document.createElement('p');
        descriptionP.textContent = project.description;
        descriptionDiv.appendChild(descriptionP);
        modalMainDiv.appendChild(descriptionDiv);

        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('skills-div');
        const skillsHeading = document.createElement('p');
        skillsHeading.classList.add('modal-txt-heading');
        skillsHeading.textContent = "Compétences :";
        skillsDiv.appendChild(skillsHeading);
        const skillsP = document.createElement('p');
        skillsP.textContent = project.skills;
        skillsDiv.appendChild(skillsP);
        modalMainDiv.appendChild(skillsDiv);

        const linksDiv = document.createElement('div');
        linksDiv.classList.add('links-div');

        const demoLink = document.createElement('button');
        demoLink.textContent = 'Démo';
        demoLink.classList.add('modal-link-btn');
        demoLink.addEventListener('click', () => {
            window.open(project.demoLink);
        });

        if (project.demoLink != undefined) {
            linksDiv.appendChild(demoLink);
        }

        const projectLink = document.createElement('button');
        projectLink.textContent = 'Code-source';
        projectLink.classList.add('modal-link-btn');
        projectLink.addEventListener('click', () => {
            window.open(project.codeLink);
        });

        linksDiv.appendChild(projectLink);

        const pdfLink = document.createElement('button');
        pdfLink.textContent = 'Rapport d\'optimisation';
        pdfLink.classList.add('modal-link-btn');
        pdfLink.addEventListener('click', () => {
            window.open(project.pdfLink);
        });

        if (project.pdfLink != undefined) {
            linksDiv.appendChild(pdfLink);
        }

        div.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        modalMainDiv.appendChild(linksDiv);
        modalContent.appendChild(modalMainDiv);
        modal.appendChild(modalContent);
        div.appendChild(modal);
        projectContainer.appendChild(div);
    });
}