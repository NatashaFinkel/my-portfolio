import hardSkills from "../json/hardSkills.json";
import softSkills from "../json/softSkills.json";
import CreateSkillElement from '../javaScript/CreateSkillElement';

export default function displaySkillData() {
    const hardSkillsContainer = document.getElementById('hard-skills-container');
    const softSkillsContainer = document.getElementById('soft-skills-container');

    hardSkills.forEach(skill => {
        CreateSkillElement(skill, hardSkillsContainer);
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