import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editcommande } from '../JS/commandeSlice';
import './editcommande.css';

const Editcommande = ({ el, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const nameuser = user?.name+" "+user?.lastName;
 
  const [edited, setedited] = useState({
      imgproduct:el?.imgproduct,
      product:el?.product,
      quantity:el?.quantity,
      price:el?.price,
      nameuser:el?.nameuser,
      status:el?.status,
      date:el?.date
    })

  return (
    <>
      {/* Bouton Edit (Crayon) */}
      <button className="edit-user-btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            <path d="M16 2l4 4-8 8H8v-4l8-8z" />
        </svg>


      </button>

      {/* Modal mta3 el Role barka */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="dark-modal-wrapper-commande">
        <Modal.Header closeButton>
          <Modal.Title>Update Commande Product for Pet</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p className="modal-info-text-commande">
            Select the new status for : <strong>{el?.nameuser}</strong>
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="modal-label-commande">Commande Status 📦</Form.Label>
              <Form.Select 
                onChange={(e) => setedited({...edited, status:e.target.value})}
                className="dark-modal-input-commande"
              > 
                <option value="New Status">Select the Status</option>
                <option value="Pending">Not Confirmed</option>
                <option value="Accepted">Confirmed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <button type="button" className="btn-modal-close-commande" onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className="btn-modal-save-commande" onClick={()=>{dispatch(editcommande({id:el?._id, edited})); alert("The commande is edited"); setping(!ping); handleClose();}}>
            Save New Status
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Editcommande;