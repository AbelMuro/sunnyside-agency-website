import React from 'react';
import headerBGdesktop from '../Header/images/image-header.jpg';
import headerBGmobile from '../Header/images/image-header-mobile.jpg';

function PreLoadImages(){
    return(
        <>
            <img src={headerBGdesktop} style={{display: 'none'}}/>
            <img src={headerBGmobile} style={{display: 'none'}}/>
        </>
    )
}

export default PreLoadImages;