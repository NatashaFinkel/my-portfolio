import hardSkills from "../json/hardSkills.json";
import softSkills from "../json/softSkills.json";

export default function displaySkillData() {
    const hardSkillsContainer = document.getElementById('hard-skills-container');
    const softSkillsContainer = document.getElementById('soft-skills-container');

    hardSkills.forEach(skill => {
        const span = document.createElement('span');
        span.classList.add('skill');
        const img = document.createElement('img');
        img.src = skill.imgSrc;
        img.alt = skill.imgAlt;
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

    softSkills.forEach(skill => {
        const span = document.createElement('span');
        span.classList.add('skill');
        span.classList.add('soft-skill');
        span.appendChild(document.createTextNode(skill.title));
        softSkillsContainer.appendChild(span);
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