import errorImage from "/assets/404-img.png?url.";

function ErrorPage() {
    function getRedirectUrl() {
        let redirectUrl;
        if (
            window.location.origin ===
            "https://natashafinkel.github.io/my-portfoliod+/.test"
        ) {
            redirectUrl = "https://natashafinkel.github.io/my-portfolio/";
        } else {
            redirectUrl = window.location.origin + "/my-portfolio/";
            return redirectUrl;
        }
    }

    return (
        <main>
            <h1>OOPS !</h1>
            <div className="error-txt-div">
                <p>La page que vous cherchez n'existe pas !</p>
                <p>
                    Vous pouvez retourner à la page d'accueil en cliquant
                    <button
                        onClick={() => (window.location.href = getRedirectUrl())}
                        className="get-back-btn"
                    >
                        ici
                    </button>
                </p>
            </div>

            <div>
                <img
                    src={errorImage}
                    alt="illustration ERREUR 404"
                    className="error-img"
                ></img>
            </div>
        </main>
    );
}

export default ErrorPage;
