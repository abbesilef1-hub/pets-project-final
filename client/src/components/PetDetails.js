import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './petdetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { addrequest } from '../JS/requestSlice';

function PetDetails({el, ping, setping}) {
    const user = useSelector((state) => state.user.user);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    // const [newrequest, setnewrequest] = useState({
    //     imgpet: el?.image,

    //     namepet: el?.name,

    //     category: el?.category,

    //     description: el?.description,

    //     role: el?.role,

    //     price: el?.price,

    //     nameowner: el?.owner,

    //     user: user?.name+" "+user?.lastName,
         
    //     address: user?.address,

    //     phone: user?.phone,

    //     timestamps: true
   
    // })


    const handleadd=()=>{
    
            const newrequest={
    
                imgpet: el?.image,

        namepet: el?.name,

        category: el?.category,

        description: el?.description,

        role: el?.role,

        price: el?.price,

        nameowner: el?.owner,

        user: user?.name+" "+user?.lastName,
         
        address: user?.address,

        phone: user?.phone,

        date: el?.date,
    
            }
    
            dispatch(addrequest(newrequest));
    
            setping(!ping);
    
            alert("Your Request Has Been Saved !")
    
          }
  return (
    <>
      <button onClick={handleShow} className='view'>
        View More
      </button>

      <Modal show={show} onHide={handleClose} animation={false} size={"lg"} style={{marginTop:"50px"}}>
        <Modal.Header closeButton>
          <Modal.Title id='category'>{el?.category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <div className='mymodal'>
        <img src={el?.image} alt={el?.name} />
        <div className='text3'>
            <h3>{el?.name}</h3>
            <p><span>Description : </span> {el?.description}</p>
            <p><span>Type : </span> {el?.type}</p>
            <p><span>Category : </span> {el?.category}</p>
            <p><span>Race : </span> {el?.race}</p>
            <p><span>Age : </span> {el?.age?.value} {el?.age?.unit}</p>
            <p><span>Role : </span> {el?.role}</p>
            <p><span>Price : {" "} </span>{el?.role === "Sell" ? `${el?.price} TND` : "Free Adoption"}</p>
            <p><span>Owner : </span> {el?.owner}</p>
            <p><span>Phone : </span> {el?.phone}</p>
        </div>
    </div>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          {user?<button onClick={()=>handleadd()} className='formbutton'>
            Send a Request
          </button> : null}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PetDetails