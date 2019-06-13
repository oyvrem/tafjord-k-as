import React from 'react';
import './Kontaktpunkt.scss';

const Kontaktpunkt = (props) => {
    return (
        <a href={props.kontaktpunktLink} className="kontaktpunkt">
            <div className="kontaktpunkt__ikon [ align-items-center d-flex justify-content-center mb-3 ]">
                <img src={props.kontaktpunktIkon} aria-hidden="true" alt={`Ikon for ${props.kontaktpunktTittel}`} />
            </div>
            <h4 className="kontaktpunkt__tittel">
                {props.kontaktpunktTittel}
            </h4>
            <p className="kontaktpunkt__tekst">
                {props.kontaktpunktTekst}
            </p>
        </a>
    )
}

export default Kontaktpunkt;