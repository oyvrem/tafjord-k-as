import React from 'react';
import Navigation from '../../components/Navigation/Nagivation';
import Footer from '../../components/Footer/Footer';
import Tjeneste from '../../components/Tjeneste/Tjeneste';
import './Tjenester.scss';
import tjenesteBilde from '../../static/images/tjenester.jpg';

class Tjenester extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tjenester: [],
            sertifikasjoner: [],
            kontaktpunkt: []
        }
    }

    componentWillMount() {
        Promise.all([
            fetch('https://naits.no/wp-json/wp/v2/tjenester'),
            fetch('https://naits.no/wp-json/acf/v3/options/sertifikasjoner'),
            fetch('https://naits.no/wp-json/acf/v3/options/kontaktpunkt')
        ])
        .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
        .then(([data1, data2, data3]) => this.setState({
            tjenester: data1,
            sertifikasjoner: data2.acf.sertifikasjon,
            kontaktpunkt: data3.acf.kontaktpunkt
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
                        url(${tjenesteBilde})
                    `
            }
        }
        return(
            <React.Fragment>
                <Navigation />
                <header className="align-items-center container-fluid d-flex justify-content-center pt-5 pb-5 bg-primary page-header" style={styles.header}>
                    <h1 className="text-light">
                        Tjenester
                    </h1>
                </header>
                <section className="container mt-4 mb-3">
                    <a href="/">Hjem</a> / Tjenester
                </section>
                <section className="container pb-3 pt-4">
                    <div className="row">
                        {this.state.tjenester.map(tjeneste => {
                            return(
                                <div key={tjeneste.id} className="col-md-6 mb-4">
                                    <Tjeneste
                                        tjenesteTittel={tjeneste.title.rendered}
                                        tjenesteUtdrag={tjeneste.acf.tjeneste_utdrag}
                                        tjenesteLink={tjeneste.id}
                                    />
                                </div>
                            )
                        })}
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

export default Tjenester;