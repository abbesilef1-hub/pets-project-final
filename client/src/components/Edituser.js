// import React from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import './edituser.css';
// import Form from 'react-bootstrap/Form';

// const Edituser = ({el}) => {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [edited, setedited] = useState({
//         role:el?.role,
//     })
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/></svg>
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit User</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Form>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Role</Form.Label>
//         <Form.Control type="text" placeholder={el?.role} onChange={(e)=>setedited({...edited, name:e.target.value})}/>
//       </Form.Group>
//       </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )
// }

// export default Edituser



import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { edituser } from '../JS/userSlice/userSlice';
import './edituser.css';

const Edituser = ({ el, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [edited, setedited] = useState({
      name:el?.name,
      lastName:el?.lastName,
      address:el?.address,
      phone:el?.phone,
      email:el?.email,
      role:el?.role
      // password:el?.password
    })

  return (
    <>
      {/* Bouton Edit (Crayon) */}
      <button className="edit-user-btn" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
          <path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/>
        </svg>
      </button>

      {/* Modal mta3 el Role barka */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="dark-modal-wrapper">
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p className="modal-info-text">
            Select the new role for : <strong>{el?.name} {el?.lastName}</strong>
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="modal-label">Account Role</Form.Label>
              <Form.Select 
                onChange={(e) => setedited({...edited, role:e.target.value})}
                className="dark-modal-input"
              >
                <option value="selct">Select Your Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <button type="button" className="btn-modal-close" onClick={handleClose}>
            Cancel
          </button>
          <button type="button" className="btn-modal-save" onClick={()=>{dispatch(edituser({id:el?._id, edited})); alert("The user is edited"); setping(!ping); handleClose();}}>
            Save New Role
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edituser;