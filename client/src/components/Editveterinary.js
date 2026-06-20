import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import './editveterinary.css';
import { editveterinaire } from '../JS/veterinaireSlice';

const Editveterinary = ({ el, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [edited, setedited] = useState({
      imgvet: el?.imgvet,
      namevet: el?.namevet,
      address: el?.address,
      city: el?.city,
      category: el?.category,
      speciality: el?.speciality,
      phone: el?.phone,
      available: el?.available,
      sourceprofle: el?.sourceprofile
  });

  return (
    <>
      {/* 🎯 Baddalna el className houni l- 'edit-pet-btn' */}
      <button className="edit-product-btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            <circle cx="7.5" cy="6.5" r="1.5" />
            <circle cx="11.5" cy="4.5" r="1.5" />
            <circle cx="15.5" cy="5.5" r="1.5" />
            <path d="M16 20h4" stroke-dasharray="1 1" opacity="0.5" />
            <path d="M18.5 12.5a2.121 2.121 0 0 1 3 3L15 22l-3 1 1-3 6.5-6.5z" fill="none" />
        </svg>


      </button>

      {/* 🎯 Baddalna el wrapper class l- 'pet-modal-wrapper' */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="veterinary-modal-wrapper">
        <Modal.Header closeButton>
          <Modal.Title>Update Veterinary</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p className="modal-info-text">
            Update details for : <strong>{el?.namevet}</strong>
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formPetImage">
              <Form.Label className="pet-modal-label">Image URL</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.imgvet} onChange={(e)=>setedited({...edited, imgvet:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetName">
              <Form.Label className="pet-modal-label">Name</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.namevet} onChange={(e)=>setedited({...edited, namevet:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">Address</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.address} onChange={(e)=>setedited({...edited, address:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">City</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.city} onChange={(e)=>setedited({...edited, city:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">Phone</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.phone} onChange={(e)=>setedited({...edited, phone:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">Available</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.available} onChange={(e)=>setedited({...edited, available:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetPhone">
              <Form.Label className="pet-modal-label">Source Profile</Form.Label>
              <Form.Control className="pet-modal-input" type="text" placeholder={el?.sourceprofile} onChange={(e)=>setedited({...edited, sourceprofile:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <button type="button" className="btn-modal-close-veterinary" onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className="btn-modal-save-veterinary" onClick={()=>{dispatch(editveterinaire({id:el?._id, edited})); alert("The veterinary is edited"); setping(!ping); handleClose();}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Editveterinary;