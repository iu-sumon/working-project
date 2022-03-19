import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReactModal.css';
const ReactModal = (props) => {

    const { brand, image, phone_name, slug } = props.product;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <Button variant="success" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>

                        <h3 className='text-center'>{phone_name}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='row d-flex justify-content-center align-items-center'>
                   <div className='col-4'>
                   <img src={image} alt="" />
                   </div>
                    <div className='col-8'>
                    <h4>{brand}</h4>
                    <h5>{slug}</h5>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ReactModal;