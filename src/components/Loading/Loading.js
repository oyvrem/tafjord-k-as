import React from 'react';

const Loading = () => {
    return (
        <div className="[ d-flex align-items-center justify-content-center ]" style={{
            minHeight: '100vh',
            paddingBottom: '150px'
        }}>
            <div className="spinner-border text-primary">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;