import HardSkillComponent from '../components/HardSkillComponent';

function SkillsPage() {
    return (
        <div>
            <main>
                <h2>HardSkills</h2>
                <HardSkillComponent />
                <h2>SoftSkills</h2>
                <div className="soft-skills-container" id="soft-skills-container"></div>
            </main>
        </div>
    )
};

export default SkillsPage;