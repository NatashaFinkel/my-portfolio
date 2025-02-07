import AppNavLink from "../components/NavLink";

function HomePage() {
    return (
        <main className="l-2">
            <h1 className="l-1">Natasha Finkelsztajn.<br />
                <span className="typed">Développeur web,</span>
                <br />
                <span className="l-6">spécialiste React.js.</span>
            </h1>

            <div className="l-5">
                <span className="l-3">
                    <AppNavLink
                        navLinkDirection="/projects"
                        navLinkActiveclassname="active"
                        navLinkTxt="Mes projets"
                    />
                </span>
            </div>
        </main>
    );
}

export default HomePage;