import React from 'react';
import { Alert } from 'react-bootstrap';


// import poster from '../imgs/MLAirHockey/Poster.png'

interface CVProps {

};

const CV: React.FC<CVProps> = (CVProps) => {
    return(
        <>
            <iframe title="Resume" src="https://docs.google.com/document/d/1xosWtN73FfCNJIV9iYffQTd7239j7MtDjYvymvS3x3g/edit?usp=sharing" frameBorder="1" style={{ display:"block", width:"100%", height:"1000px"}}>IFRAME not supported!</iframe>
        </>
    );
}

export default CV