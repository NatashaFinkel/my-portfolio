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
            <div className="landing-page-txt-div">
                <p>À notre époque où les gens de ma génération papillonnent d’un emploi à un autre, j’ai choisi de rester fidèle à mes valeurs : ces 8 ans dans la même entreprise ont été à la fois mon ancre, mon gouvernail et le vent qui souffle vers le large.</p>
                <p> Cette aventure m’a enseigné le sens des responsabilités, l’honnêteté et le respect. J’ai appris à quel point la communication bienveillante et l’écoute sont indispensables.<br></br>Mais même si la raison parle fort, le coeur lui, sait très bien ce qui lui convient.</p>
                <p>Avide de nouveaux horizons, je me suis dirigée vers le développement un peu par hasard… et j’y suis restée par passion !</p>
            </div>
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
