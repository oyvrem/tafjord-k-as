import React from 'react';
import './Ansatt.scss';
import phone from './../../static/icons/phone-solid.svg';
import envelope from './../../static/icons/envelope-solid.svg';

const Ansatt = props => {
    return (
        <div className="employee-card">
            <div className="employee-card__image">
                <img src={props.ansattBilde} aria-hidden="true" alt={`Et bilde av ${props.ansattBilde}`} />
            </div>
            <div className="employee-card__body">
                <h3 className="employee-card__body__title card-title [ h4 mb-3 ]">
                    {props.ansattNavn}
                </h3>
                <div className="employee-card__body__text">
                    <p>
                        {props.ansattAvdeling}
                    </p>
                    <p>
                        <img src={phone} className="employee-card__body__text__icon" aria-hidden="true" alt="Telefon" /> <a href={`tel:${props.ansattTelefon}`}>{props.ansattTelefon}</a>
                    </p>
                    <p>
                        <img src={envelope} className="employee-card__body__text__icon" aria-hidden="true" alt="Konvolutt" /> <a href={`mailto:${props.ansattEpost}`}>{props.ansattEpost}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ansatt;