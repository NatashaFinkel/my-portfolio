import errorImage from '/assets/404-img.png?url.';

function ErrorPage() {
    return (
        <main>
            <h1>OOPS !</h1>
            <span className='error-txt-div'>
                <p >La page que vous cherchez n'existe pas !</p>
            </span>

            <div className='error-txt-div'>
                <p>Vous pouvez retourner à la page d'accueil en cliquant <button onClick={() => window.location.href = "/"} className="get-back-btn">ici</button></p>
            </div>

            <div>
                <img src={errorImage} alt="illustration ERREUR 404" className="error-img"></img>
            </div>
        </main >
    )
};

export default ErrorPage;