import React from 'react';
import Kontaktpunkt from '../Kontaktpunkt/Kontaktpunkt';

class Footer extends React.Component {
    render() {
        return(
            <footer className="container-fluid bg-light pt-5 pl-5 pr-5 pb-0">
                <div className="container">
                    <div className="row">
                        {this.props.kontaktpunkter.map((kontaktpunkt, i) => {
                            return(
                                <div key={i} className="col-md-4 mb-5">
                                    <Kontaktpunkt
                                        kontaktpunktLink={kontaktpunkt.kontaktpunkt_link}
                                        kontaktpunktIkon={kontaktpunkt.kontaktpunkt_ikon}
                                        kontaktpunktTittel={kontaktpunkt.kontaktpunkt_tittel}
                                        kontaktpunktTekst={kontaktpunkt.kontaktpunkt_tekst}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;