export default function CreateSkillElement(skill, container) {
    const span = document.createElement('span');


    if (!skill.imgSrc) {
        span.classList.add('modal-text-skill-span');
        span.textContent = skill.name;
    } else {
        span.classList.add('modal-skill-span');
        const img = document.createElement('img');
        img.src = skill.imgSrc;
        img.alt = skill.imgAlt;
        img.classList.add('modal-skill-img');
        span.classList.add('tooltip-container');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = skill.name;
        span.appendChild(tooltip);
        span.appendChild(img);
    }
    if (container) {
        container.appendChild(span);
    }

    return span;
}
