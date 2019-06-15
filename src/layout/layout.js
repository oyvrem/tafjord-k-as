import React from 'react';
import Sertifikasjoner from '../components/Sertifikasjoner/Sertifikasjoner';
import Footer from '../components/Footer/Footer';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;