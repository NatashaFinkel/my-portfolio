async function displayHardSkills() {
    try {
        const response = await fetch('hardSkills.json');
        const hardSkills = await response.json();
        JSON.stringify(hardSkills, null, 2);

        const hardSkillsContainer = document.getElementById('hard-skills-container');
        hardSkills.forEach(skill => {
            const span = document.createElement('span');
            const img = document.createElement('img');
            img.src = skill.imgSrc;
            img.classList.add('hard-skills-img');
            span.appendChild(img);
            span.appendChild(document.createTextNode(skill.name));
            hardSkillsContainer.appendChild(span);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des hard skills: ', error);
    }
}

displayHardSkills();