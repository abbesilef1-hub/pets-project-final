import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import './addproduct.css';
import { addproduct } from '../JS/productSlice';
import { useDispatch } from 'react-redux';

function Addproduct({ping, setping}) {

    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newproduct, setnewproduct] = useState({
        image:"",
        name:"",
        category:"",
        petType:"",
        brand:"",
        description:"",
        price:"",
        stock:""
    })
    console.log(newproduct);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='addbutton-product'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
                <circle cx="10" cy="14" r="0.8" fill="currentColor" />
                <circle cx="14" cy="14" r="0.8" fill="currentColor" />
                <circle cx="8.5" cy="15.5" r="0.6" fill="currentColor" />
                <circle cx="15.5" cy="15.5" r="0.6" fill="currentColor" />
                <path d="M12 15.5c-.8 0-1.5.5-1.5 1s.7 1 1.5 1 1.5-.5 1.5-1-.7-1-1.5-1z" fill="currentColor" />
            </svg>
      </Button>

      <Modal show={show} onHide={handleClose} className='modaladdproduct'>
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter product image" onChange={(e)=>setnewproduct({...newproduct, image:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>setnewproduct({...newproduct, name:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter product category" onChange={(e)=>setnewproduct({...newproduct, category:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pet Type</Form.Label>
        <Form.Control type="text" placeholder="Enter pet type product" onChange={(e)=>setnewproduct({...newproduct, petType:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder="Enter product brand" onChange={(e)=>setnewproduct({...newproduct, brand:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter product description" onChange={(e)=>setnewproduct({...newproduct, description:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter product price" onChange={(e)=>setnewproduct({...newproduct, price:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" placeholder="Enter product stock" onChange={(e)=>setnewproduct({...newproduct, stock:e.target.value})}/>
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addproduct(newproduct)); alert("The new product is added"); setping(!ping); handleClose()}}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addproduct