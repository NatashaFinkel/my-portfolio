import AppNavLink from "../components/NavLink";

function HomePage() {
    return (
        <main className="landing-page">
            <h1 className="landing-page-title">
                Natasha Finkelsztajn.
                <br />
                <span>Développeur web,</span>
                <br />
                <span>spécialiste React.js.</span>
            </h1>
            <span>
                <AppNavLink
                    navLinkDirection="/projects"
                    navLinkClassName="landing-page-project-page-link"
                    navLinkActiveclassname="active"
                    navLinkTxt="Mes projets"
                />
            </span>
        </main>
    );
}

export default HomePage;
