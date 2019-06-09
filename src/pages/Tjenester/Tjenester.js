import React from 'react';
import Footer from '../../components/Footer/Footer';
import Tjeneste from '../../components/Tjeneste/Tjeneste';
import './Tjenester.scss';
import tjenesteBilde from '../../static/images/tjenester.jpg';
import Sertifikasjoner from '../../components/Sertifikasjoner/Sertifikasjoner';

class Tjenester extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tjenester: []
        }
    }

componentWillMount() {
    fetch('https://naits.no/wp-json/wp/v2/tjenester')
        .then((res1) => res1.json())
        .then((data1) => this.setState({
            tjenester: data1
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
                        url(${!this.state.tjenester.featured_media ? tjenesteBilde : this.state.tjenester.featured_media})
                    `
            }
        }
        return(
            <React.Fragment>
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
                <Sertifikasjoner />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Tjenester;