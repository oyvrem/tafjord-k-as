import React from 'react';
import Layout from '../../layout/layout';
import Ansatt from '../../components/Ansatte/Ansatt';
import PageHeader from '../../components/PageHeader/PageHeader';
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
        this.getData();
    }

    getData = () => {
        let id = window.location.pathname.split("/").pop();
        fetch(`https://naits.no/wp-json/wp/v2/tjenester/${id}`)
            .then(res => res.json())
            .then(data => this.setState({
                tjeneste: data
            }))
            .then(_ => {
                fetch(`https://naits.no/wp-json/wp/v2/ansatte/${this.state.tjeneste.acf.tjeneste_kontaktperson[0].ID}`)
                    .then(res => res.json())
                    .then(data => this.setState({
                        kontaktperson: data,
                        isLoading: false
                    }))
            })
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
            <Layout>
                {this.state.isLoading
                ? ""
                :
                <div>
                    <PageHeader headerStyle={styles.header} />
                    <section className="[ container mt-4 mb-3] ">
                        <Link to="/">Hjem</Link> / <Link to="/tjenester">Tjenester</Link> / {tjeneste.title.rendered}
                    </section>
                    <section className="[ container page-content pb-3 pt-3 ]">
                        <div className="[ row ]">
                            <div className="[ col-md-8 pb-3 pt-2 ]">
                                <h1 className="[ h3 ]">
                                    {tjeneste.title.rendered}
                                </h1>
                                <div dangerouslySetInnerHTML={{ __html: tjeneste.content.rendered }} />
                            </div>
                            <div className="[ col-md-4 pb-3 ]">
                                <h3>
                                    Prat med en av oss
                                </h3>
                                <hr />
                                <div className="[ mb-3 ]">
                                    <Ansatt
                                        ansattBilde={kontaktperson.acf.ansatt_bilde}
                                        ansattNavn={kontaktperson.title.rendered}
                                        ansattAvdeling={kontaktperson.acf.ansatt_tittel}
                                        ansattTelefon={kontaktperson.acf.ansatt_telefon}
                                        ansattEpost={kontaktperson.acf.ansatt_epostadresse}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>}
            </Layout>
        )
    }
}

export default Tjeneste;