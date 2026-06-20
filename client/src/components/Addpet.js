import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import './addpet.css';
import { addpet } from '../JS/petSlice';
import { useDispatch } from 'react-redux';

function Addpet({ping, setping}) {

    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newpet, setnewpet] = useState({
        image:"",
        name:"",
        type:"",
        category:"",
        description:"",
        race:"",
        age:"",
        role:"",
        price:"",
        owner:"",
        phone:""
    })
    console.log(newpet);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='addbuttonpet'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add Pet */}
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="13" x2="12" y2="19" strokeWidth="2.5" />
                <line x1="9" y1="16" x2="15" y2="16" strokeWidth="2.5" />
                <circle cx="6.5" cy="9.5" r="1.5" fill="currentColor" />
                <circle cx="10" cy="6.5" r="1.5" fill="currentColor" />
                <circle cx="14" cy="6.5" r="1.5" fill="currentColor" />
                <circle cx="17.5" cy="9.5" r="1.5" fill="currentColor" />
                <path d="M8.5 13.5c-1-1-2.5-.5-2.5 1s1.5 3.5 3 4c.5.2 1 .5 1.5.5h3c.5 0 1-.3 1.5-.5 1.5-.5 3-2.5 3-4s-1.5-2-2.5-1" />
            </svg>
      </Button>

      <Modal show={show} onHide={handleClose} className='modaladdpet'>
        <Modal.Header closeButton>
          <Modal.Title>New Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter pet image" onChange={(e)=>setnewpet({...newpet, image:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter pet name" onChange={(e)=>setnewpet({...newpet, name:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Type</Form.Label>
        <Form.Control type="text" placeholder="Enter pet type" onChange={(e)=>setnewpet({...newpet, type:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter pet category" onChange={(e)=>setnewpet({...newpet, category:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter pet description" onChange={(e)=>setnewpet({...newpet, description:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Race</Form.Label>
        <Form.Control type="text" placeholder="Enter pet race" onChange={(e)=>setnewpet({...newpet, race:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter pet age" onChange={(e)=>setnewpet({...newpet, age:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Enter pet role" onChange={(e)=>setnewpet({...newpet, role:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter pet price" onChange={(e)=>setnewpet({...newpet, price:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Owner</Form.Label>
        <Form.Control type="text" placeholder="Enter pet owner" onChange={(e)=>setnewpet({...newpet, owner:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone owner" onChange={(e)=>setnewpet({...newpet, phone:e.target.value})}/>
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addpet(newpet)); alert("The new pet is added"); setping(!ping); handleClose()}}>
            Add Pet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addpet