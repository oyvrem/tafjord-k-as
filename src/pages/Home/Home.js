import React from 'react';
import Layout from '../../layout/layout';
import Ansatt from '../../components/Ansatte/Ansatt';
import Loading from '../../components/Loading/Loading';
import Sertifikasjoner from '../../components/Sertifikasjoner/Sertifikasjoner';
import headerFrontFallback from '../../static/images/header-front-fallback.jpg';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forside: [],
            ansatte: [],
            isLoading: true
        };
        this.ansatteSection = React.createRef();
    }

    componentWillMount() {
        Promise.all([
            fetch('https://naits.no/wp-json/acf/v3/options/forsideinnstillinger'),
            fetch('https://naits.no/wp-json/wp/v2/ansatte')
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => this.setState({
                forside: data1.acf,
                ansatte: data2,
                isLoading: false
            }))
            .catch(err => console.log(err));
    }

    goToAnsatteSection = () => {
        window.scrollTo(
            0,
            this.ansatteSection.current.offsetTop
        );
    }

    render() {
        let styles = {
            header: {
                backgroundImage: `
                    linear-gradient(
                        rgba(52, 73, 159, 0.6),
                        rgba(52, 73, 159, 1)
                    ),
                    url(${!this.state.forside.forside_header_bilde  ? {headerFrontFallback} : this.state.forside.forside_header_bilde})
                `
            }
        }
        return (
            <React.Fragment>
                {
                    this.state.isLoading
                    ?
                        <Loading />
                    :
                        <Layout>
                            <header className="[ container-fluid bg-primary text-light pb-5 pt-5 ]" style={styles.header}>
                                <div className="[ container pt-5 pb-5 ]">
                                    <h1 className="[ h3 ]">Kommunikasjon som funker</h1>
                                    <p className="[ lead mb-4 ]">{this.state.forside.forside_header_tekst}</p>
                                    <p>
                                        <Link to="/tjenester" className="[ btn btn-lg btn-light mb-3 mr-3 ]">Se hva vi gjør</Link>
                                        <button onClick={this.goToAnsatteSection} className="[ btn btn-lg btn-outline-light mb-3 ]">Prat med en av oss</button>
                                    </p>
                                </div>
                            </header>
                            <section ref={this.ansatteSection} className="[ container-fluid pt-5 pb-5 ]">
                                <div className="[ container ]">
                                    <h2 className="[ text-center mb-4 ]">Prat med en av oss</h2>
                                    <div className="[ row ]">
                                        {this.state.ansatte.map(ansatt => {
                                            return (
                                                <div key={ansatt.id} className="[ col-md-4 mb-5 ]">
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
                            <Sertifikasjoner loadSertifikasjoner={true} />
                        </Layout>
                }
            </React.Fragment>
        )
    }
}

export default Home;