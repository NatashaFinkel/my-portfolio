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
        projectContainer.appendChild(div);
    });
}