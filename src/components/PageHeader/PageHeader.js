import React from 'react';
import './PageHeader.scss';

const PageHeader = (props) => {
    return(
        <header className="[ align-items-center container-fluid d-flex justify-content-center ] page-header" style={props.headerStyle}>
            {!props.children ? '' : props.children}
        </header>
    )
}

export default PageHeader;