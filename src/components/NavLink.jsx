// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AppNavLink({
    navLinkDirection,
    navLinkClassName,
    navLinkIconClassName,
    navLinkTxt,
}) {
    return (
        <div>
            <NavLink
                to={navLinkDirection}
                className={({ isActive }) =>
                    isActive ? "active" : `${navLinkClassName}`
                }
            >
                {({ isActive }) => (
                    <>
                        <i className={isActive ? `active ${navLinkIconClassName}` : navLinkIconClassName}></i>
                        {navLinkTxt}
                    </>
                )}
            </NavLink>
        </div>
    );
}

AppNavLink.propTypes = {
    navLinkDirection: PropTypes.string,
    navLinkClassName: PropTypes.string,
    navLinkIconClassName: PropTypes.string,
    navLinkTxt: PropTypes.string,
};

export default AppNavLink;