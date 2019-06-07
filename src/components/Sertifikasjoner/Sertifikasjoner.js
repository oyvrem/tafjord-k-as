import React from 'react';

class Sertifikasjoner extends React.Component {
    render() {
        return(
            <section className="container-fluid bg-primary pt-5">
                <div className="container">
                    <div className="align-items-center d-flex row">
                        {this.props.sertifikasjoner.map((sertifikasjon, i) => {
                            return(
                                <div className="col-md-2 mx-auto mb-5">
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