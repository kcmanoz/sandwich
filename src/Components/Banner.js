import React from 'react';
import bannerImage from '../images/banner.png';
const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
    );
};

export default Banner;
