export default function CreateSkillElement(skill, container) {
    const pageURL = window.location;
    const currentPage = pageURL.pathname;
    const span = document.createElement('span');
    const img = document.createElement('img');

    if (!skill.imgSrc) {
        span.classList.add('modal-text-skill-span');
        span.textContent = skill.name;
    } else {
        span.classList.add('modal-skill-span');
        img.src = skill.imgSrc;
        img.alt = skill.imgAlt;
        span.classList.add('tooltip-container');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = skill.name;
        span.appendChild(tooltip);
        span.appendChild(img);
    }
    if (currentPage === "/my-portfolio/skills") {
        span.classList.add('skill');
        img.classList.add('hard-skills-img');
    } else if (currentPage === "/my-portfolio/projects") {
        img.classList.add('modal-skill-img');
    }
    if (container) {
        container.appendChild(span);
    }
    return span;
}
