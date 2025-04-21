import projects from "../json/projects.json";
import generateHtmlElement from "./generateHtmlElement";
import generateImgElement from "./generateImgElement";
import ninaCarducciFeatures from "../json/ninaCarducciFeatures.json";
import argentBankFeatures from "../json/argentBankFeatures.json";
import cutePetprojectFeatures from "../json/cutePetProjectFeatures.json";
import wildFlowersProjectFeatures from "../json/wildFlowersProjectFeatures.json";
import ninaCarducciSkills from "../json/ninaCarducciSkills.json";
import argentBankSkills from "../json/argentBankSkills.json";
import cutePetprojectSkills from "../json/cutePetProjectSkills.json";
import wildFlowersProjectSkills from "../json/wildFlowersProjectSkills.json";

export default function displayProjectsData() {
    const projectContainer = document.getElementById('projectPage-main-container');

    projects.forEach(project => {
        const div = generateHtmlElement('div', 'project-container', project.id);

        const projectImg = generateImgElement(project.src, project.alt, 'project-img');
        div.appendChild(projectImg);

        const modal = generateHtmlElement('div', 'modal');
        const modalContent = generateHtmlElement('div', 'modal-content');

        const closeBtnSpan = generateHtmlElement('span', 'close', 'close-btn');
        closeBtnSpan.innerHTML = '&times;';
        modalContent.appendChild(closeBtnSpan);

        closeBtnSpan.addEventListener('click', (event) => {
            event.stopPropagation();
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(project.title));
        modalContent.appendChild(h2);

        const modalMainDiv = generateHtmlElement('div', 'modal-main-div');
        const pitchDiv = generateHtmlElement('div', 'project-pitch');
        const firstcontainer = generateHtmlElement('div', 'first-container');

        const pitchHeading = generateHtmlElement('h3', 'modal-txt-heading');
        pitchHeading.textContent = "Le pitch :";
        pitchDiv.appendChild(pitchHeading);

        const pitchP = document.createElement('p');
        pitchP.textContent = project.pitch;
        pitchDiv.appendChild(pitchP);
        firstcontainer.appendChild(pitchDiv);

        const featuresDiv = generateHtmlElement('div', 'features-div');
        const featuresHeading = generateHtmlElement('h3', 'modal-txt-heading');
        featuresHeading.textContent = "Fonctionnalités :";
        featuresDiv.appendChild(featuresHeading);

        const featuresContainer = generateHtmlElement('div', 'features-container', `features-container-${project.id}`);

        const featuresDataMap = {
            'features-container-ninaCarducci-project': ninaCarducciFeatures,
            'features-container-ArgentBank-project': argentBankFeatures,
            'features-container-cute-pet-project': cutePetprojectFeatures,
            'features-container-wildFlowers-project': wildFlowersProjectFeatures
        };

        if (featuresDataMap[featuresContainer.id]) {
            const ul = document.createElement('ul');
            featuresDataMap[featuresContainer.id].forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature.feature || "Fonctionnalité inconnue";
                ul.appendChild(li);
            });
            featuresContainer.appendChild(ul);
        }
        featuresDiv.appendChild(featuresContainer);

        const skillsDiv = generateHtmlElement('div', 'skills-div');
        const skillsHeading = generateHtmlElement('h3', 'modal-txt-heading');
        skillsHeading.textContent = "Stack :";
        skillsDiv.appendChild(skillsHeading);

        const container = generateHtmlElement('div', 'modal-skills-container', `modal-skills-container-${project.id}`);
        const skillsDataMap = {
            'modal-skills-container-ninaCarducci-project': ninaCarducciSkills,
            'modal-skills-container-ArgentBank-project': argentBankSkills,
            'modal-skills-container-cute-pet-project': cutePetprojectSkills,
            'modal-skills-container-wildFlowers-project': wildFlowersProjectSkills
        };

        // Si l'id du container correspond à l'un des éléments de skillsDataMap, les données associées sont affichées.
        if (skillsDataMap[container.id]) {
            skillsDataMap[container.id].forEach(skill => {
                const skillElement = document.createElement('span');

                if (container.id === "modal-skills-container-ninaCarducci-project") {
                    skillElement.classList.add('modal-text-skill-span');
                    skillElement.textContent = skill.name;
                    container.appendChild(skillElement);
                } else {
                    skillElement.classList.add('modal-skill-span');
                    const img = generateImgElement(skill.imgSrc, skill.imgAlt, 'modal-skill-img');
                    skillElement.appendChild(img);
                    container.appendChild(skillElement);
                }
            });
        }

        skillsDiv.appendChild(container);
        firstcontainer.appendChild(featuresDiv);
        modalMainDiv.appendChild(firstcontainer);
        modalMainDiv.appendChild(skillsDiv);

        const linksDiv = generateHtmlElement('div', 'links-div');
        const projectLink = generateHtmlElement('button', 'modal-link-btn');
        projectLink.textContent = 'Code-source';

        projectLink.addEventListener('click', () => {
            window.open(project.codeLink);
        });

        linksDiv.appendChild(projectLink);

        div.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        modalMainDiv.appendChild(linksDiv);
        modalContent.appendChild(modalMainDiv);
        modal.appendChild(modalContent);
        div.appendChild(modal);
        projectContainer.appendChild(div);

        if (project.demoLink !== "none") {
            const demoLinkBtn = generateHtmlElement('button', 'modal-link-btn');
            demoLinkBtn.textContent = 'Démo';
            demoLinkBtn.addEventListener('click', () => {
                window.open(project.demoLink);
            });
            linksDiv.appendChild(demoLinkBtn);
        }

        if (project.id === "ninaCarducci-project") {
            const pdfLink = generateHtmlElement('button', 'modal-link-btn');
            pdfLink.textContent = 'Rapport d\'optimisation';
            pdfLink.addEventListener('click', () => {
                window.open("https://natashafinkel.github.io/my-portfolio/assets/Rapport-optimisation.pdf");
            });
            linksDiv.appendChild(pdfLink);
        }

        if (project.additionalImgSrc !== "none") {
            const additionalImg = generateImgElement(project.additionalImgSrc, project.additionalImgAlt, 'openClassRooms');
            div.appendChild(additionalImg);
        } else {
            return;
        }
    });

    setTimeout(() => {
        const projectContainers = document.querySelectorAll(".project-container");
        const timeouts = [];
        projectContainers.forEach((item, index) => {
            const timeout = setTimeout(() => {
                item.classList.add("animation-project-page");
            }, index * 500);
            timeouts.push(timeout);
        });
    }, 100);
}