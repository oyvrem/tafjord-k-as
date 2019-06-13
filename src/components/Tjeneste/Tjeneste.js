import React from 'react';
import { Link } from 'react-router-dom';

const Tjeneste = (props) => {
    return (
        <div>
            <h3>
                {props.tjenesteTittel}
            </h3>
            <p>
                {props.tjenesteUtdrag}
            </p>
            <p>
                <Link to={`/tjenester/tjeneste/${props.tjenesteLink}`} className="[ btn btn-primary text-light ]">Les mer</Link>
            </p>
        </div>
    )
}

export default Tjeneste;