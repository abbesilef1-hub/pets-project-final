import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-parent">
      <div className="footer-container">
        
        {/* BLOCK 1 : Brand, Logo & Description */}
        <div className="part1-footer">
          {/* Integration de ton nouveau logo avec image */}
          <div className="logo">
            <img src="/logofinal.png" alt="Logo" />
            <span>Pet<em>Care</em></span>
          </div>
          <p className="footer-text">
            Pet Care System offers pet adoption and sales for cats and dogs, an online shop for food, toys, and accessories, veterinary information, and helpful resources about pet health and common diseases. 
            <div className='svg-footer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C149 160 192 203 192 256L192 341.8C221.7 297.1 269.8 265.6 325.4 257.8C351 317.8 410.6 359.9 480 359.9C490.9 359.9 501.6 358.8 512 356.8L512 544C512 561.7 497.7 576 480 576C462.3 576 448 561.7 448 544L448 403.2L312 512L368 512C385.7 512 400 526.3 400 544C400 561.7 385.7 576 368 576L224 576C171 576 128 533 128 480L128 256C128 239.4 115.4 225.8 99.3 224.2L92.7 223.9C76.6 222.2 64 208.6 64 192C64 174.3 78.3 160 96 160zM565.8 67.2C576.2 58.5 592 65.9 592 79.5L592 192C592 253.9 541.9 304 480 304C418.1 304 368 253.9 368 192L368 79.5C368 65.9 383.8 58.5 394.2 67.2L448 112L512 112L565.8 67.2zM432 172C421 172 412 181 412 192C412 203 421 212 432 212C443 212 452 203 452 192C452 181 443 172 432 172zM528 172C517 172 508 181 508 192C508 203 517 212 528 212C539 212 548 203 548 192C548 181 539 172 528 172z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 176C80.6 176 94.2 188.6 95.8 204.7L96.1 211.3C97.8 227.4 111.4 240 128 240L307.1 240L448 300.4L448 544C448 561.7 433.7 576 416 576L384 576C366.3 576 352 561.7 352 544L352 412.7C328 425 300.8 432 272 432C243.2 432 216 425 192 412.7L192 544C192 561.7 177.7 576 160 576L128 576C110.3 576 96 561.7 96 544L96 298.4C58.7 285.2 32 249.8 32 208C32 190.3 46.3 176 64 176zM387.8 32C395.5 32 402.7 35.6 407.4 41.8L424 64L476.1 64C488.8 64 501 69.1 510 78.1L528 96L584 96C597.3 96 608 106.7 608 120L608 144C608 188.2 572.2 224 528 224L464 224L457 252L332.3 198.6L363.9 51.4C366.3 40.1 376.2 32 387.8 32zM480 108C469 108 460 117 460 128C460 139 469 148 480 148C491 148 500 139 500 128C500 117 491 108 480 108z"/></svg>
            </div>
          </p>
          <div className="footer-paws-decor">
            <span>🐾</span><span>🐾</span><span>🐾</span>
          </div>
        </div>

        {/* BLOCK 2 : Quick Links */}
        <div className="part2-footer">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pets">Pets</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* BLOCK 3 : Contact Info */}
        <div className="part3-footer">
          <h3>Contact Info</h3>
          <p className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
            +216 75 000 000
          </p>
          <p className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg> 
            Gabes, Tunisia
          </p>
          <p className="contact-hours">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>
            Monday - Saturday : 9:00 - 19:00
          </p>
        </div>

      </div>

      {/* Barre du bas */}
      <div className="footer-bas">
        <div className="footer-petcare">
          <p>&copy; {new Date().getFullYear()} PetCare. All rights reserved. Built with ❤️ in Gabes.</p>
          <div className="secure-payment-info">
            🔒 Secured via <strong>Stripe</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;