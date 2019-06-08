import React from 'react';

class Sertifikasjoner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sertifikasjoner: []
        }
    }

    componentWillMount() {
        fetch('https://naits.no/wp-json/acf/v3/options/sertifikasjoner')
            .then(res => res.json())
            .then(data => this.setState({
                sertifikasjoner: data.acf.sertifikasjon
            }))
            .catch(err => console.log(err));
    }

    render() {
        return(
            <section className="container-fluid bg-primary pt-5">
                <div className="container">
                    <div className="align-items-center d-flex row">
                        {this.state.sertifikasjoner.map((sertifikasjon, i) => {
                            return(
                                <div key={i} className="col-md-2 mx-auto mb-5">
                                    <img className="img-fluid" src={sertifikasjon.sertifikasjon_bilde} aria-hidden="true" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Sertifikasjoner;