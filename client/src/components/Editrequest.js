import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editrequest } from '../JS/requestSlice';
import './editrequest.css';

const Editrequest = ({ el, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [edited, setedited] = useState({
      imgpet:el?.imgpet,
      namepet:el?.namepet,
      role:el?.role,
      price:el?.price,
      nameowner:el?.nameowner,
      user:el?.user,
      address:el?.address,
      phone:el?.phone,
      status:el?.status,
      date:el?.date
    })

  return (
    <>
      {/* Bouton Edit (Crayon) */}
      <button className="edit-user-btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <circle cx="9" cy="15" r="1" />
            <circle cx="7" cy="17" r="0.6" />
            <circle cx="11" cy="17" r="0.6" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>

      </button>

      {/* Modal mta3 el Role barka */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="dark-modal-wrapper-request">
        <Modal.Header closeButton>
          <Modal.Title>Update Request Pet</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p className="modal-info-text-request">
            Select the new status for : <strong>{el?.user} </strong>
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="modal-label-request">Request Status 🐾</Form.Label>
              <Form.Select 
                onChange={(e) => setedited({...edited, status:e.target.value})}
                className="dark-modal-input-request"
              >

                <option value="New Status">Select the Status</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <button type="button" className="btn-modal-close-request" onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className="btn-modal-save-request" onClick={()=>{dispatch(editrequest({id:el?._id, edited})); alert("The request is edited"); setping(!ping); handleClose();}}>
            Save New Status
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Editrequest;