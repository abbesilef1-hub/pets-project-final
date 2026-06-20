import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './veterinairedetails.css';


function VeterinaireDetails({el, ping, setping}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
      <button onClick={handleShow} className='viewvet'>
        View More
      </button>

      <Modal show={show} onHide={handleClose} animation={false} size={"lg"} style={{marginTop:"45px"}}>
        <Modal.Header closeButton>
          <Modal.Title id='category'>A Veterinarian in {el?.city} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <div className='mymodalvet'>
        <img src={el?.imgvet} alt={el?.namevet} />
        <div className='textvet'>
            <h3>{el?.namevet}</h3>
            <p><strong>Category : </strong>{el?.category}</p>
            <p><strong>Speciality : </strong>{el?.speciality}</p>
            <p><strong>Address : </strong>{el?.address}</p>
            <p><strong>City : </strong>{el?.city}</p>
            <p><strong>Phone : </strong>{el?.phone}</p>
            <p><strong>Available : </strong>{el?.available}</p>
            <p><strong>Source Profile : </strong>{el?.sourceprofile}</p>
        </div>
    </div>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          {/* <button  onClick={()=> {dispatch(addrequest(newrequest)); alert("The Request is Sent"); setping(!ping); handleClose()}} className='formbutton'>
            Send a Request
          </button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VeterinaireDetails