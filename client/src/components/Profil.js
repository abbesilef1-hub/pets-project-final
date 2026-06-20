import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edituser, logout, userCurrent } from "../JS/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import './profil.css';

function Profil({ el }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // const handleSave = (e) => {
  //   e.preventDefault(); 
  //   alert("Your Changes hHave Been Successfully Saved !");
  // };

  const [edited, setedited] = useState({
    name:el?.name,
    lastName:el?.lastName,
    address:el?.address,
    phone:el?.phone,
    email:el?.email
    // password:el?.password
  })

  return (
    <div className="myprofil"><svg width="0" height="0">
            <defs>
                <linearGradient id="veterinaireGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6e6465" />   
                    <stop offset="100%" stopColor="#d18a93" /> 
                </linearGradient>
            </defs>
        </svg>
      <div className="profile-page">
        <div className="content">
          <div className="content__cover">
            <div className="content__avatar" />
            <div className="content__bull">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          
          <div className="content__actions">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor" d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z" />
                <path fill="currentColor" d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z" />
              </svg>
              <span>Connect</span>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z" />
                <path fill="currentColor" d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z" />
              </svg>
              <span>Message</span>
            </a>
            {/* Ajout du bouton Déconnexion dans les actions */}
            <button onClick={handleLogout} className="logout-action-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <span>Logout</span>
            </button>
          </div>

          <div className="content__title">
            <h1>{user?.name} {user?.lastName}</h1>
            <p>{user?.address}</p>
            <p>{user?.phone}</p>
            <span>{user?.email}</span>
          </div>

          {/* Remplacement par readOnly pour éviter les erreurs React */}
          <div className="content__description">
            <input type="text" placeholder={user?.name} onChange={(e)=>setedited({...edited, name:e.target.value})}/>
            <input type="text" placeholder={user?.lastName} onChange={(e)=>setedited({...edited, lastName:e.target.value})}/>
            <input type="text" placeholder={user?.address} onChange={(e)=>setedited({...edited, address:e.target.value})}/>
            <input type="text" placeholder={user?.phone} onChange={(e)=>setedited({...edited, phone:e.target.value})}/>
            <input type="text" placeholder={user?.email} onChange={(e)=>setedited({...edited, email:e.target.value})}/>
            <input type="password" value="********" readOnly /> 
          </div>

          <ul className="content__list">
            <li><span>65</span>Friends</li>
            <li><span>43</span>Photos</li>
            <li><span>21</span>Comments</li>
          </ul>

          <div className="content__button">
            {/* <a className="button" href="#" onClick={handleSave}> */}
            <a className="button" href="#" onClick={async (e) => {
    e.preventDefault();

    await dispatch(edituser({ id: user._id, edited }));
    await dispatch(userCurrent());

    alert("Your Changes Have Been Successfully Saved !");
  }}>

    {/* onClick={()=>{dispatch(edituser({id:el?._id, edited})); alert("Your Changes hHave Been Successfully Saved !"); setping(!ping)}} */}
              <div className="button__border" />
              <div className="button__bg" />
              <p className="button__text">Save</p>
            </a>
          </div>
        </div>

        <div className="bg">
          <div>
            <span /><span /><span /><span /><span /><span /><span />
          </div>
        </div>

        <div className="theme-switcher-wrapper" id="theme-switcher-wrapper">
          <span>Themes color</span>
          <ul>
            <li><em className="is-active" data-theme="orange" /></li>
            <li><em data-theme="green" /></li>
            <li><em data-theme="purple" /></li>
            <li><em data-theme="blue" /></li>
          </ul>
        </div>

        <div className="theme-switcher-button" id="theme-switcher-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="currentColor" d="M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Profil;






      {/* <h1>hello {user?.name}</h1>

      <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </button> */}

   

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>