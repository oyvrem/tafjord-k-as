import React from 'react';
import Layout from '../../layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Sertifikasjoner from '../../components/Sertifikasjoner/Sertifikasjoner';
import omBilde from '../../static/images/om.jpg';
import { Link } from 'react-router-dom';

import SEO from '../../components/SEO/SEO';

class Om extends React.Component {
    render() {
        let styles = {
            header: {
                backgroundImage: `
                        linear-gradient(
                            rgba(52, 73, 159, 0.6),
                            rgba(52, 73, 159, 1)
                        ),
                        url(${omBilde})
                    `
            }
        }
        return (
            <Layout>
                <SEO
                    title="Om"
                    description="Tafjord K, tidligere Tafjord Kommunikasjon, har over 35 års erfaring med leveranser av kommunikasjonsutstyr til bedriftskunder over hele landet. Tafjord Kommunikasjon ble stiftet i 1983 og var tidlig ute med introduksjon av mobiltelefonen og leveranser av kommunikasjonsløsninger basert på mobilteknologi."
                    imgUrl={omBilde}
                />
                <PageHeader headerStyle={styles.header}>
                    <h1 className="[ text-light ]">Om</h1>
                </PageHeader>
                <section className="[ container mt-4 mb-3 ]">
                    <Link to="/">Hjem</Link> / Om
                </section>
                <section className="[ container pb-4 pt-4 ]">
                    <div className="[ row ]">
                        <div className="[ col-md-8 ]">
                            <p>
                                Tafjord K, tidligere Tafjord Kommunikasjon, har over 35 års erfaring med leveranser av kommunikasjonsutstyr til bedriftskunder over hele landet. Tafjord Kommunikasjon ble stiftet i 1983 og var tidlig ute med introduksjon av mobiltelefonen og leveranser av kommunikasjonsløsninger basert på mobilteknologi.
                            </p>
                            <p>
                                Vi har igjennom årene utviklet oss til å bli en totalleverandørav kommunikasjonsløsninger basert på fastnett(IP-telefoni) og mobil for små og store bedrifter, radiokommunikasjon, videoløsninger, skytjenester, konsulentbistand og rådgivningstjenester innen IKT.
                            </p>
                            <p>
                                Tafjord Kommunikasjon endret navn til Tafjord K i 2016 i forbindelse med endringer på eiersiden. Vi er 6 ansatte med høy kompetanse og solid bakgrunn i bransjen.
                            </p>
                        </div>
                    </div>
                </section>
                <Sertifikasjoner loadSertifikasjoner={false} />
            </Layout>
        )
    }
}

export default Om;