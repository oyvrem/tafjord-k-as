import React from 'react';
import './Ansatt.scss';
import phone from './../../static/icons/phone-solid.svg';
import envelope from './../../static/icons/envelope-solid.svg';

class Ansatt extends React.Component {
    render() {
        return(
            <div className="employee-card">
                <div className="employee-card__image">
                    <img src={this.props.ansattBilde} aria-hidden="true" />
                </div>
                <div className="employee-card__body">
                    <h3 className="employee-card__body__title card-title h4 mb-3">
                        {this.props.ansattNavn}
                    </h3>
                    <div className="employee-card__body__text lead">
                        <p>
                            {this.props.ansattAvdeling}
                        </p>
                        <p>
                            <img src={phone} className="employee-card__body__text__icon responsive-icon" aria-hidden="true" /> <a href="#">{this.props.ansattTelefon}</a>
                        </p>
                        <p>
                            <img src={envelope} className="employee-card__body__text__icon" aria-hidden="true" /> <a href="#">{this.props.ansattEpost}</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ansatt;