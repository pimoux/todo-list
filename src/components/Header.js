import React from "react";
import PropTypes from 'prop-types';

export default function Header({className}) {
    return (
        <header className={className}>
            <h1>What did you plan today ?</h1>
        </header>
    )
}

Header.propTypes = {
    className: PropTypes.string
}

Header.defaultProps = {
    className: 'Header'
}