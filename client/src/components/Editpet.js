import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import './editpet.css';
import { editpet } from '../JS/petSlice';

const Editpet = ({ el, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [edited, setedited] = useState({
      image: el?.image,
      name: el?.name,
      type: el?.type,
      category: el?.category,
      description: el?.description,
      race: el?.race,
      age: el?.age,
      role: el?.role,
      price: el?.price,
      owner: el?.owner,
      phone: el?.phone
  });

  return (
    <>
      {/* 🎯 Baddalna el className houni l- 'edit-pet-btn' */}
      <button className="edit-pet-btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            <circle cx="5" cy="15" r="0.5" fill="currentColor" />
            <circle cx="7" cy="15" r="0.5" fill="currentColor" />
            <path d="M6 18c-.8 0-1 .3-1 .7 0 .3.3.3 1 .3s1 0 1-.3c0-.4-.2-.7-1-.7z" fill="currentColor" />
        </svg>
      </button>

      {/* 🎯 Baddalna el wrapper class l- 'pet-modal-wrapper' */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="pet-modal-wrapper">
        <Modal.Header closeButton>
          <Modal.Title>Update Pet</Modal.Title>
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

            <Form.Group className="mb-3" controlId="formPetRole">
              <Form.Label className="pet-modal-label">Role</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.role} onChange={(e)=>setedited({...edited, role:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetRole">
              <Form.Label className="pet-modal-label">Price</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.price} onChange={(e)=>setedited({...edited, price:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetOwner">
              <Form.Label className="pet-modal-label">Owner</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.owner} onChange={(e)=>setedited({...edited, owner:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">Phone</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.phone} onChange={(e)=>setedited({...edited, phone:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <button type="button" className="btn-modal-close-pet" onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className="btn-modal-save-pet" onClick={()=>{dispatch(editpet({id:el?._id, edited})); alert("The pet is edited"); setping(!ping); handleClose();}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Editpet;