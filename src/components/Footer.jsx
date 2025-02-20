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
                <div className="send-mail-link media">
                    <a href="mailto:nfinkelsztajn@gmail.com" target="_blank">
                        Me contacter par mail
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
