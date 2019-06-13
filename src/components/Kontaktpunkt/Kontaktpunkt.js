import React from 'react';
import './Kontaktpunkt.scss';

class Kontaktpunkt extends React.Component {
    render() {
        return(
            <a href={this.props.kontaktpunktLink} className="kontaktpunkt">
                <div className="kontaktpunkt__ikon [ align-items-center d-flex justify-content-center mb-3 ]">
                    <img src={this.props.kontaktpunktIkon} aria-hidden="true" />
                </div>
                <h4 className="kontaktpunkt__tittel">
                    {this.props.kontaktpunktTittel}
                </h4>
                <p className="kontaktpunkt__tekst">
                    {this.props.kontaktpunktTekst}
                </p>
            </a>
        )
    }
}

export default Kontaktpunkt;