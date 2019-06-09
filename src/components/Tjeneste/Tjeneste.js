import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={`/tjenester/tjeneste/${this.props.tjenesteLink}`} className="btn btn-primary text-light">Les mer</Link>
                </p>
            </div>
        )
    }
}

export default Tjeneste;