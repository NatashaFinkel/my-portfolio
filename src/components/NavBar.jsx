import React from "react";
import AppNavLink from "./NavLink";

function NavBar() {
  //  le rendu est conditionel :
  //   si l'écran est une tablette (largeur d'écran plus grande que 768px), les liens de navigation seront des icônes; sinon ce sera du texte.

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    return (
      <div className="nav-bar-div">
        <nav>
          <ul>
            <li>
              <AppNavLink
                navLinkDirection="/"
                navLinkActiveclassname="active"
                navLinkTxt="Accueil"
                navLinkAriaLabel="lien vers la page Accueil"
              />
            </li>
            <li>
              <AppNavLink
                navLinkDirection="/projects"
                navLinkActiveclassname="active"
                navLinkTxt="Projets"
                navLinkAriaLabel="lien vers la page Projets"
              />
            </li>
            <li>
              <AppNavLink
                navLinkDirection="/skills"
                navLinkActiveclassname="active"
                navLinkTxt="Compétences"
                navLinkAriaLabel="lien vers la page Compétences"
              />
            </li>
            <li>
              <AppNavLink
                navLinkDirection="/mon-parcours"
                navLinkActiveclassname="active"
                navLinkTxt="Mon parcours"
                navLinkAriaLabel="lien vers la page Mon parcours"
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div className="nav-bar-div">
      <nav>
        <ul>
          <li>
            <AppNavLink
              navLinkDirection="/"
              navLinkActiveclassname="active"
              navLinkIconClassName="fa-solid fa-house nav-bar-icon icon-display-none"
              navLinkAriaLabel="lien vers la page Accueil"
            />
          </li>
          <li>
            <AppNavLink
              navLinkDirection="/projects"
              navLinkActiveclassname="active"
              navLinkIconClassName="fa-solid fa-star nav-bar-icon icon-display-none"
              navLinkAriaLabel="lien vers la page Projets"
            />
          </li>
          <li>
            <AppNavLink
              navLinkDirection="/skills"
              navLinkActiveclassname="active"
              navLinkIconClassName="fa-solid fa-hammer nav-bar-icon icon-display-none"
              navLinkAriaLabel="lien vers la page Compétences"
            />
          </li>
          <li>
            <AppNavLink
              navLinkDirection="/mon-parcours"
              navLinkActiveclassname="active"
              navLinkIconClassName="fa-solid fa-graduation-cap nav-bar-icon icon-display-none"
              navLinkAriaLabel="lien vers la page Mon parcours"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;