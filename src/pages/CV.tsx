import React from 'react';
import { Alert } from 'react-bootstrap';


// import poster from '../imgs/MLAirHockey/Poster.png'

interface CVProps {

};

const CV: React.FC<CVProps> = (CVProps) => {
    return(
        <>
            <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vT_KO1q3L_Pd7GvuF7nQeYnNuwBa4GQAWeyLYhzHqUqgvOphz8zAahEZta7JMgtXP0I_tyJv1_96MFT/pub?embedded=true" frameBorder="1" style={{ display:"block", width:"100%", height:"1000px"}}>IFRAME not supported!</iframe>
        </>
    );
}

export default CV