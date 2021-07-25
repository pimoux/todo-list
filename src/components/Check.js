import React from "react";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

export default function Check({checked, onChange}) {
    return (
        checked ?
            <FontAwesomeIcon icon={faCheck} onClick={onChange} className="check-done"/> :
            <FontAwesomeIcon icon={faTimes} onClick={onChange} className="check-undone"/>

    )
}

Check.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func
}

Check.defaultProps = {
    checked: false,
}