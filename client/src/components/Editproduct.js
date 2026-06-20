import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import './editproduct.css';
import { editproduct } from '../JS/productSlice';

const Editproduct = ({ el, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [edited, setedited] = useState({
      image: el?.image,
      name: el?.name,
      category: el?.category,
      petType: el?.petType,
      brand: el?.brand,
      description: el?.description,
      price: el?.price,
      stock: el?.stock
  });

  return (
    <>
      {/* 🎯 Baddalna el className houni l- 'edit-pet-btn' */}
      <button className="edit-product-btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5V16a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l2.5 1.43" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
            <path d="M18.41 2.58a1.2 1.2 0 0 1 1.7 1.7L15.5 8.9L13 9.5l.6-2.5z" />
        </svg>

      </button>

      {/* 🎯 Baddalna el wrapper class l- 'pet-modal-wrapper' */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="product-modal-wrapper">
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p className="modal-info-text">
            Update details for : <strong>{el?.name}</strong> {el?.type && el?.race ? `(${el?.type} - ${el?.race})` : ''}
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formPetImage">
              <Form.Label className="pet-modal-label">Image URL</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.image} onChange={(e)=>setedited({...edited, image:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetName">
              <Form.Label className="pet-modal-label">Name</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.name} onChange={(e)=>setedited({...edited, name:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">Price</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.price} onChange={(e)=>setedited({...edited, price:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">Stock</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.stock} onChange={(e)=>setedited({...edited, stock:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <button type="button" className="btn-modal-close-product" onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className="btn-modal-save-product" onClick={()=>{dispatch(editproduct({id:el?._id, edited})); alert("The product is edited"); setping(!ping); handleClose();}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Editproduct;