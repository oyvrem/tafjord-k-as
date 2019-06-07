import React from 'react';
import Navigation from '../../components/Navigation/Nagivation';
import Footer from '../../components/Footer/Footer';
import Ansatt from '../../components/Ansatte/Ansatt';
import Kontaktpunkt from '../../components/Kontaktpunkt/Kontaktpunkt';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forside: [],
            ansatte: [],
            sertifikasjoner: [],
            kontaktpunkt: []
        }
    }

    componentWillMount() {
        Promise.all([
            fetch('https://naits.no/wp-json/acf/v3/options/forsideinnstillinger'),
            fetch('https://naits.no/wp-json/wp/v2/ansatte'),
            fetch('https://naits.no/wp-json/acf/v3/options/sertifikasjoner'),
            fetch('https://naits.no/wp-json/acf/v3/options/kontaktpunkt')
        ])
        .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
        .then(([data1, data2, data3, data4]) => this.setState({
            forside: data1.acf,
            ansatte: data2,
            sertifikasjoner: data3.acf.sertifikasjon,
            kontaktpunkt: data4.acf.kontaktpunkt
        }));
    }

    render() {
        return(
            <React.Fragment>
                <Navigation />
                <header className="container-fluid bg-primary text-light">
                    <div className="container pt-5 pb-5">
                        <h1 className="h3">Kommunikasjon som funker</h1>
                        <p className="lead mb-4">{this.state.forside.forside_header_tekst}</p>
                        <p>
                        <a href="#" className="btn btn-lg btn-light mb-3 mr-3">Se hva vi gjør</a>
                        <button onClick={this.goToAnsatte} className="btn btn-lg btn-outline-light mb-3">Prat med en av oss</button>
                        </p>
                    </div>      
                </header>
                <section ref={this.ansatteSeksjon} className="container-fluid pt-5 pb-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Prat med en av oss</h2>
                        <div className="row">
                            {this.state.ansatte.map(ansatt => {
                                return(
                                    <div key={ansatt.id} className="col-md-4 mb-5">
                                        <Ansatt
                                            ansattBilde={ansatt.acf.ansatt_bilde}
                                            ansattNavn={ansatt.title.rendered}
                                            ansattAvdeling={ansatt.acf.ansatt_tittel}
                                            ansattTelefon={ansatt.acf.ansatt_telefon}
                                            ansattEpost={ansatt.acf.ansatt_epostadresse}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className="container-fluid bg-primary pt-5">
                    <div className="container">
                        <div className="align-items-center d-flex row">
                        {/* THIS IS FOR THE CERTIFICATIONS */}
                        </div>
                    </div>
                </section>
                <Footer
                    kontaktpunkter={this.state.kontaktpunkt}
                />
            </React.Fragment>
        )
    }
}

export default Home;