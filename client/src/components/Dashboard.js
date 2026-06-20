import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteuser, getusers } from '../JS/userSlice/userSlice';
import Edituser from './Edituser';
import { deletepet } from '../JS/petSlice';
import Editpet from './Editpet';
import Addpet from './Addpet';
import { deleteproduct } from '../JS/productSlice';
import Editproduct from './Editproduct';
import Addproduct from './Addproduct';
import Editrequest from './Editrequest';
import { deleterequest } from '../JS/requestSlice';
import { deletecommande } from '../JS/commandeSlice';
import Editcommande from './Editcommande';
import { deleteveterinaire } from '../JS/veterinaireSlice';
import Editveterinary from './Editveterinary';
import Addveterinary from './Addveterinary';



const Dashboard = ({el, ping, setping}) => {
  const [category, setcategory] = useState('users');
  const dispatch=useDispatch();
  const users = useSelector((status) => status.user.userlist);
//   console.log(users);
  const pets = useSelector((status) => status.pet.petlist);
  const requests = useSelector((status) => status.request.requestlist);
  const products = useSelector((status) => status.product.productlist);
  const commandes = useSelector((status) => status.commande.commandelist);
  const veterinaires = useSelector((status) => status.veterinaire.veterinarylist);
  const [text, settext] = useState("");

  useEffect(() => {
  dispatch(getusers());
}, [dispatch, ping]);


  return (
    <div className="dashboard">
      
      {/* 1. SIDEBAR EL MINIMALIST */}
      <div className="sidebar">
        <div className="logo">
          <div className="avatar-container">
            <span className="dot-online"></span>
          </div>
        </div>
        <div className="menu">
          {/* USERS */}
          <button 
            className={category === 'users' ? 'btn active' : 'btn'} 
            onClick={() => setcategory('users')}
            title="Users"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </button>
          
          {/* PETS */}
          <button 
            className={category === 'pets' ? 'btn active' : 'btn'} 
            onClick={() => setcategory('pets')}
            title="Pets"
          >
            {/* <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
          </button>
          
          {/* REQUESTS */}
          <button 
            className={category === 'requests' ? 'btn active' : 'btn'} 
            onClick={() => setcategory('requests')}
            title="Requests"
          >
            {/* <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M197.8 100.3C208.7 107.9 211.3 122.9 203.7 133.7L147.7 213.7C143.6 219.5 137.2 223.2 130.1 223.8C123 224.4 116 222 111 217L71 177C61.7 167.6 61.7 152.4 71 143C80.3 133.6 95.6 133.7 105 143L124.8 162.8L164.4 106.2C172 95.3 187 92.7 197.8 100.3zM197.8 260.3C208.7 267.9 211.3 282.9 203.7 293.7L147.7 373.7C143.6 379.5 137.2 383.2 130.1 383.8C123 384.4 116 382 111 377L71 337C61.6 327.6 61.6 312.4 71 303.1C80.4 293.8 95.6 293.7 104.9 303.1L124.7 322.9L164.3 266.3C171.9 255.4 186.9 252.8 197.7 260.4zM288 160C288 142.3 302.3 128 320 128L544 128C561.7 128 576 142.3 576 160C576 177.7 561.7 192 544 192L320 192C302.3 192 288 177.7 288 160zM288 320C288 302.3 302.3 288 320 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L320 352C302.3 352 288 337.7 288 320zM224 480C224 462.3 238.3 448 256 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L256 512C238.3 512 224 497.7 224 480zM128 440C150.1 440 168 457.9 168 480C168 502.1 150.1 520 128 520C105.9 520 88 502.1 88 480C88 457.9 105.9 440 128 440z"/></svg>
          </button>

          {/* PRODUCTS (SHOP) */}
          <button 
            className={category === 'products' ? 'btn active' : 'btn'} 
            onClick={() => setcategory('products')}
            title="Products"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM16 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2"/></svg>
          </button>
          
          {/* COMMANDES */}
          <button 
            className={category === 'commandes' ? 'btn active' : 'btn'} 
            onClick={() => setcategory('commandes')}
            title="Commandes"
          >
            {/* <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L312 96L312 198.1L281 167.1C271.6 157.7 256.4 157.7 247.1 167.1C237.8 176.5 237.7 191.7 247.1 201L319.1 273C328.5 282.4 343.7 282.4 353 273L425 201C434.4 191.6 434.4 176.4 425 167.1C415.6 157.8 400.4 157.7 391.1 167.1L360.1 198.1L360.1 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528z"/></svg>
          </button>

          {/* VETERINARY (Taht commandes direct) 🩺 */}
          <button 
            className={category === 'veterinary' ? 'btn active' : 'btn'} 
            onClick={() => setcategory('veterinary')}
            title="Veterinary"
          >
            {/* <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-15zM12 3v18M3 12h18"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 112C64 85.5 85.5 64 112 64L160 64C177.7 64 192 78.3 192 96C192 113.7 177.7 128 160 128L128 128L128 256C128 309 171 352 224 352C277 352 320 309 320 256L320 128L288 128C270.3 128 256 113.7 256 96C256 78.3 270.3 64 288 64L336 64C362.5 64 384 85.5 384 112L384 256C384 333.4 329 398 256 412.8L256 432C256 493.9 306.1 544 368 544C429.9 544 480 493.9 480 432L480 346.5C442.7 333.3 416 297.8 416 256C416 203 459 160 512 160C565 160 608 203 608 256C608 297.8 581.3 333.4 544 346.5L544 432C544 529.2 465.2 608 368 608C270.8 608 192 529.2 192 432L192 412.8C119 398 64 333.4 64 256L64 112zM512 288C529.7 288 544 273.7 544 256C544 238.3 529.7 224 512 224C494.3 224 480 238.3 480 256C480 273.7 494.3 288 512 288z"/></svg>
          </button>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="main">
        
        {/* TOP BAR SEARCH & ADMIN INFO */}

        <div className="topbar">
  <div className="search-box">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <input type="text" placeholder="Search..." />
  </div>

  <div className="admin-profile">
    <div className="notif-container-blog">
      <button className="notif-btn-blog" aria-label="Notifications">
        <svg 
          className="notif-svg-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <span className="notif-badge-blog"></span>
      </button>
    </div>
    
    <img 
      src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg" 
      alt="Admin Avatar" 
      className="avatar" 
    />
  </div>
</div>


        {/* CONTAINER EL category DYNAMIC */}
        {category === "users" ? (
          <div className="section">
            <h1 className="titre">List of Users</h1>
            <input type='text' onChange={(e)=>settext(e.target.value)} placeholder='Search for user ...'/>
            <div className="box">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=><tr>
                    <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg></td>
                    <td>{el?.name}</td>
                    <td>{el?.lastName}</td>
                    <td>{el?.email}</td>
                    <td>{el?.role}</td>
                    {/* <td><button className="del-user" onClick={()=>{dispatch(edituser(el?._id)); alert("The User is Edited"); setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/></svg></button></td> */}
                    <td>
                        <Edituser el={el} ping={ping} setping={setping}/>
                    </td>
                    <td><button className="del-user" onClick={()=>{dispatch(deleteuser(el?._id)); alert("The User is Deleted"); setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"fill="currentColor"><path d="M286.1 368C384.6 368 464.4 447.8 464.4 546.3C464.4 562.7 451.1 576 434.7 576L78.1 576C61.7 576 48.4 562.7 48.4 546.3C48.4 447.8 128.2 368 226.7 368L286.1 368zM562.3 172.1C571.7 162.7 586.9 162.7 596.2 172.1C605.5 181.5 605.6 196.7 596.2 206L562.3 239.9L596.2 273.8C605.6 283.2 605.6 298.4 596.2 307.7C586.8 317 571.6 317.1 562.3 307.7L528.4 273.8L494.5 307.7C485.1 317.1 469.9 317.1 460.6 307.7C451.3 298.3 451.2 283.1 460.6 273.8L494.5 239.9L460.6 206C451.2 196.6 451.2 181.4 460.6 172.1C470 162.8 485.2 162.7 494.5 172.1L528.4 206L562.3 172.1zM256.4 312C190.1 312 136.4 258.3 136.4 192C136.4 125.7 190.1 72 256.4 72C322.7 72 376.4 125.7 376.4 192C376.4 258.3 322.7 312 256.4 312z"/></svg></button></td>
                  </tr>)}
                </tbody>
              </Table>
            </div>
          </div>
        ) : null}


        {category === "pets" ? (
          <div className="section">
            <h1 className="titre">List of Pets</h1>
            <div className="section-header-actions">
            <input type='text' onChange={(e)=>settext(e.target.value)} placeholder='Search for pet...'/>
            {/* <button className="btn-add-pet-dash"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Pet */}
                <Addpet el={el} ping={ping} setping={setping}/>
            {/* </button> */}
            </div>
            <div className="box">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price (TND)</th>
                    <th>Role</th>
                    <th>Owner</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {pets?.filter((el)=>el?.owner.toLowerCase().includes(text.toLowerCase())).map((el)=><tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 14c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3S9 5.34 9 7v4c0 1.34 1.34 3 3 3z" />
                            <path d="M19 11c0-2.22-1.21-4.15-3-5.19V5a4 4 0 0 0-8 0v.81C6.21 6.85 5 8.78 5 11v3a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3z" />
                            <path d="M12 18v3" />
                            <path d="M9 21h6" />
                            <path d="M6 7.5C6 5.57 7.57 4 9.5 4" />
                            <path d="M18 7.5c0-1.93-1.57-3.5-3.5-3.5" />
                            <path d="M16 18a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3h-5v-3z" />
                            <path d="M18.5 13c.83 0 1.5.67 1.5 1.5v1.5h-3v-1.5c0-.83.67-1.5 1.5-1.5z" />
                            <path d="M17.5 13l1-2 1 2" />
                        </svg>
                    </td>
                    <td><img src={el?.image} style={{width:"30px"}} alt='error1'/></td>
                    <td>{el?.name}</td>
                    <td>{el?.price}</td>
                    <td>{el?.role}</td>
                    <td>{el?.owner}</td>
                    <td>{el?.phone}</td>
                    {/* <td><button className="del-user" onClick={()=>{dispatch(edituser(el?._id)); alert("The User is Edited"); setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/></svg></button></td> */}
                    <td>
                        <Editpet el={el} ping={ping} setping={setping}/>
                    </td>
                    <td><button className="del-user" onClick={()=>{dispatch(deletepet(el?._id)); alert("The Pet is Deleted"); setping(!ping)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <circle cx="12" cy="12" r="1" fill="currentColor" />
                            <circle cx="9.5" cy="13.5" r="0.7" fill="currentColor" />
                            <circle cx="14.5" cy="13.5" r="0.7" fill="currentColor" />
                            <path d="M12 16c-1.5 0-2 .5-2 1.2 0 .8.8.8 2 .8s2 0 2-.8c0-.7-.5-1.2-2-1.2z" fill="currentColor" />
                        </svg>
                        </button>
                    </td>
                  </tr>)}
                </tbody>
              </Table>
            </div>
          </div>
        ) : null}


        {category === "requests" ? (
          <div className="section">
            <h1 className="titre">List of Requests</h1>
                        <div className="section-header-actions">
            <input type='text' onChange={(e)=>settext(e.target.value)} placeholder='Search for request...'/>
                {/* <Addpet el={el} ping={ping} setping={setping}/> */}
            </div>
            <div className="box">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Image Pet</th>
                    <th>Name Pet</th>
                    <th>Role</th>
                    <th>Name Owner</th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {requests?.filter((el)=>el?.user.toLowerCase().includes(text.toLowerCase())).map((el)=><tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <circle cx="12" cy="14" r="1" />
                            <circle cx="10" cy="16.5" r="0.7" />
                            <circle cx="14" cy="16.5" r="0.7" />
                            <path d="M11 17.5h2" />
                        </svg>

                    </td>
                    <td><img src={el?.imgpet} style={{width:"30px"}} alt='error1'/></td>
                    <td>{el?.namepet}</td>
                    <td>{el?.role}</td>
                    <td>{el?.nameowner}</td>
                    <td>{el?.user}</td>
                    <td>{el?.status}</td>
                    {/* <td><button className="del-user" onClick={()=>{dispatch(edituser(el?._id)); alert("The User is Edited"); setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/></svg></button></td> */}
                    <td>
                        <Editrequest el={el} ping={ping} setping={setping}/>
                    </td>
                    <td><button className="del-user" onClick={()=>{dispatch(deleterequest(el?._id)); alert("The Request is Deleted"); setping(!ping)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <circle cx="12" cy="14" r="1" />
                            <circle cx="10" cy="16.5" r="0.7" />
                            <circle cx="14" cy="16.5" r="0.7" />
                            <path d="M11 17.5h2" />
                        </svg>

                        </button>
                    </td>
                  </tr>)}
                </tbody>
              </Table>
            </div>
          </div>
        ) : null}


        {category === "products" ? (
          <div className="section">
            <h1 className="titre">List of Products (Shop)</h1>
            <div className="section-header-actions">
            <input type='text' onChange={(e)=>settext(e.target.value)} placeholder='Search for product...'/>
            {/* <button className="btn-add-product-dash"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Pet */}
                <Addproduct el={el} ping={ping} setping={setping}/>
            {/* </button> */}
            </div>
            <div className="box">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price (TND)</th>
                    <th>Stock</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=><tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8c8c9e' }}>
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                            <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="3" />
                        </svg>
                    </td>
                    <td><img src={el?.image} style={{width:"30px"}} alt='error1'/></td>
                    <td>{el?.name}</td>
                    <td>{el?.price}</td>
                    <td>{el?.stock}</td>
                    {/* <td><button className="del-user" onClick={()=>{dispatch(edituser(el?._id)); alert("The User is Edited"); setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/></svg></button></td> */}
                    <td>
                        <Editproduct el={el} ping={ping} setping={setping}/>
                    </td>
                    <td><button className="del-user" onClick={()=>{dispatch(deleteproduct(el?._id)); alert("The Product is Deleted"); setping(!ping)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                        </button>
                    </td>
                  </tr>)}
                </tbody>
              </Table>
            </div>
          </div>
        ) : null}


        {category === "commandes" ? (
          <div className="section">
            <h1 className="titre">List of Commandes</h1>
            <div className="section-header-actions">
            <input type='text' onChange={(e)=>settext(e.target.value)} placeholder='Search for commande...'/>
                {/* <Addpet el={el} ping={ping} setping={setping}/> */}
            </div>
            <div className="box">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Image Product</th>
                    <th>Name Product</th>
                    <th>Name User</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {commandes?.filter((el)=>el?.nameuser.toLowerCase().includes(text.toLowerCase())).map((el)=><tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                          <circle cx="12" cy="13.5" r="1" />
                          <circle cx="9.5" cy="15.5" r="0.6" />
                          <circle cx="14.5" cy="15.5" r="0.6" />
                        </svg>


                    </td>
                    <td><img src={el?.imgproduct} style={{width:"30px"}} alt='error1'/></td>
                    <td>{el?.product}</td>
                    <td>{el?.nameuser}</td>
                    <td>{el?.status}</td>
                    {/* <td><button className="del-user" onClick={()=>{dispatch(edituser(el?._id)); alert("The User is Edited"); setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/></svg></button></td> */}
                    <td>
                        <Editcommande el={el} ping={ping} setping={setping}/>
                    </td>
                    <td><button className="del-user" onClick={()=>{dispatch(deletecommande(el?._id)); alert("The Commande is Deleted"); setping(!ping)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          <line x1="14" y1="3" x2="20" y2="9" />
                          <line x1="20" y1="3" x2="14" y2="9" />
                        </svg>

                        </button>
                    </td>
                  </tr>)}
                </tbody>
              </Table>
            </div>
          </div>
        ) : null}


        {/* VETERINARY SECTION DYNAMIC CONTAINER 🩺 */}
        {category === "veterinary" ? (
          <div className="section">
            <h1 className="titre">Veterinary</h1>
            <div className="section-header-actions">
            <input type='text' onChange={(e)=>settext(e.target.value)} placeholder='Search for veterinary...'/>
            {/* <button className="btn-add-product-dash"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Pet */}
                <Addveterinary el={el} ping={ping} setping={setping}/>
            {/* </button> */}
            </div>
            <div className="box">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Image Veterinary</th>
                    <th>Name Veterinary</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Available</th>
                    <th>Source Profile</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {veterinaires?.filter((el)=>el?.namevet.toLowerCase().includes(text.toLowerCase())).map((el)=><tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6a8 8 0 0 1 16 0c0 2.5-1 4.5-2.5 6" />
                          <path d="M10 14v5a3 3 0 0 0 6 0v-5" />
                          <circle cx="16" cy="14" r="1" />
                          <circle cx="10" cy="7" r="0.8" />
                          <circle cx="7.5" cy="8.5" r="0.6" />
                          <circle cx="12.5" cy="8.5" r="0.6" />
                          <path d="M10 11.5c-1.2 0-2-.8-2-1.5s.8-1 2-1 2 .3 2 1-.8 1.5-2 1.5z" />
                        </svg>

                    </td>
                    <td><img src={el?.imgvet} style={{width:"30px"}} alt='error1'/></td>
                    <td>{el?.namevet}</td>
                    <td>{el?.address}</td>
                    <td>{el?.city}</td>
                    <td>{el?.phone}</td>
                    <td>{el?.available}</td>
                    <td>{el?.sourceprofile}</td>
                    {/* <td><button className="del-user" onClick={()=>{dispatch(edituser(el?._id)); alert("The User is Edited"); setping(!ping)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"/></svg></button></td> */}
                    <td>
                        <Editveterinary el={el} ping={ping} setping={setping}/>
                    </td>
                    <td><button className="del-user" onClick={()=>{dispatch(deleteveterinaire(el?._id)); alert("The Veterinary is Deleted"); setping(!ping)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6a8 8 0 0 1 16 0c0 2.5-1 4.5-2.5 6" />
                          <path d="M10 14v5a3 3 0 0 0 6 0v-5" />
                          <circle cx="16" cy="14" r="1" />
                          <line x1="16" y1="2" x2="22" y2="8" />
                          <line x1="22" y1="2" x2="16" y2="8" />
                        </svg>

                        </button>
                    </td>
                  </tr>)}
                </tbody>
              </Table>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
};

export default Dashboard;