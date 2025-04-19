import projects from "../json/projects.json";
import NinaCarducciSkills from "../json/NinaCarducciSkills.json";
import argentBankSkills from "../json/argentBankSkills.json";
import cutePetproject from "../json/cutePetProjectSkills.json";
import wildFlowers from "../json/wildFlowersProject.json";

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

        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtnSpan = document.createElement('span');
        closeBtnSpan.id = "close-btn";
        closeBtnSpan.classList.add('close');
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

        const modalMainDiv = document.createElement('div');
        modalMainDiv.classList.add('modal-main-div');

        const pitchDiv = document.createElement('div');
        pitchDiv.classList.add('project-pitch');
        const pitchHeading = document.createElement('h3');
        pitchHeading.classList.add('modal-txt-heading');
        pitchHeading.textContent = "Le pitch :";
        pitchDiv.appendChild(pitchHeading);
        const pitchP = document.createElement('p');
        pitchP.textContent = project.pitch;
        pitchDiv.appendChild(pitchP);
        modalMainDiv.appendChild(pitchDiv);

        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('skills-div');
        const skillsHeading = document.createElement('h3');
        skillsHeading.classList.add('modal-txt-heading');
        skillsHeading.textContent = "Compétences :";
        skillsDiv.appendChild(skillsHeading);

        const container = document.createElement('div');
        container.classList.add('modal-skills-container');
        container.id = `modal-skills-container-${project.id}`;

        const skillsDataMap = {
            'modal-skills-container-ninaCarducci-project': NinaCarducciSkills,
            'modal-skills-container-ArgentBank-project': argentBankSkills,
            'modal-skills-container-cute-pet-project': cutePetproject,
            'modal-skills-container-wildFlowers-project': wildFlowers
        };

        // Si l'id du container correspond à l'un des éléments de skillsDataMap, les données associées sont affichées.
        if (skillsDataMap[container.id]) {
            skillsDataMap[container.id].forEach(skill => {
                const skillElement = document.createElement('span');
                skillElement.classList.add('modal-skill-span');
                const img = document.createElement('img');
                img.classList.add("modal-skill-img");
                img.src = skill.imgSrc;
                img.alt = skill.imgAlt;
                skillElement.appendChild(img);
                container.appendChild(skillElement);
            });
        }

        skillsDiv.appendChild(container);
        modalMainDiv.appendChild(skillsDiv);

        const linksDiv = document.createElement('div');
        linksDiv.classList.add('links-div');

        const projectLink = document.createElement('button');
        projectLink.textContent = 'Code-source';
        projectLink.classList.add('modal-link-btn');
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
            const demoLinkBtn = document.createElement('button');
            demoLinkBtn.textContent = 'Démo';
            demoLinkBtn.classList.add('modal-link-btn');
            demoLinkBtn.addEventListener('click', () => {
                window.open(project.demoLink);
            });
            linksDiv.appendChild(demoLinkBtn);
        }

        if (project.id === "ninaCarducci-project") {
            const pdfLink = document.createElement('button');
            pdfLink.textContent = 'Rapport d\'optimisation';
            pdfLink.classList.add('modal-link-btn');
            pdfLink.addEventListener('click', () => {
                window.open("https://natashafinkel.github.io/my-portfolio/assets/Rapport-optimisation.pdf");
            });
            linksDiv.appendChild(pdfLink);
        }

        if (project.additionalImgSrc !== "none") {
            const additionalImg = document.createElement('img');
            additionalImg.src = project.additionalImgSrc;
            additionalImg.alt = project.additionalImgAlt;
            additionalImg.classList.add("openClassRooms");
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