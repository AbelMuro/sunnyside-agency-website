import React from 'react';
import headerBGdesktop from '../Header/images/image-header.jpg';
import headerBGmobile from '../Header/images/image-header-mobile.jpg';
import eggBGDesktop from '../CompanyDetails/images/image-transform.jpg';
import eggBGMobile from '../CompanyDetails/images/image-transform-mobile.jpg';
import cupBGDesktop from '../CompanyDetails/images/image-stand-out.jpg';
import cupBGMobile from '../CompanyDetails/images/image-stand-out-mobile.jpg'
import cherryBGDesktop from '../CompanyServices/images/image-graphic-design.jpg';
import cherryBGMobile from '../CompanyServices/images/image-graphic-design-mobile.jpg';
import orangeBGDesktop from '../CompanyServices/images/image-photography.jpg';
import orangeBGMobile from '../CompanyServices/images/image-photography-mobile.jpg';

function PreLoadImages(){
    return(
        <>
            <img src={headerBGdesktop} style={{display: 'none'}}/>
            <img src={headerBGmobile} style={{display: 'none'}}/>
            <img src={eggBGDesktop} style={{display: 'none'}}/>
            <img src={eggBGMobile} style={{display: 'none'}}/>
            <img src={cupBGDesktop} style={{display: 'none'}}/>
            <img src={cupBGMobile} style={{display: 'none'}}/>
            <img src={cherryBGDesktop} style={{display: 'none'}}/>
            <img src={cherryBGMobile} style={{display: 'none'}}/>
            <img src={orangeBGDesktop} style={{display: 'none'}}/>
            <img src={orangeBGMobile} style={{display: 'none'}}/>
        </>
    )
}

export default PreLoadImages;