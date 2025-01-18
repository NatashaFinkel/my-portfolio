// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function AppNavLink({
    navLinkDirection,
    navLinkClassName,
    navLinkActiveclassname,
    navLinkIconClassName,
    navLinkTxt,
}) {
    return (
        <div>
            <NavLink
                to={navLinkDirection}
                className={navLinkClassName}
                activeclassname={navLinkActiveclassname}
            >
                {navLinkTxt}
                <i className={navLinkIconClassName}></i>
            </NavLink>
        </div>
    );
}

AppNavLink.propTypes = {
    navLinkDirection: PropTypes.string,
    navLinkClassName: PropTypes.string,
    navLinkActiveclassname: PropTypes.string,
    navLinkIconClassName: PropTypes.string,
    navLinkTxt: PropTypes.string,
};
export default AppNavLink;
