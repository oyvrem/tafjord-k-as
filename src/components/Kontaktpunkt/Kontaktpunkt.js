import React from 'react';
import './Kontaktpunkt.scss';

class Kontaktpunkt extends React.Component {
    render() {
        return(
            <a href={this.props.kontaktpunktLink} className="text-primary">
                <div className="align-items-center contact-information__icon d-flex justify-content-center mb-3">
                    <img src={this.props.kontaktpunktIkon} aria-hidden="true" />
                </div>
                <h4 className="text-center text-uppercase font-weight-bold">
                    {this.props.kontaktpunktTittel}
                </h4>
                <p className="text-center">
                    {this.props.kontaktpunktTekst}
                </p>
            </a>
        )
    }
}

export default Kontaktpunkt;