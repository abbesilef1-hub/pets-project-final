import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './productdetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { addcommande } from '../JS/commandeSlice';

function ProductDetails({ el, ping, setping }) {
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const [qte, setqte] = useState(1);

      const handleadd=()=>{

        const newcommande={

            imgproduct: el?.image,

            product: el?.name,

            quantity: qte,

            price: el?.price * qte,

            nameuser: user?.name+" "+user?.lastName,

            date: el?.date,

        }

        dispatch(addcommande(newcommande));

        setping(!ping);

        alert("Your Command Has Been Saved !")

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
        
        <Modal.Body >
          <div className='mymodal'>
            <img src={el?.image} alt={el?.name} />
            <div className='text3'>
                <h3>{el?.name}</h3>
                <p><strong>Brand :</strong> {el?.brand}</p>
                <p><strong>Category :</strong> {el?.category}</p>
                <p><strong>Pet Type :</strong> {el?.petType}</p>
                <p><strong>Description :</strong> {el?.description}</p>
                <div className="quantitybasket">
          <button className="minusbasket" onClick={()=>setqte(qte>1? qte-1 : qte)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
          </button>
          <input type="text" defaultValue={1} value={qte} readOnly/>
          <button className="plusbasket" onClick={()=>setqte(qte+1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
          </button>
        </div>
                <div className="price">
                    {el?.price * qte} TND
                </div>

                <p className={el?.stock > 0 ? "in-stock" : "out-stock"}>{el?.stock > 0 ? `✓ In Stock (${el?.stock})` : "✕ Out of Stock"}</p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {user?<button onClick={()=>handleadd()} disabled={el?.stock <= 0} className='formbutton'>
            Commander
          </button> : null}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductDetails;