import React, {useState} from 'react';
import { Button, Card, Carousel, Modal } from 'react-bootstrap';


// import poster from '../imgs/MLAirHockey/Poster.png'

interface ProjectCardProps {
  title: string;
  alert?: JSX.Element;
  body?: string;
  projectImages?:string[];
  modalList: JSX.Element[];
  modalLink: string;
};


const ProjectCard: React.FC<ProjectCardProps> = (ProjectCardProps) => {

  const [showModal, setShowModal] = useState(false); 
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  const createCarouselItem = (image: string, index: number) => {
    return (
      <Carousel.Item key={index}>
        <img src={image} alt="" role="presentation" style={{width:"100%", minHeight:"17em", maxHeight: "30em"}}/>
      </Carousel.Item>
    );
  }
  const createCarousel = () => {
    let imgs:JSX.Element[] = [];
    ProjectCardProps.projectImages?.forEach((image, index) => {
      imgs.push(createCarouselItem(image, index));
    })
    return imgs;

  };

  return (
    <>
        <Card border="primary" style={{minHeight:"25em", maxHeight:"44em"}}>
          <Carousel>
            {createCarousel()}
          </Carousel>
          <Card.Body>
            <Card.Title>{ProjectCardProps.alert}{ProjectCardProps.title}</Card.Title>
            <Card.Text>
              {ProjectCardProps.body}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>Info</Button>
          </Card.Body>
        </Card>

        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{ProjectCardProps.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="">
                  {ProjectCardProps.modalList}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="link" href={ProjectCardProps.modalLink} >Github Project Link</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>

</>
  
  );
}

export default ProjectCard;