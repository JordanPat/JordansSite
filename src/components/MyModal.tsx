import React, {useState} from 'react';
import {Container, Button, Modal, ModalBody, Alert } from 'react-bootstrap';

const MyModal = (props: { title: React.ReactNode; }) => {
    const [show,setShow] = useState(false);
    const handleClose = () => {
        console.log("handle close inside MyModal");
    }
    return (
        <>
        <Alert>
            <Alert.Heading>Hello from MyModal</Alert.Heading>
        </Alert>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>my modal holder</Modal.Title>
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

        </>
    );
}
export default MyModal;