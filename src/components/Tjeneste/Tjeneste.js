import React from 'react';

class Tjeneste extends React.Component {
    render() {
        return(
            <div className="tjeneste">
                <h3 className="tjeneste__tittel">
                    {this.props.tjenesteTittel}
                </h3>
                <p className="tjeneste__utdrag">
                    {this.props.tjenesteUtdrag}
                </p>
                <p className="tjeneste__link">
                    <a href="#" className="btn btn-primary text-light">Les mer</a>
                </p>
            </div>
        )
    }
}

export default Tjeneste;