import React from 'react';

const Loading = () => {
    return (
        <div className="[ d-flex align-items-center justify-content-center flex-column ]" style={{
            minHeight: '100vh',
            paddingBottom: '150px'
        }}>
            <div className="spinner-border text-primary mb-3" aria-hidden="true"></div>
            <strong>Loading...</strong>
        </div>
    )
}

export default Loading;