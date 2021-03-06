import React from 'react';
import Layout from '../../layout/layout';
import Tjeneste from '../../components/Tjeneste/Tjeneste';
import PageHeader from '../../components/PageHeader/PageHeader';
import Loading from '../../components/Loading/Loading';
import Sertifikasjoner from '../../components/Sertifikasjoner/Sertifikasjoner';
import tjenesteBilde from '../../static/images/tjenester.jpg';
import { Link } from 'react-router-dom';

import SEO from '../../components/SEO/SEO';

class Tjenester extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tjenester: [],
            isLoading: true
        }
    }

componentWillMount() {
    fetch('https://naits.no/wp-json/wp/v2/tjenester')
        .then((res1) => res1.json())
        .then((data1) => this.setState({
            tjenester: data1,
            isLoading: false
        }));
}

    
    render() {
        let styles = {
            header: {
                backgroundImage: `
                        linear-gradient(
                            rgba(52, 73, 159, 0.6),
                            rgba(52, 73, 159, 1)
                        ),
                        url(${!this.state.tjenester.featured_media ? tjenesteBilde : this.state.tjenester.featured_media})
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
                            <SEO
                                title="Tjenester"
                                description="Vi tilbyr de fleste tjenestene innenfor telekommunikasjon"
                                imgUrl={tjenesteBilde}
                            />
                            <PageHeader headerStyle={styles.header}>
                                <h1 className="[ text-light ]">
                                    Tjenester
                                </h1>
                            </PageHeader>
                            <section className="[ container mt-4 mb-3 ]">
                                <Link to="/">Hjem</Link> / Tjenester
                            </section>
                            <section className="[ container pb-3 pt-4 ]">
                                <div className="[ row ]">
                                    {this.state.tjenester.map(tjeneste => {
                                        return (
                                            <div key={tjeneste.id} className="[ col-md-6 mb-4 ]">
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
                            <Sertifikasjoner loadSertifikasjoner={false} />
                        </Layout>
                }
            </React.Fragment>
        )
    }
}

export default Tjenester;