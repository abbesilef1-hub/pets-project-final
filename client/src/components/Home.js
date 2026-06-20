import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (

    <>
    <div className="home-welfare-section">

      {/* LEFT CONTENT: Comprehensive Pet Services */}
      <div className="welfare-content-home">
        
        {/* Badge circulaire supérieur (Fille + Chien) */}
        <div className="avatar-badge-wrapper-home">
          <img 
            src="https://thumbs.dreamstime.com/b/petite-fille-avec-le-chiot-rouge-d-isolement-sur-le-fond-blanc-amiti%C3%A9-d-animal-familier-d-enfant-86581323.jpg" 
            alt="Pet Owner" 
            className="avatar-badge-img-home"
          />
        </div>


          <h1 className="welfare-title-home">
  Your Ultimate Pet <br />
  Care 
  <span className="inline-cat-badge-home">
    <img 
      src='https://static.vecteezy.com/system/resources/thumbnails/075/521/526/small/expressive-grey-domestic-cat-with-wide-open-mouth-and-excited-expression-isolated-on-transparent-background-png.png'
      alt="Small cat badge" 
    />
  </span> 
  Shopping Hub
</h1>

       
        <p className="welfare-description-home">
          Find expert veterinary care, adopt your new best friend, buy healthy pets, 
          and shop premium food or accessories—all in one trusted platform designed for animal lovers.
        </p>

       
        <div className="features-grid-home">
          <div className="feature-item-home">
            <span className="paw-icon-home">🩺</span>
            <span className="feature-text-home">Expert Vet Care</span>
          </div>
          <div className="feature-item-home">
            <span className="paw-icon-home">🏠</span>
            <span className="feature-text-home">Pet Adoption</span>
          </div>
          <div className="feature-item-home">
            <span className="paw-icon-home">🐾</span>
            <span className="feature-text-home">Buy Healthy Pets</span>
          </div>
          <div className="feature-item-home">
            <span className="paw-icon-home">🛒</span>
            <span className="feature-text-home">Premium Pet Shop</span>
          </div>
        </div>

        <button className="btn-explore-welfare-home" onClick={() => navigate('/shop')}>
          Explore Our Services →
        </button>
      </div>

      <div className="welfare-gallery-home">
  
        <div className="gallery-card card-tall-home">
          <img 
            src="https://petszone.wpenginepowered.com/wp-content/uploads/2024/06/home-2-slider-gallery-image.png" 
            alt="White elegant cat" 
          />
        </div>

        <div className="gallery-card card-short-home">
          <img 
            src="https://petszone.wpenginepowered.com/wp-content/uploads/2024/06/home-2-slider-gallery-image-3a.jpg" 
            alt="Curious ginger kitten" 
          />
        </div>
      </div>

    </div>



          {/* --- NEW ACHIEVEMENTS SECTION (Ref: home2.PNG) --- */}
<div className="achievements-section-home">
  <div className="achievements-container-home">
    
    <div className="achievements-badge-top-home">

      <svg 
        className="achievements-paw-svg-home" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M12 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4.5-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-10-3c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm11 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
      </svg>
      <p className="achievements-subtitle-home">WHAT WE DO</p>
    </div>

    <h2 className="achievements-title-home">Our Successful Achievements</h2>

    <div className="achievements-grid-home">

      <div className="achievement-card-home">
  <div className="ach-icon-wrapper-home ach-blue-home">

    <svg 
      className="ach-icon-svg-home" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/>
    </svg>
  </div>
  <h3 className="ach-number-home">15k+</h3>
  <p className="ach-label-home">Products Sold</p>
</div>

<div className="achievement-card-home">
  <div className="ach-icon-wrapper-home ach-orange-home">

    <svg 
      className="ach-icon-svg-home" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM12 7c-.55 0-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c0-.55-.45-1-1-1h-2V8c0-.55-.45-1-1-1z" style={{display: 'none'}} /> {/* reference fallback */}
    
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      <path d="M12 13.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-3-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4.5-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#ffffff"  />
    </svg>
  </div>
  <h3 className="ach-number-home">2.5k</h3>
  <p className="ach-label-home">Pets Adopted</p>
</div>

<div className="achievement-card-home">
  <div className="ach-icon-wrapper-home ach-yellow-home">
  
    <svg 
      className="ach-icon-svg-home" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c-4.41 0-8 3.59-8 8v2c0 2.21 1.79 4 4 4h1v-6H5v-2c0-3.86 3.14-7 7-7s7 3.14 7 7v2h-4v6h1c2.21 0 4-1.79 4-4v-2c0-4.41-3.59-8-8-8zm-2 13H9v5c0 .55.45 1 1 1s1-.45 1-1v-5zm5 0h-1v5c0 .55.45 1 1 1s1-.45 1-1v-5z"/>
      <path d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
    </svg>
  </div>
  <h3 className="ach-number-home">120+</h3>
  <p className="ach-label-home">Expert Vets</p>
</div>


<div className="achievement-card-home">
  <div className="ach-icon-wrapper-home ach-cyan-home">


    <svg 
      className="ach-icon-svg-home" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3L2 12h3v8h5v-5h4v5h5v-8h3L12 3zm0 10.5c-1.1 0-2-.9-2-2s2-3.5 2-3.5 2 2.4 2 3.5-.9 2-2 2z"/>
    </svg>
  </div>
  <h3 className="ach-number-home">4.8k</h3>
  <p className="ach-label-home">Happy Pets Placed</p>
</div>

    </div>
  </div>
</div>





{/* --- SECTION: INFINITE ADS MARQUEE */}
<div className="promo-marquee-section-home">
  <div className="marquee-wrapper-home">
    <div className="marquee-track-home">
      {/* cart 1 */}
      <div className="promo-card-home card-orange-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Nourishing Drinks For Dogs</h2>
          <p>Choose all 4 flavors and receive coupons</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-dog-glasses-home">
          <img 
            src='https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-smiling-cavalier-king-charles-spaniel-dog-with-tropical-drink-under-the-png-image_15979779.png'
            alt="Nourishing Drinks Dog with sunglasses" 
          />
        </div>
      </div>

      {/* cart 2*/}
      <div className="promo-card-home card-purple-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Cats <br /> Love ❤️</h2>
          <p>Amet consectetur adipiscing elit duis tristique sollicitudin</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-cat-look-home">
          <img src='https://png.pngtree.com/png-clipart/20240219/original/pngtree-cute-cat-love-heart-png-image_14354560.png' alt="Cats Love"/>
        </div>
      </div>

      {/* cart 3*/}
      <div className="promo-card-home card-blue-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <span className="badge-bogo-home">BUY 1 GET 1</span>
          <p>Risus nec feugiat in fermentum posuere urna.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-corgi-jump-home">
          <img 
            src='https://png.pngtree.com/png-vector/20251203/ourmid/pngtree-happy-corgi-dog-jumping-excited-png-image_18099904.webp'
            alt="Buy 1 Get 1 Happy Corgi" 
          />
        </div>
      </div>

      {/* cart 4 */}
      <div className="promo-card-home card-green-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Get Them Wagging & Loving</h2>
          <p>Shop all 4 flavours & Get accessory free</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-food-bowl-home">
          <img 
            src='https://png.pngtree.com/png-clipart/20250320/original/pngtree-white-cat-with-pink-roses-and-butterflies-png-image_19204123.png'
            alt="White elegant cat looking forward" 
          />
        </div>
      </div>

      {/* cart 5 */}
      <div className="promo-card-home card-orange-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Premium Toys Pack</h2>
          <p>Up to 30% OFF on all interactive smart pet toys.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-toy-dog-home">
          <img 
            src="https://png.pngtree.com/png-clipart/20250214/original/pngtree-golden-retriever-dog-playing-with-a-ball-isolated-png-image_20439674.png" 
            alt="Happy Golden Dog playing" 
          />
        </div>
      </div>

      {/* cart 6 */}
      <div className="promo-card-home card-purple-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Fun Cat Toys & Gear</h2>
          <p>Premium scratchers, teasers, and cozy beds for your feline friend.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-cat-toys-home">
          <img 
            src="https://png.pngtree.com/png-vector/20260520/ourmid/pngtree-cute-calico-cat-playing-with-colorful-yarn-balls-and-needles-png-image_19266714.webp" 
            alt="Cute cat playing with accessories" 
          />
        </div>
      </div>

      {/* cart 7 */}
      <div className="promo-card-home card-blue-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <span className="badge-bogo-home">NEW ARRIVAL</span>
          <p>100% Organic treats tailored for sensitive stomachs.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-treats-cat-home">
          <img 
            src="https://png.pngtree.com/png-clipart/20240806/original/pngtree-a-cat-sits-in-bowl-of-food-png-image_15714608.png" 
            alt="Cute Kitten with treat" 
          />
        </div>
      </div>

      {/* cart 8 */}
      <div className="promo-card-home card-green-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Luxury Spa & Grooming</h2>
          <p>Shampoos and brushes to keep their coat shining bright.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-spa-dog-home">
          <img 
            src="https://png.pngtree.com/png-vector/20231028/ourmid/pngtree-groomed-pomeranian-dog-sitting-and-wearing-reindeer-antlers-headband-and-a-png-image_10349687.png" 
            alt="Clean groomed cute dog" 
          />
        </div>
      </div>


      {/* =======================================================================
          Infinite Loop carts
          ======================================================================= */}

      {/* loop art 1 */}
      <div className="promo-card-home card-orange-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Nourishing Drinks For Dogs</h2>
          <p>Choose all 4 flavors and receive coupons</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-dog-glasses-home">
          <img src='https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-smiling-cavalier-king-charles-spaniel-dog-with-tropical-drink-under-the-png-image_15979779.png' alt="Nourishing Drinks Dog" />
        </div>
      </div>

      {/* loop cart 2 */}
      <div className="promo-card-home card-purple-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Cats <br /> Love ❤️</h2>
          <p>Amet consectetur adipiscing elit duis tristique sollicitudin</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-cat-look-home">
          <img src='https://png.pngtree.com/png-clipart/20240219/original/pngtree-cute-cat-love-heart-png-image_14354560.png' alt="Cats Love"/>
        </div>
      </div>

      {/* loop cart 3 */}
      <div className="promo-card-home card-blue-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <span className="badge-bogo-home">BUY 1 GET 1</span>
          <p>Risus nec feugiat in fermentum posuere urna.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-corgi-jump-home">
          <img src='https://png.pngtree.com/png-vector/20251203/ourmid/pngtree-happy-corgi-dog-jumping-excited-png-image_18099904.webp' alt="Buy 1 Get 1 Happy Corgi" />
        </div>
      </div>

      {/* loop cart 4 */}
      <div className="promo-card-home card-green-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Get Them Wagging & Loving</h2>
          <p>Shop all 4 flavours & Get accessory free</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-food-bowl-home">
          <img src='https://png.pngtree.com/png-clipart/20250320/original/pngtree-white-cat-with-pink-roses-and-butterflies-png-image_19204123.png' alt="White elegant cat" />
        </div>
      </div>

      {/* loop cart 5 */}
      <div className="promo-card-home card-orange-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Premium Toys Pack</h2>
          <p>Up to 30% OFF on all interactive smart pet toys.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-toy-dog-home">
          <img src="https://png.pngtree.com/png-clipart/20250214/original/pngtree-golden-retriever-dog-playing-with-a-ball-isolated-png-image_20439674.png" alt="Happy Golden Dog" />
        </div>
      </div>

      {/* loop cart 6 */}
      <div className="promo-card-home card-purple-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Fun Cat Toys & Gear</h2>
          <p>Premium scratchers, teasers, and cozy beds for your feline friend.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-cat-toys-home">
          <img src="https://png.pngtree.com/png-vector/20260520/ourmid/pngtree-cute-calico-cat-playing-with-colorful-yarn-balls-and-needles-png-image_19266714.webp" alt="Cute cat playing" />
        </div>
      </div>

      {/* loop cart 7 */}
      <div className="promo-card-home card-blue-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <span className="badge-bogo-home">NEW ARRIVAL</span>
          <p>100% Organic treats tailored for sensitive stomachs.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-treats-cat-home">
          <img src="https://png.pngtree.com/png-clipart/20240806/original/pngtree-a-cat-sits-in-bowl-of-food-png-image_15714608.png" alt="Cute Kitten" />
        </div>
      </div>

      {/* loop cart 8 */}
      <div className="promo-card-home card-green-pastel-home">
        <div className="card-bg-shape-home"></div>
        <div className="card-bg-shape-small-home"></div>
        <div className="promo-text-side-home">
          <h2>Luxury Spa & Grooming</h2>
          <p>Shampoos and brushes to keep their coat shining bright.</p>
          <div className="card-action-btn-home">
            <span>Shop Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div className="promo-img-side-home pet-spa-dog-home">
          <img src="https://png.pngtree.com/png-vector/20231028/ourmid/pngtree-groomed-pomeranian-dog-sitting-and-wearing-reindeer-antlers-headband-and-a-png-image_10349687.png" alt="Clean groomed dog" />
        </div>
      </div>

    </div>
  </div>
</div>





{/* ==========================================================================
   ✨ SECTION: WHY CHOOSE US ✨
   ========================================================================== */}
<section className="choose-section-home">
  <div className="services-container-home">
    
    <div className="choose-header-home">
      <div className="choose-badge-top-home">

        <svg className="choose-paw-svg-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 14.5s-2.5-1.5-2.5-3c0-1 .8-1.5 1.5-1.5.5 0 1 .3 1 .8.0-.5.5-.8 1-.8.7 0 1.5.5 1.5 1.5 0 1.5-2.5 3-2.5 3z" fill="currentColor" stroke="none" />
        </svg>       

        <span className="choose-subtitle-home">WHY CHOOSE US</span>
      </div>
      <h2 className="choose-title-main-home">Everything Your Pet Deserves</h2>
    </div>

    <div className="choose-grid-home">
      {/* cart 1 */}
      <div className="choose-card-item-home">
        <div className="choose-icon-wrapper-home">
          <div className="choose-blob-bg-home blob-orange-home"></div>

          <svg className="choose-icon-svg-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M6 18h12a1 1 0 0 1 1 1v1H5v-1a1 1 0 0 1 1-1z" />
            <path d="M12 14.5c-1.1 0-2-.7-2-1.5s.9-1.5 2-1.5 2 .7 2 1.5-.9 1.5-2 1.5z" fill="currentColor" />
            <circle cx="9" cy="10" r="0.8" fill="currentColor" />
            <circle cx="11" cy="8.5" r="0.8" fill="currentColor" />
            <circle cx="13" cy="8.5" r="0.8" fill="currentColor" />
            <circle cx="15" cy="10" r="0.8" fill="currentColor" />
          </svg>

        </div>
        <h3>Pet Boarding</h3>
        <p>A luxury staycation for your furry friends with 24/7 care, cozy beds, and daily playtime schedules.</p>
      </div>

      {/* cart 2 */}
      <div className="choose-card-item-home">
        <div className="choose-icon-wrapper-home">
          <div className="choose-blob-bg-home blob-purple-home"></div>

          <svg className="choose-icon-svg-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14c0-2 1-3 3-3s3 1 3 3v4H4v-4z" />
            <path d="M5 11l-1-2 .5-.5.5 1.5" />
            <circle cx="6.5" cy="13.5" r="0.5" fill="currentColor" />
            <circle cx="4" cy="14.5" r="0.5" fill="currentColor" />
            <path d="M14 13c0-2 1.5-3 3.5-3s3.5 1 3.5 3v5h-7v-5z" />
            <path d="M19.5 10l1-2-.5-.5-.5 1.5" />
            <circle cx="17.5" cy="12.5" r="0.5" fill="currentColor" />
            <circle cx="21" cy="13.5" r="0.5" fill="currentColor" />
            <path d="M12 7V4M12 9v1M10 6l-2-2M14 6l2-2" />
            <path d="M2 20h20" />
          </svg>

        </div>
        <h3>Dog Daycare</h3>
        <p>Socialization, energetic group activities, and brain games managed by certified pet behaviorists.</p>
      </div>

      {/* cart 3 */}
      <div className="choose-card-item-home">
        <div className="choose-icon-wrapper-home">
          <div className="choose-blob-bg-home blob-blue-home"></div>

          <svg className="choose-icon-svg-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18h18l-1.5-5.5A2 2 0 0 0 17.5 11h-11a2 2 0 0 0-2 1.5L3 18z" />
            <path d="M2 21h20" />
            <path d="M12 6c1.5-1.5 3.5-1.5 4.5-.5s1 3-.5 4.5l-4 4-4-4c-1.5-1.5-1.5-3.5-.5-4.5s3-.5 4.5l.5.5z" />
            <path d="M9.5 8.5l5 5" />
            <path d="M4 6a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor" />
          </svg>

        </div>
        <h3>Premium Pet Food</h3>
        <p>Tailored organic nutrition and top-tier clinical diets carefully selected for all breeds and ages.</p>
      </div>

      {/* cart 4 */}
      <div className="choose-card-item-home">
        <div className="choose-icon-wrapper-home">
          <div className="choose-blob-bg-home blob-green-home"></div>

          <svg className="choose-icon-svg-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            <path d="M12 8v8M9 12h6" />
            <circle cx="7" cy="7" r="1" fill="currentColor" />
            <circle cx="17" cy="7" r="1" fill="currentColor" />
          </svg>

        </div>
        <h3>Veterinary Care</h3>
        <p>Routine health checkups, preventative vaccinations, and expert medical support anytime you need.</p>
      </div>

      {/* cart 5 */}
      <div className="choose-card-item-home">
        <div className="choose-icon-wrapper-home">
          <div className="choose-blob-bg-home blob-yellow-home"></div>
        
          <svg className="choose-icon-svg-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="9" r="6" />
            <path d="M9 14.5l-2 7.5 5-2 5 2-2-7.5" /> 
            <path d="M12 11c-.6 0-1-.4-1-.8s.4-.8 1-.8 1 .4 1 .8-.4.8-1 .8z" fill="currentColor" />
            <circle cx="10" cy="8" r="0.5" fill="currentColor" />
            <circle cx="11.2" cy="7" r="0.5" fill="currentColor" />
            <circle cx="12.8" cy="7" r="0.5" fill="currentColor" />
            <circle cx="14" cy="8" r="0.5" fill="currentColor" />
          </svg>

        </div>
        <h3>Pet Training</h3>
        <p>Positive reinforcement techniques to improve manners, obedience, and off-leash confidence.</p>
      </div>

      {/* cart 6 */}
      <div className="choose-card-item-home">
        <div className="choose-icon-wrapper-home">
          <div className="choose-blob-bg-home blob-pink-home"></div>

          <svg className="choose-icon-svg-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="9.8" y1="8.5" x2="20" y2="19" />
            <line x1="9.8" y1="15.5" x2="20" y2="5" />
            <path d="M14 9h4M14 12h5M14 15h4" />
            <path d="M19 3l.5 1 .5-1-.5-1z" fill="currentColor" stroke="none" />
            <path d="M21 21l.5 1 .5-1-.5-1z" fill="currentColor" stroke="none" />
          </svg>

        </div>
        <h3>Dog Grooming</h3>
        <p>Relaxing baths, custom breed standard haircuts, nail trimming, and premium ear cleaning care.</p>
      </div>

    </div>
  

  </div>
</section>



    <div className="choose-image-pet-home">
      {/* <img 
        src="https://png.pngtree.com/png-clipart/20241124/original/pngtree-dogs-and-cats-png-image_17289951.png"  
        alt="Cute Pets" 
        className="pets-bottom-img-home" 
      /> */}

      {/* <img 
        src="./pets-groupe.png"  
        alt="Cute Pets" 
        className="pets-bottom-img-home" 
      /> */}

      {/* <img 
        src='./pets2.png'
        alt="Cute Pets" 
        className="pets-bottom-img-home"
      /> */}

      {/* <img
        src='https://png.pngtree.com/png-vector/20240808/ourmid/pngtree-lots-of-beautiful-black-and-white-brown-kittens-puppies-png-image_13412394.png'
        alt="Cute Pets" 
        className="pets-bottom-img-home"
      /> */}

      <img 
      src='./pets3.png'
      alt="Cute Pets" 
        className="pets-bottom-img-home"
        />
    </div>

    </>
  );
};

export default Home;