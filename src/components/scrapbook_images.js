import React from 'react';

export default props => {
    console.log('scrapbook image props:', props);

    const { src } = props.about;

    return <img className="scrapbook-image"  src={src}/>;
}