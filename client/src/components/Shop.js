import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './shop.css';
import { getproducts } from '../JS/productSlice';
import ProductDetails from './ProductDetails';

const Shop = ({ ping, setping }) => {
    const products = useSelector((state) => state.product.productlist);
    console.log(products);
    const [category, setcategory] = useState("Toys");
    const [petType, setPetType] = useState("Both");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getproducts());
    }, [dispatch]);
    
    return (
        <div className='parentshop'>
 
            <svg width="0" height="0">
            <defs>
                <linearGradient id="veterinaireGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6e6465" />   
                    <stop offset="100%" stopColor="#d18a93" /> 
                </linearGradient>
            </defs>
            </svg>
            
            <h1 className="title">Pet Products Collection</h1>


            <div className="paw-divider-vet">
            <span></span>

            <div className="paws-vet">
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
            </div>

            <span></span>
        </div>

            {/* PREMIER FILTRE : CATEGORIES */}
            <div className="buttonscateg">
                <button className={category === "Food" ? "active" : ""} onClick={() => setcategory("Food")}>
                    <img src='https://png.pngtree.com/png-vector/20241030/ourmid/pngtree-dog-treats-bone-shaped-biscuits-metal-bowl-colorful-snacks-pet-food-png-image_14168852.png' alt='food'/>
                </button>

                <button className={category === "Toys" ? "active" : ""} onClick={() => setcategory("Toys")}>
                    <img src='https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-pet-chew-toys-isolated-on-a-transparent-background-png-image_15807092.png' alt='toys'/>
                </button>

                <button className={category === "Accessory" ? "active" : ""} onClick={() => setcategory("Accessory")}>
                    <img src='./collierpet2.png' alt='accessory'/>
                </button>
            </div>
            
            <div className="shop-content">
                {/* DEUXIÈME FILTRE */}
                <div className="pet-type">
                    <button className={`pet-type-btn ${petType === "Cat" ? "active-pet" : ""}`} onClick={() => setPetType("Cat")}>
                        <svg viewBox="0 0 640 640"><path d="M96 160C149 160 192 203 192 256L192 341.8C221.7 297.1 269.8 265.6 325.4 257.8C351 317.8 410.6 359.9 480 359.9C490.9 359.9 501.6 358.8 512 356.8L512 544C512 561.7 497.7 576 480 576C462.3 576 448 561.7 448 544L448 403.2L312 512L368 512C385.7 512 400 526.3 400 544C400 561.7 385.7 576 368 576L224 576C171 576 128 533 128 480L128 256C128 239.4 115.4 225.8 99.3 224.2L92.7 223.9C76.6 222.2 64 208.6 64 192C64 174.3 78.3 160 96 160zM565.8 67.2C576.2 58.5 592 65.9 592 79.5L592 192C592 253.9 541.9 304 480 304C418.1 304 368 253.9 368 192L368 79.5C368 65.9 383.8 58.5 394.2 67.2L448 112L512 112L565.8 67.2z"/></svg>
                        Cats
                    </button>

                    <button className={`pet-type-btn ${petType === "Both" ? "active-pet" : ""}`} onClick={() => setPetType("Both")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
                        Both
                    </button>

                    <button className={`pet-type-btn ${petType === "Dog" ? "active-pet" : ""}`} onClick={() => setPetType("Dog")}>
                        <svg viewBox="0 0 640 640"><path d="M64 176C80.6 176 94.2 188.6 95.8 204.7L96.1 211.3C97.8 227.4 111.4 240 128 240L307.1 240L448 300.4L448 544C448 561.7 433.7 576 416 576L384 576C366.3 576 352 561.7 352 544L352 412.7C328 425 300.8 432 272 432C243.2 432 216 425 192 412.7L192 544C192 561.7 177.7 576 160 576L128 576C110.3 576 96 561.7 96 544L96 298.4C58.7 285.2 32 249.8 32 208C32 190.3 46.3 176 64 176zM387.8 32C395.5 32 402.7 35.6 407.4 41.8L424 64L476.1 64C488.8 64 501 69.1 510 78.1L528 96L584 96C597.3 96 608 106.7 608 120L608 144C608 188.2 572.2 224 528 224L464 224L457 252L332.3 198.6L363.9 51.4C366.3 40.1 376.2 32 387.8 32z"/></svg>
                        Dogs
                    </button>
                </div>

                {/* GRILLE DES PRODUITS */}
                <div className='listproducts'>
                    {products?.filter((el) => {
                        const matchesCategory = el?.category === category;
                        // FIX: Tbadlit men petType === "All" l "Both" kima f state mte3ek bch l'affichage yekhdem s7i7
                        const matchesPetType = petType === "All" || el?.petType === petType;
                        return matchesCategory && matchesPetType;
                    }).map((el) => (
                        <div className='informations' key={el._id || el.name}>
                            <div className="imgproduct">
                                <img src={el?.image} alt={el?.name} />
                            </div>
                            <div className="nameproduct">
                                <h3>{el?.name}</h3>
                                <h4>{el?.price}</h4>
                                {/* <button className="boutonview" onClick={() => navigate(`/pet/${el._id}`)}>
                                    View More
                                </button> */}
                                <ProductDetails el={el} ping={ping} setping={setping}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;



