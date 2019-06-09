import React from 'react';
import Ansatt from '../../components/Ansatte/Ansatt';
import Sertifikasjoner from '../../components/Sertifikasjoner/Sertifikasjoner';
import Footer from '../../components/Footer/Footer';
import pageHeaderFallback from '../../static/images/page-header-fallback.jpg';
import { Link } from 'react-router-dom';

class Tjeneste extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tjeneste: [],
            kontaktperson: [],
            isLoading: true
        }
    }

    componentWillMount() {
        this.getTjenester();
        this.getKontaktperson();
    }

    getTjenester = () => {
        let id = window.location.pathname.split("/").pop();
        fetch(`https://naits.no/wp-json/wp/v2/tjenester/${id}`)
            .then(res => res.json())
            .then(data => this.setState({
                tjeneste: data
            }))
            .catch(err => console.log(err));
    }

    getKontaktperson = () => {
        fetch(`https://naits.no/wp-json/acf/v3/ansatte/`)
            .then(res => res.json())
            .then(data => this.setState({
                kontaktperson: data,
                isLoading: false
            }))
            .catch(err => console.log(err));
    }

    render() {
        const { tjeneste, kontaktperson } = this.state;
        console.log(tjeneste);
        console.log(kontaktperson);
        let styles = {
            header: {
                backgroundImage: `
                    linear-gradient(
                        rgba(30, 55, 153, 0.6),
                        rgba(30, 55, 153, 1)
                    ),
                    url(
                        ${!tjeneste.featured_media ? pageHeaderFallback : tjeneste.featured_media}
                    )
                `
            }
        }
        return (
            <React.Fragment>
                {this.state.isLoading
                ? ""
                :
                <div>
                    <header className="align-items-center container-fluid d-flex justify-content-center page-header" style={styles.header}></header>
                    <section className="container mt-4 mb-3">
                        <Link to="/">Hjem</Link> / <Link to="/tjenester">Tjenester</Link> / {tjeneste.title.rendered}
                    </section>
                    <section className="container page-content pb-3 pt-3">
                        <div className="row">
                            <div className="col-md-8 pb-3 pt-2">
                                <h1 className="h3">
                                    {tjeneste.title.rendered}
                                </h1>
                                <div dangerouslySetInnerHTML={{__html: tjeneste.content.rendered}}/>
                            </div>
                            <div className="col-md-4 pb-3">
                                <h3>
                                    Prat med en av oss
                                </h3>
                                <hr />
                                <div className="mb-3">
                                    <Ansatt
                                        ansattBilde=""
                                        ansattNavn="Heidi Klum"
                                        ansattAvdeling="Salg"
                                        ansattTelefon="99 88 77 66"
                                        ansattEpost="hei@hallo.no"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Sertifikasjoner />
                    <Footer />
                </div>}
                
            </React.Fragment>
        )
    }
}

export default Tjeneste;