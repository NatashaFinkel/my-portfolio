import hardSkills from "../json/hardSkills.json";
import softSkills from "../json/softSkills.json";
import CreateSkillElement from '../javaScript/CreateSkillElement';
import generateHtmlElement from "./generateHtmlElement";

export default function displaySkillData() {
    const hardSkillsContainer = document.getElementById('hard-skills-container');
    const softSkillsContainer = document.getElementById('soft-skills-container');

    hardSkills.forEach(skill => {
        CreateSkillElement(skill, hardSkillsContainer);
    });

    softSkills.forEach(skill => {
        const span = generateHtmlElement('span', 'skill');
        span.classList.add('soft-skill');
        span.appendChild(document.createTextNode(skill.title));
        softSkillsContainer.appendChild(span);
    });
} 