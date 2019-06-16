import React from 'react';
import Footer from '../components/Footer/Footer';

class Layout extends React.Component {

    componentWillMount() {
        window.scrollTo(
            0, 0
        );
    }

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