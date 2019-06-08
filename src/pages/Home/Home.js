import React from 'react';
import './Home.scss';
import Navigation from '../../components/Navigation/Nagivation';
import Footer from '../../components/Footer/Footer';
import Ansatt from '../../components/Ansatte/Ansatt';
import Sertifikasjoner from '../../components/Sertifikasjoner/Sertifikasjoner';
import headerFrontFallback from '../../static/images/header-front-fallback.jpg';

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
        let styles = {
            header: {
                backgroundImage: `
                    linear-gradient(
                        rgba(30, 55, 153, 0.6),
                        rgba(30, 55, 153, 1)
                    ),
                    url(${!this.state.forside.forside_header_bilde  ? {headerFrontFallback} : this.state.forside.forside_header_bilde})
                `
            }
        }
        return(
            <React.Fragment>
                <Navigation />
                <header className="front-page container-fluid bg-primary text-light pb-5 pt-5" style={styles.header}>
                    <div className="container pt-5 pb-5">
                        <h1 className="h3">Kommunikasjon som funker</h1>
                        <p className="lead mb-4">{this.state.forside.forside_header_tekst}</p>
                        <p>
                        <a href="#" className="btn btn-lg btn-light mb-3 mr-3">Se hva vi gjør</a>
                        <a href="#ansatte" class="btn btn-lg btn-outline-light mb-3">Prat med en av oss</a>
                        </p>
                    </div>      
                </header>
                <section id="ansatte" className="container-fluid pt-5 pb-5">
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
                <Sertifikasjoner
                    sertifikasjoner={this.state.sertifikasjoner}
                />
                <Footer
                    kontaktpunkter={this.state.kontaktpunkt}
                />
            </React.Fragment>
        )
    }
}

export default Home;