import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import './addveterinary.css';
import { addveterinaire } from '../JS/veterinaireSlice';
import { useDispatch } from 'react-redux';

function Addveterinary({ping, setping}) {

    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newveterinary, setnewveterinary] = useState({
        imgvet:"",
        namevet:"",
        address:"",
        city:"",
        category:"",
        speciality:"",
        phone:"",
        available:"",
        sourceprofile:""
    })
    console.log(newveterinary);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='addbutton-veterinary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6a8 8 0 0 1 16 0c0 2.5-1 4.5-2.5 6" />
                <path d="M10 14v5a3 3 0 0 0 6 0v-5" />
                <circle cx="16" cy="14" r="1" />
                <line x1="19" y1="2" x2="19" y2="8" />
                <line x1="16" y1="5" x2="22" y2="5" />
            </svg>

      </Button>

      <Modal show={show} onHide={handleClose} className='modaladdveterinary'>
        <Modal.Header closeButton>
          <Modal.Title>New Veterinary</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary image" onChange={(e)=>setnewveterinary({...newveterinary, imgvet:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary name" onChange={(e)=>setnewveterinary({...newveterinary, namevet:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary address" onChange={(e)=>setnewveterinary({...newveterinary, address:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city veterinary" onChange={(e)=>setnewveterinary({...newveterinary, city:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary category" onChange={(e)=>setnewveterinary({...newveterinary, category:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Speciality</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary speciality" onChange={(e)=>setnewveterinary({...newveterinary, speciality:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary phone" onChange={(e)=>setnewveterinary({...newveterinary, phone:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Available</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary available" onChange={(e)=>setnewveterinary({...newveterinary, available:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Source Profile</Form.Label>
        <Form.Control type="text" placeholder="Enter veterinary source profile" onChange={(e)=>setnewveterinary({...newveterinary, sourceprofile:e.target.value})}/>
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addveterinaire(newveterinary)); alert("The new veterinary is added"); setping(!ping); handleClose()}}>
            Add Veterinary
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addveterinary