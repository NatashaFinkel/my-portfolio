import DiplomaComponent from "../components/DiplomaComponent";

function FormationPage() {
  function getToPastjobsPage() {
    let redirectUrl;
    if (
      window.location.origin ===
      "https://natashafinkel.github.io/my-portfolio/formation"
    ) {
      redirectUrl = "https://natashafinkel.github.io/my-portfolio/past-jobs";
    } else {
      redirectUrl = window.location.origin + "/my-portfolio/past-jobs";
      return redirectUrl;
    }
  }

  return (
    <main>
      <h1>Diplômes</h1>
      <div className="formation-txt-div">
        <p>
          Pour savoir ce que j'ai fait entre l'obtention de mon Baccalauréat et
          mon diplôme de Développeur intégrateur web, cliquez
          <button
            onClick={() => (window.location.href = getToPastjobsPage())}
            className="get-back-btn"
          >
            ici
          </button>
        </p>
      </div>
      <DiplomaComponent />
    </main>
  );
}

export default FormationPage;
