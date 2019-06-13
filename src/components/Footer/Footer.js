import React from 'react';
import Kontaktpunkt from '../Kontaktpunkt/Kontaktpunkt';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kontaktpunkt: []
        }
    }

    componentWillMount() {
        fetch('https://naits.no/wp-json/acf/v3/options/kontaktpunkt')
            .then(res => res.json())
            .then(data => this.setState({
                kontaktpunkt: data.acf.kontaktpunkt
            }))
            .catch(err => console.log(err));
    }

    render() {
        return(
            <footer className="[ container-fluid bg-light pt-5 pl-5 pr-5 pb-0 ]">
                <div className="[ container ]">
                    <div className="[ row ]">
                        {this.state.kontaktpunkt.map((kontaktpunkt, i) => {
                            return(
                                <div key={i} className="[ col-md-4 mb-5 ]">
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