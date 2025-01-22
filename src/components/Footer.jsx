function Footer() {
    return (
        <footer className="contact-page-main-container">
            <section className="social-media-container">
                <div className="linkedin-link media">
                    <a
                        href="https://www.linkedin.com/in/natasha-finkelsztajn"
                        target="_blank"
                    >
                        Mon profil Linkedin
                    </a>
                </div>
                <div className="GitHub-link media">
                    <a href="https://github.com/NatashaFinkel" target="_blank">
                        Mon profil GitHub
                    </a>
                </div>
            </section>

            <section>
                <div className="contact-container" id="contact-container">
                    <p>Natasha Finkelsztajn</p>
                    <p>
                        32 rue des Rosiers, <br></br>75004 Paris.
                    </p>
                    <b>06 24 25 07 18</b>
                    <span>
                        <a href="mailto:nfinkelsztajn@gmail.com" target="_blank">
                            nfinkelsztajn@gmail.com
                        </a>
                    </span>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
