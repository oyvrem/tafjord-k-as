import React from 'react';
import { Link } from 'react-router-dom';

class Tjeneste extends React.Component {
    render() {
        return(
            <div>
                <h3>
                    {this.props.tjenesteTittel}
                </h3>
                <p>
                    {this.props.tjenesteUtdrag}
                </p>
                <p>
                    <Link to={`/tjenester/tjeneste/${this.props.tjenesteLink}`} className="[ btn btn-primary text-light ]">Les mer</Link>
                </p>
            </div>
        )
    }
}

export default Tjeneste;