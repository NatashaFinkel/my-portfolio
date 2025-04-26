import projects from "../json/projects.json";
import hardSkills from '../json/hardSkills.json';
import generateHtmlElement from "./generateHtmlElement";
import generateImgElement from "./generateImgElement";
import ninaCarducciFeatures from "../json/ninaCarducciFeatures.json";
import argentBankFeatures from "../json/argentBankFeatures.json";
import cutePetprojectFeatures from "../json/cutePetProjectFeatures.json";
import wildFlowersProjectFeatures from "../json/wildFlowersProjectFeatures.json";
import CreateSkillElement from '../javaScript/CreateSkillElement';

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
        pitchHeading.textContent = "Pitch";
        pitchDiv.appendChild(pitchHeading);

        const pitchP = document.createElement('p');
        pitchP.textContent = project.pitch;
        pitchDiv.appendChild(pitchP);
        firstcontainer.appendChild(pitchDiv);

        const featuresDiv = generateHtmlElement('div', 'features-div');
        const featuresHeading = generateHtmlElement('h3', 'modal-txt-heading');
        featuresHeading.textContent = "Fonctionnalités";
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
        skillsHeading.textContent = "Stack";
        skillsDiv.appendChild(skillsHeading);

        const container = generateHtmlElement('div', 'modal-skills-container', `modal-skills-container-${project.id}`);

        skillsDiv.appendChild(container);

        switch (container.id) {
            case 'modal-skills-container-ninaCarducci-project':
                CreateSkillElement(hardSkills[14], container);
                CreateSkillElement(hardSkills[17], container);
                CreateSkillElement(hardSkills[18], container);
                CreateSkillElement(hardSkills[19], container);
                break;
            case 'modal-skills-container-ArgentBank-project':
                CreateSkillElement(hardSkills[5], container);
                CreateSkillElement(hardSkills[9], container);
                CreateSkillElement(hardSkills[7], container);
                CreateSkillElement(hardSkills[8], container);
                CreateSkillElement(hardSkills[16], container);
                break;
            case 'modal-skills-container-cute-pet-project':
                CreateSkillElement(hardSkills[4], container);
                CreateSkillElement(hardSkills[6], container);
                CreateSkillElement(hardSkills[10], container);
                CreateSkillElement(hardSkills[12], container);
                CreateSkillElement(hardSkills[13], container);
                break;
            case
                'modal-skills-container-wildFlowers-project':
                CreateSkillElement(hardSkills[5], container);
                CreateSkillElement(hardSkills[9], container);
                CreateSkillElement(hardSkills[7], container);
                CreateSkillElement(hardSkills[6], container);
                CreateSkillElement(hardSkills[10], container);
                CreateSkillElement(hardSkills[12], container);
                CreateSkillElement(hardSkills[13], container);
                break;
            default:
        }

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

    const modalSkillSpan = document.querySelectorAll(".modal-skill-span");
    const timeouts = [];
    modalSkillSpan.forEach((item, index) => {
        const timeout = setTimeout(() => {
            item.classList.add("visible");
        }, index * 400);
        timeouts.push(timeout);
    });
}