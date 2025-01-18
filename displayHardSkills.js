import hardSkills from './hardSkills.json';

export default function displayHardSkills() {
    const hardSkillsContainer = document.getElementById('hard-skills-container');
    hardSkills.forEach(skill => {
        const span = document.createElement('span');
        span.classList.add('skill');
        const img = document.createElement('img');
        img.src = skill.imgSrc;
        img.classList.add('hard-skills-img');

        span.appendChild(img);
        const txtDiv = document.createElement('div');
        txtDiv.classList.add('skill-txt');
        txtDiv.appendChild(document.createTextNode(skill.name));
        span.appendChild(txtDiv);
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = skill.name;
        span.appendChild(tooltip);
        span.classList.add('tooltip-container');

        hardSkillsContainer.appendChild(span);
    });

    const skills = document.querySelectorAll(".skill");
    const timeouts = [];
    skills.forEach((item, index) => {
        const timeout = setTimeout(() => {
            item.classList.add("visible");
        }, index * 400);
        timeouts.push(timeout);
    });
}