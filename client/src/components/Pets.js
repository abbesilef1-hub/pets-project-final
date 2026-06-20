import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import './pets.css';
import PetDetails from './PetDetails';

const Shop = ({ping, setping})=>{
    const pets = useSelector((state)=>state.pet.petlist);
    console.log(pets);
    const [category, setcategory] = useState("Cat");
    const [search, setSearch] = useState("");

    const filteredPets = pets?.filter((el) => {
        const searchLower = search.toLowerCase();
        const matchesSearch =
            el?.race?.toLowerCase().includes(searchLower) ||
            el?.role?.toLowerCase().includes(searchLower) ||
            el?.name?.toLowerCase().includes(searchLower);
        const matchesCategory = el?.category === category;
        return matchesSearch && matchesCategory;
    });

    // const filteredPets = pets
    //     ?.filter((el) => el.category === category)
    //     ?.filter((el) => role === "All" ? true : el.role === role);
  return (
    <div className='parentpet'>
        <svg width="0" height="0">
            {/* <defs>
                <linearGradient id="petGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6e6465" />   
                    <stop offset="100%" stopColor="#d18a93" /> 
                </linearGradient>
            </defs> */}

            <defs>
                <linearGradient id="veterinaireGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6e6465" />   
                    <stop offset="100%" stopColor="#d18a93" /> 
                </linearGradient>
            </defs>
        </svg>

        <div className="search-top-row">
            <div className="search-container">
                <input type="text" placeholder="Search by Race or Role..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-bar"/>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M310.6 194.3L243.4 222.5L243.4 107.2L188.7 297.5L243.4 273.3L243.4 403.6L310.6 194.3zM227.4 97.6L226.1 102.3L210.9 155.2C170.6 170.7 142 209.8 142 255.5C142 307.8 176.3 351.4 225.4 361L225.4 414.6C147.5 404.1 90 336.4 90 255.6C90 175.1 149.8 108.4 227.4 97.6zM538.8 544.8C527.6 556 515.7 557.1 510.2 555.3C504.8 553.5 483.1 535.4 449.8 510.9C416.5 486.3 416.2 475.2 406.8 454.2C397.4 433.3 376.4 411.6 349.3 401.8L339.6 387.1C314.9 404 286.6 414 258.3 415.8L260.4 409.2L276.3 359.7C322.8 347.8 357.2 305.7 357.2 255.5C357.2 201 318.8 153.4 261.2 148.4L261.2 96.3C344.4 101.4 410 170.8 410 255.6C410 289.2 398.8 320.3 381 346L395.6 355.6C405.4 382.7 427.1 403.6 448 413C468.9 422.4 480.2 422.7 504.8 456C529.4 489.2 547.5 510.9 549.3 516.3C551.1 521.7 550 533.6 538.8 544.8z"/></svg>
                </button>
            </div>
        </div>

        <h1 className="pets-title">Discover Pets</h1>


        <div className="paw-divider-vet">
            <span></span>

            <div className="paws-vet">
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
                <svg className="paw-icon-vet" viewBox="0 0 640 640"><path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/></svg>
            </div>

            <span></span>
        </div>

        <div className="buttonspet">
            {/* <button onClick={()=>setcategory("Cat")} title="Cats" id='petbouton'><svg xmlns="http://www.w3.org/2000/svg" fill="url(#petGradient)" viewBox="0 0 640 640"><path d="M96 160C149 160 192 203 192 256L192 341.8C221.7 297.1 269.8 265.6 325.4 257.8C351 317.8 410.6 359.9 480 359.9C490.9 359.9 501.6 358.8 512 356.8L512 544C512 561.7 497.7 576 480 576C462.3 576 448 561.7 448 544L448 403.2L312 512L368 512C385.7 512 400 526.3 400 544C400 561.7 385.7 576 368 576L224 576C171 576 128 533 128 480L128 256C128 239.4 115.4 225.8 99.3 224.2L92.7 223.9C76.6 222.2 64 208.6 64 192C64 174.3 78.3 160 96 160zM565.8 67.2C576.2 58.5 592 65.9 592 79.5L592 192C592 253.9 541.9 304 480 304C418.1 304 368 253.9 368 192L368 79.5C368 65.9 383.8 58.5 394.2 67.2L448 112L512 112L565.8 67.2zM432 172C421 172 412 181 412 192C412 203 421 212 432 212C443 212 452 203 452 192C452 181 443 172 432 172zM528 172C517 172 508 181 508 192C508 203 517 212 528 212C539 212 548 203 548 192C548 181 539 172 528 172z"/></svg></button>
            <button onClick={()=>setcategory("Dog")} title="Dogs" id='petbouton'><svg xmlns="http://www.w3.org/2000/svg" fill="url(#petGradient)" viewBox="0 0 640 640"><path d="M64 176C80.6 176 94.2 188.6 95.8 204.7L96.1 211.3C97.8 227.4 111.4 240 128 240L307.1 240L448 300.4L448 544C448 561.7 433.7 576 416 576L384 576C366.3 576 352 561.7 352 544L352 412.7C328 425 300.8 432 272 432C243.2 432 216 425 192 412.7L192 544C192 561.7 177.7 576 160 576L128 576C110.3 576 96 561.7 96 544L96 298.4C58.7 285.2 32 249.8 32 208C32 190.3 46.3 176 64 176zM387.8 32C395.5 32 402.7 35.6 407.4 41.8L424 64L476.1 64C488.8 64 501 69.1 510 78.1L528 96L584 96C597.3 96 608 106.7 608 120L608 144C608 188.2 572.2 224 528 224L464 224L457 252L332.3 198.6L363.9 51.4C366.3 40.1 376.2 32 387.8 32zM480 108C469 108 460 117 460 128C460 139 469 148 480 148C491 148 500 139 500 128C500 117 491 108 480 108z"/></svg></button> */}
            <button className={category === "Cat" ? "active" : ""} onClick={() => setcategory("Cat")}>
                {/* 🐱 */}
                <img src='https://png.pngtree.com/png-vector/20260330/ourmid/pngtree-cute-kawaii-cat-logo-simple-vector-design-png-image_19016059.webp' alt='cat'></img>
            </button>

            <button className={category === "Dog" ? "active" : ""} onClick={() => setcategory("Dog")}>
                {/* 🐶 */}
                <img src='https://png.pngtree.com/png-clipart/20240218/original/pngtree-3d-white-color-dog-image-png-image_14353826.png' alt='dog'></img>
            </button>
        </div>

        <div className='listpetss'>
            {/* {pets?.filter((el)=>el?.category==category).map((el)=> ( */}
            {filteredPets?.map((el) => (
            
            <div className='details' key={el.id || el.name}>
                        <div className="img-container">
                            <img src={el?.image} alt={el?.name} />
                            {/* Un petit badge visuel pour le rôle (Sell / Adoption) */}
                            <span className={`badge ${el?.role === "Sell" ? "badge-sell" : "badge-adopt"}`}>
                                {el?.role}
                            </span>
                        </div>
                        {/* <div className="card-content"> */}
                        <div className="cardpet">
                            <h3>{el?.name}</h3>
                            <div className="info-row">
                                <span><strong>Race:</strong> {el?.race}</span>
                            </div>
                            <div className="price-tag">
                                {el?.role === "Sell" ? `${el?.price} TND` : "Free Adoption"}
                            </div>
                            {/* <button className="view" onClick={() => navigate(`/pet/${el._id}`)}>View More</button> */}
                            <PetDetails el={el} ping={ping} setping={setping}/>
                        </div>
                    </div>
            ))}
        </div>


    </div>
  )
}

export default Shop