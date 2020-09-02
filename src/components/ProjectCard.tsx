import React, {useState} from 'react';
import { Button, Card, Carousel, Modal } from 'react-bootstrap';


// import poster from '../imgs/MLAirHockey/Poster.png'

interface ProjectCardProps {
  title: string;
  body?: string;
  projectImages?:string[];
  modalList: JSX.Element[];
  modalLink: string;
};

let x:number = 0;
const ProjectCard: React.FC<ProjectCardProps> = (ProjectCardProps) => {

  const [showModal, setShowModal] = useState(false); 
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    console.log("handle close inside ProjectCard");
    setShowModal(false);
    // onClose;
}

  x++;
  console.log("x --- " + x);

  const createCarouselItem = (image: string) => {
    return (
      <Carousel.Item>
        <img src={image} alt={image} style={{width:"100%", minHeight:"17em", maxHeight: "30em"}}/>
      </Carousel.Item>
    ); 
  }
  const createCarousel = () => {
    let imgs:JSX.Element[] = [];
    ProjectCardProps.projectImages?.forEach(image => {
      imgs.push(createCarouselItem(image)); 
    })
    return imgs;

  };

  return (
    <>
        <Card border="primary" style={{minHeight:"25em", maxHeight:"42em"}}>
          <Carousel>
            {createCarousel()}
          </Carousel>
          <Card.Body>
            <Card.Title>{ProjectCardProps.title}</Card.Title>
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

        {/* <Button onClick={createCarousel}>get images</Button> */}
    </>
  
  );
}

export default ProjectCard;