import React from 'react';
import './Ansatt.scss';
import phone from './../../static/icons/phone-solid.svg';
import envelope from './../../static/icons/envelope-solid.svg';

class Ansatt extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-image">
                    <img src={this.props.ansattBilde} aria-hidden="true" />
                </div>
                <div className="card-body">
                    <h3 className="card-title h4 mb-3">
                        {this.props.ansattNavn}
                    </h3>
                    <div className="lead">
                        <p>
                            {this.props.ansattAvdeling}
                        </p>
                        <p>
                            <img src={phone} className="responsive-icon" aria-hidden="true" /> <a href="#">{this.props.ansattTelefon}</a>
                        </p>
                        <p>
                            <img src={envelope} className="responsive-icon" aria-hidden="true" /> <a href="#">{this.props.ansattEpost}</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ansatt;