import React from 'react';

import { Helmet } from 'react-helmet';

class SEO extends React.Component {
    render() {
        const { title, description, imgUrl } = this.props;
        return(
            <Helmet>
                <meta name="robots" content="index, follow" />

                <meta charset="utf-8" />
                <title>{`${title} | Tafjord Kommunikasjon`}</title>

                <meta name="description" content={description} />
                <meta name="image" content={imgUrl} />

                <meta itemprop="name" content={title} />
                <meta itemprop="description" content={description} />
                <meta itemprop="image" content={imgUrl} />

                <meta name="og:title" content={title} />
                <meta name="og:description" content={description} />
                <meta name="og:image" content={imgUrl} />
                <meta name="og:site_name" content="Tafjord Kommunikasjon" />
                <meta name="og:locale" content="nb_NO" />
                <meta name="og:type" content="website" />
            </Helmet>
        );
    }
}

export default SEO;