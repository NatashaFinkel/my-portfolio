import generateImgElement from "./generateImgElement";

export default function CreateSkillElement(skill, container) {
    const pageURL = window.location;
    const currentPage = pageURL.pathname;
    const span = document.createElement('span');

    if (!skill.imgSrc) {
        span.classList.add('modal-text-skill-span');
        span.classList.add('skill');
        span.textContent = skill.name;
    } else {
        span.classList.add('modal-skill-span');
        const img = generateImgElement(skill.imgSrc, skill.imgAlt);
        if (currentPage === "/my-portfolio/skills") {
            span.classList.add('skill');
            img.classList.add('hard-skills-img');
            span.appendChild(img);
        } else if (currentPage === "/my-portfolio/projects") {
            const img = generateImgElement(skill.imgSrc, skill.imgAlt, 'modal-skill-img');
            span.appendChild(img);
        }

        span.classList.add('tooltip-container');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = skill.name;
        span.appendChild(tooltip);
    }
    if (container) {
        container.appendChild(span);
    }

    const skills = document.querySelectorAll(".skill");
    const timeouts = [];
    skills.forEach((item, index) => {
        const timeout = setTimeout(() => {
            item.classList.add("visible");
        }, index * 400);
        timeouts.push(timeout);
    });
    return span;
}
