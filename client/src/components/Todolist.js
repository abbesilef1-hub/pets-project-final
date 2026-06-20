import React, { useState } from 'react'
import './todolist.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleterequest } from '../JS/requestSlice';

const Basket = ({ping, setping}) => {
    const requests = useSelector((state)=>state.request.requestlist);
    const user = useSelector((state) => state.user.user);
    const nameuser = user?.name+" "+user?.lastName;
    const dispatch = useDispatch();
    // const [qte, setqte] = useState(1);

    
    const [likedItems, setLikedItems] = useState({});

    const toggleLike = (id) => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: !prev[id] 
        }));
    };

  return (
    <div className='parentbasket'>
        {/* <svg width="0" height="0">
            <defs>
                <linearGradient id="basketGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6e6465" />   
                    <stop offset="100%" stopColor="#d18a93" /> 
                </linearGradient>
            </defs>
        </svg> */}

        <svg width="0" height="0">
            <defs>
                <linearGradient id="veterinaireGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6e6465" />   
                    <stop offset="100%" stopColor="#d18a93" /> 
                </linearGradient>
            </defs>
        </svg>
        <h1 className="titlebasket">To-do List with Pet Care</h1>

        {/* <div className="pawbasket">
            <span></span>
            <div className="paws-bas">
                <svg className="paw-icon" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
                <svg className="paw-icon" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
            </div>
            <span></span>
        </div> */}

        <div className="paw-divider-vet">
            <span></span>

            <div className="paws-vet">
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
            </div>

            <span></span>
        </div>

    <div className="basketcart">
      <div className="titlebag">Pets To-do List</div>
      {requests?.filter((el)=>el?.user===nameuser).map((el)=>
    //   {requests?.map((el)=>
      <div className="item" key={el?._id}>
        
        <div className="imagebasket" >
          <img src={el?.imgpet} alt="" className='impro'/>
        </div>
        <div className="descriptionbasket">
          <h5>{el?.namepet}</h5>
          <h5>{el?.role}</h5>
          <h5>{el?.price} TND</h5>
          <h5><span id='dif'>Owner : </span>{el?.nameowner}</h5>
          <div className='userreq'>
          <h5><span id='dif'>User : </span>{el?.user}</h5>
          <h5><span id='dif2'>Address : </span>{el?.address}</h5>
          <h5><span id='dif2'>Phone : </span>{el?.phone}</h5>
          {/* <h5><span id='dif2'>Date : </span>{el?.date}</h5> */}
          {/* <h5>Date: {el?.date ? new Date(el.date).toLocaleDateString('fr-FR') : "No Date"}</h5> */}
          {/* <h5>Date : {el?.date ? `${new Date(el.date).toLocaleDateString('fr-FR')} à ${new Date(el.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}` : "No Date"}</h5> */}
          <h5>Date : {el?.date ? `${String(el.date).substring(0, 10).split('-').reverse().join('/')} at ${String(el.date).substring(11, 16)}` : "No Date"}</h5>
          </div>
          {/* <h5>{el?.status}</h5> */}
          <h5 className="status-badge-container">
  {el?.status === "Accepted" && (
    <svg className="status-icon icon-accepted" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  )}
  {el?.status === "Pending" && (
    <svg className="status-icon icon-pending" viewBox="0 0 24 24">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  )}
  {el?.status === "Rejected" && (
    <svg className="status-icon icon-rejected" viewBox="0 0 24 24">
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
    </svg>
  )}
  <span>{el?.status}</span>
</h5>
          <h5>{el?.timestamps}</h5>
        </div>
        {/* <div className="quantitybasket"> */}
          {/* <button className="minusbasket" onClick={()=>setqte(qte>1? qte-1 : qte)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
          </button> */}
          {/* <input type="text" defaultValue={1} value={el?.quantity} readOnly/> */}
          {/* <button className="plusbasket" onClick={()=>setqte(qte+1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
          </button> */}
        {/* </div> */}
        {/* <div className="total-price" defaultValue={el?.price}>
            {(el?.price) * (qte || 1)} TND
        </div> */}

        <div className="buttonsbasket">
            <button className={`likebasket ${likedItems[el?._id] ? 'active' : ''}`} onClick={() => toggleLike(el?._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>
            </button>

            <button className="deleterequest" onClick={()=>{dispatch(deleterequest(el?._id)); setping(!ping)}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
            </button>
        </div>

      </div>)
      }
    </div>
  </div>
  )
}

export default Basket