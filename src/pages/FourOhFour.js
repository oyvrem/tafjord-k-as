import React from 'react';
import headerFrontFallback from '../static/images/header-front-fallback.jpg';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';

class FourOhFour extends React.Component {
    render() {
        return(
            <>
                <SEO
                    title="404"
                    description="Side ikke funnet"
                    imgUrl={headerFrontFallback}
                />
                <div className="bg-primary text-light" style={{
                    minHeight: '91vh',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `
                                        linear-gradient(
                                            rgba(52, 73, 159, 0.6),
                                            rgba(52, 73, 159, 1)
                                        ),
                                        url(${headerFrontFallback})`,
                    backgroundSize: 'cover'
                }}>
                    <h1 className="display-1">404</h1>
                    <h2 className="lead mb-4">Side ikke funnet!</h2>
                    <p>
                        <Link className="btn btn-lg btn-light" to="/">Tilbake til forsiden</Link>
                    </p>
                </div>
            </>
        )
    }
}

export default FourOhFour;