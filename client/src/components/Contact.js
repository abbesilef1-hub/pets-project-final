import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire envoyé :', formData);
  };

  return (
    <div className="contact-container">
      <svg width="0" height="0">
            <defs>
                <linearGradient id="veterinaireGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6e6465" />   
                    <stop offset="100%" stopColor="#d18a93" /> 
                </linearGradient>
            </defs>
        </svg>
      <div className="contact-header">
        {/* <h1>Get in <em>Touch</em></h1> */}
        <h1>Get in Touch</h1>
        <div className="paw-divider-vet">
            <span></span>

            <div className="paws-vet">
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
            </div>

            <span></span>
        </div>
        <p>A question about our services or your pet? Write to us!</p>
      </div>

      <div className="contact-content">
        {/* Infos de contact */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p className="info-subtitle-contact">Our team of passionate pet lovers will respond within 24 hours.</p>
          
          <div className="info-item-contact">
            <span className="info-icon-contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
            </span>
            <div>
              <h3>Phone</h3>
              <p>+216 75 000 000</p>
            </div>
          </div>

          <div className="info-item-contact">
            <span className="info-icon-contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
            </span>
            <div>
              <h3>Our Shop</h3>
              <p>22 Animals Street, GABES, TUNISIA</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon-contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>
            </span>
            <div>
              <h3>Hours of operation</h3>
              <p>Monday - Saturday: 9:00 - 19:00</p>
            </div>
          </div>
          
          {/* AJOUT : Bouton d'urgence Appel direct */}
          <a href="tel:+21675000000" className="btn-emergency-contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M376 32C504.1 32 608 135.9 608 264C608 277.3 597.3 288 584 288C570.7 288 560 277.3 560 264C560 162.4 477.6 80 376 80C362.7 80 352 69.3 352 56C352 42.7 362.7 32 376 32zM384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224zM352 152C352 138.7 362.7 128 376 128C451.1 128 512 188.9 512 264C512 277.3 501.3 288 488 288C474.7 288 464 277.3 464 264C464 215.4 424.6 176 376 176C362.7 176 352 165.3 352 152zM176.1 65.4C195.8 60 216.4 70.1 224.2 88.9L264.7 186.2C271.6 202.7 266.8 221.8 252.9 233.2L208.8 269.3C241.3 340.9 297.8 399.3 368.1 434.2L406.7 387C418 373.1 437.1 368.4 453.7 375.2L551 415.8C569.8 423.6 579.9 444.2 574.5 463.9L573 469.4C555.4 534.1 492.9 589.3 416.6 573.2C241.6 536.1 103.9 398.4 66.8 223.4C50.7 147.1 105.9 84.6 170.5 66.9L176 65.4z"/></svg> 
            Emergency Call
          </a>

          {/* SÉPARATION ET RÉSEAUX SOCIAUX */}
          <div className="social-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V256H12v-54.7h68v-39.7c0-67.3 41.1-104 101.2-104 28.8 0 53.6 2.1 60.8 3v70.5h-41.8c-32.7 0-39 15.5-39 38.3V201.3h78l-10.2 54.7h-67.8v143.4H80z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM402.4 402.4c-21.6 21.6-55.9 28-87.4 29.5-33.9 1.6-136.2 1.6-170.1 0-31.5-1.5-65.7-7.9-87.4-29.5s-28-55.9-29.5-87.4c-1.6-33.9-1.6-136.2 0-170.1 1.5-31.5 7.9-65.7 29.5-87.4s55.9-28 87.4-29.5c33.9-1.6 136.2-1.6 170.1 0 31.5 1.5 65.7 7.9 87.4 29.5s28 55.9 29.5 87.4c1.6 33.9 1.6 136.2 0 170.1-1.5 31.5-7.9 65.7-29.5 87.4z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.33V0h88a121.18 121.18 0 0 0 13.66 59.1A119.5 119.5 0 0 0 384 109.91v100z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group-contact">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ex: Ilef Abbes" required />
          </div>

          <div className="form-group-contact">
            <label htmlFor="email">E-mail Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ex: ilef@gmail.com" required />
          </div>

          <div className="form-group-contact">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Ex: Question about pensions" required />
          </div>

          <div className="form-group-contact">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Dites-nous tout sur les besoins de votre petite boule de poils..." required></textarea>
          </div>

          {/* AJOUT : Case à cocher Newsletter */}
          <div className="form-checkbox-contact">
            <input 
              type="checkbox" 
              id="newsletter" 
              name="newsletter" 
              checked={formData.newsletter} 
              onChange={handleChange} 
            />
            <label htmlFor="newsletter">I want to receive tips and news for my pet <span className="pink-paw">🐾</span></label>
          </div>

          <button type="submit" className="btn-submit-contact" onClick={() => alert('Votre message a été envoyé avec succès ! 🐾')}>Send The Message</button>
        </form>

        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52463.85694723049!2d10.063816524108846!3d33.87693489381755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1257410065a7f9ad%3A0xe9656e676100346c!2sGab%C3%A8s!5e0!3m2!1sfr!2stn!4v1710000000000!5m2!1sfr!2stn" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Gabes Map Shop Location">
          </iframe>
        </div>
        {/* AJOUT : Bouton d'itinéraire GPS */}
          <a href="https://maps.google.com/?q=Gabes" target="_blank" rel="noreferrer" className="btn-gps-contact">
            🚀 Open in Google Maps (Get Directions)
          </a>

      </div>
      <div>
        {/* <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Circonscription_de_Gab%C3%A8s.png'/> */}
      </div>

      <div className="app-contact">
  <div className="img-app-contact">
    <img src="https://petszone.wpenginepowered.com/wp-content/uploads/2024/05/appstore-bg.png" alt="contact-pet"/>
  </div>

  <div className="text-app-contact">
    <h6>Get us on your hands</h6>
    <h4>Download our mobile app to get special offers and follow our social updates!</h4>
    <p>Available now for all iOS and Android devices.</p>
    
    <div className="app-contact-buttons">
      {/* Bouton App Store */}
      <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="store-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
      </a>
      
      {/* Bouton Google Play Store */}
      <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="store-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
      </a>
    </div>
  </div>
</div>
    </div>
  );
}

export default Contact;