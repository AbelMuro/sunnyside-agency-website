import React from 'react';
import PreLoadImages from './PreLoadImages';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import CompanyServices from './CompanyServices';
import ClientTestimonials from './ClientTestimonials';
import './styles.css';

// the PreLoadImages component will load all the background images before they are used in the other components
// this is done to prevent the flickering that happens when an img tag has its src attribute changed to a different image

function App() {
    return(
        <>
            <PreLoadImages/>
            <Header/>        
            <CompanyDetails 
                title='Transform your brand' 
                desc={`We are a full-service creative agency specializing 
                    in helping brands grow fast. Engage your clients through 
                    compelling visuals that do most of the marketing for you.`}
                image='egg'
                barcolor='#FAD400'
            />
            <CompanyDetails 
                title='Stand out to the right audience' 
                desc={`Using a collaborative formula of designers, researchers, 
                    photographers, videographers, and copywriters, we’ll build and 
                    extend your brand in digital places. `}
                image='cup'
                reverse={true}
                barcolor='#FE7766'
            />
            <CompanyServices/>
            <ClientTestimonials/>
        </>
    )
}

export default App;