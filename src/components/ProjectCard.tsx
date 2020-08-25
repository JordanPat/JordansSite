import React, {useState} from 'react';
import MyModal from './MyModal';
import { Button, Card, Carousel, Modal, ModalBody } from 'react-bootstrap';


// import poster from '../imgs/MLAirHockey/Poster.png'

type ProjectCardProps = {
    title?: string;
    body?: string;
    projectImages?:string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({title, body, projectImages}) => {

  const createCarousel = () => {
    console.log(projectImages?.[0]);

    return (
      <Carousel.Item>
        <img src={projectImages?.[0]}/>
      </Carousel.Item>
    
    );
  }

  const [show, setShow] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Card border="primary" style={{width: '20em'}}>
          <Carousel>
            {/* <Carousel.Item>
              <img className="" alt="Portfolio site" src={"/imgs/portfolioSite.png"} style={{width:"100%", height: "100%"}}/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="" alt="CV" src={'https://docs.google.com/document/d/1wF3zutNxZVcCZicvzA6lWvpWTbLontrPdGXB7OkF3y8/edit?usp=sharing'} style={{width:"100%", height: "100%"}}/>
            </Carousel.Item> */} 
          {createCarousel}

          </Carousel>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {body}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>Info</Button>
          </Card.Body>
        </Card>
        {/* react rah modal */}
        <MyModal title="mymodal"></MyModal>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <ul className="">
                    <li>Built with ReactJS and Typescript</li>
                    <li>Bootstrap components for style</li>
                    <li>Hosted using Google Firebase</li>
                </ul>
            </ModalBody>
            <Modal.Footer>
                <Button variant="link" href="https://github.com/JordanPat/JordansSite">Github Project Link</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        <Button onClick={createCarousel}>get images</Button>
    </>
  
  );
}

export default ProjectCard;