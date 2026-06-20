import React, { useState } from 'react';
import './blog.css';

const Blog = () => {
  const [filter, setFilter] = useState('cat');
  const [searchTerm, setSearchTerm] = useState('');
  
  // État pour gérer l'affichage du Modal d'urgence (Option 2)
  const [selectedEmergency, setSelectedEmergency] = useState(null);

  // 1. STATE : Guide Médical
  var petDiseases = [
    // --- DOG DISEASES ---
    {
      id: 1,
      type: "dog",
      name: "Parvovirus",
      symptoms: "Severe vomiting, bloody diarrhea, extreme lethargy, dehydration.",
      treatment: "Intensive IV fluids, antibiotics for secondary infections, anti-nausea medication.",
      prevention: "DHPP Vaccine sequence starting at 6-8 weeks."
    },
    {
      id: 3,
      type: "dog",
      name: "Kennel Cough",
      symptoms: "Strong, persistent honking cough, gagging, runny nose.",
      treatment: "Cough suppressants, rest, bronchodilators, or antibiotics if bacterial.",
      prevention: "Bordetella vaccine (intranasal or injectable)."
    },
    {
      id: 5,
      type: "dog",
      name: "Rabies",
      symptoms: "Fever, aggression, excessive drooling, foaming at the mouth, paralysis.",
      treatment: "No cure once symptoms appear. Fatal disease.",
      prevention: "Mandatory Rabies Vaccination."
    },
    {
      id: 7,
      type: "dog",
      name: "Canine Distemper",
      symptoms: "Pus-like eye discharge, fever, nasal discharge, coughing, seizures.",
      treatment: "Supportive care, fluids, medications to control seizures.",
      prevention: "Core DHPP Vaccine."
    },
    {
      id: 9,
      type: "dog",
      name: "Fleas & Ticks ",
      symptoms: "Intense scratching, biting at skin, hair loss, red bumps.",
      treatment: "Oral chews (Bravecto, NexGard) or topical spot-ons.",
      prevention: "Strict monthly preventive treatments."
    },

    // --- CAT DISEASES ---
    {
      id: 2,
      type: "cat",
      name: "Upper Respiratory Infection ",
      symptoms: "Sneezing, runny nose, conjunctivitis, watery eyes, fever, loss of appetite.",
      treatment: "L-Lysine supplements, antibiotic eye drops, humidified air.",
      prevention: "FVRCP vaccine series."
    },
    {
      id: 4,
      type: "cat",
      name: "Feline Panleukopenia",
      symptoms: "High fever, bloody diarrhea, severe vomiting, sudden collapse.",
      treatment: "Aggressive supportive hospital care, blood transfusions if severe.",
      prevention: "Core feline vaccination (FVRCP)."
    },
    {
      id: 6,
      type: "cat",
      name: "Feline Leukemia Virus (FeLV)",
      symptoms: "Weight loss, poor coat condition, progressive weakness, pale gums.",
      treatment: "Symptomatic treatment, managing secondary infections.",
      prevention: "FeLV vaccine and keeping infected cats indoors."
    },
    {
      id: 8,
      type: "cat",
      name: "Ringworm",
      symptoms: "Circular bald patches, flaky skin, mild itching.",
      treatment: "Antifungal shampoos, topical ointments, oral antifungal meds.",
      prevention: "Regular cleaning of bedding and minimizing contact with infected pets."
    },
    {
      id: 10,
      type: "cat",
      name: "Fleas & Ticks",
      symptoms: "Over-grooming, scratching, scabs around the neck and back.",
      treatment: "Cat-safe spot-on treatments (Frontline, Advantage). Never use dog products!",
      prevention: "Regular monthly indoor/outdoor parasite prevention."
    },
    {
      id: 11,
      type: "dog",
      name: "Lyme Disease",
      symptoms: "Fever, lameness, swelling in joints, lethargy, loss of appetite.",
      treatment: "Course of antibiotics (typically doxycycline), pain management.",
      prevention: "Tick prevention, Lyme vaccination for high-risk dogs."
    },
    {
      id: 12,
      type: "dog",
      name: "Leptospirosis",
      symptoms: "High fever, muscle tenderness, reluctance to move, jaundice, increased thirst.",
      treatment: "Antibiotics (penicillin or doxycycline), intensive fluid therapy.",
      prevention: "Leptospirosis vaccine, avoiding stagnant water sources."
    },
    {
      id: 13,
      type: "dog",
      name: "Heartworm Disease",
      symptoms: "Mild persistent cough, reluctance to exercise, fatigue after mild activity, weight loss.",
      treatment: "Series of injections (melarsomine), strict crate rest for several weeks.",
      prevention: "Monthly heartworm preventive chews or topical treatments."
    },
    {
      id: 14,
      type: "dog",
      name: "Ear Infections (Otitis)",
      symptoms: "Head shaking, scratching at ears, foul odor, redness, discharge.",
      treatment: "Ear cleaning, antifungal or antibiotic ear drops.",
      prevention: "Regular ear drying after swimming/bathing."
    },
    {
      id: 15,
      type: "cat",
      name: "Feline Immunodeficiency Virus (FIV)",
      symptoms: "Poor coat condition, persistent fever, infections of gums and mouth, slow weight loss.",
      treatment: "Managing secondary infections, high-calorie diet, stress reduction.",
      prevention: "Keeping cats indoors to prevent fighting and bites."
    },
    {
      id: 16,
      type: "cat",
      name: "Feline Lower Urinary Tract Disease (FLUTD)",
      symptoms: "Straining to urinate, crying out while urinating, blood in urine, licking genital area.",
      treatment: "Dietary changes, increased hydration, pain medication, or emergency unblocking.",
      prevention: "High-moisture diet (wet food), fresh water access, clean litter boxes."
    },
    {
      id: 17,
      type: "cat",
      name: "Feline Infectious Peritonitis (FIP)",
      symptoms: "Persistent fever, lethargy, weight loss, fluid accumulation in abdomen (wet form).",
      treatment: "Antiviral supportive treatment (GS-441524), anti-inflammatory care.",
      prevention: "Good cattery hygiene, minimizing stress in multi-cat households."
    },
    {
      id: 18,
      type: "cat",
      name: "Ear Mites",
      symptoms: "Head shaking, scratching at ears, dark coffee-ground-like discharge.",
      treatment: "Thorough ear cleaning, topical ear mite drops or systemic parasite control.",
      prevention: "Regular grooming and keeping away from untreated outdoor animals."
    }
  ];

  // 2. STATE : Les Publications du Blog
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 101,
      type: "dog",
      title: "How to Train Your Puppy to Walk on a Leash 🐕",
      author: "Dr. Ahmed",
      date: "June 18, 2026",
      content: "Leash training takes patience. Start indoors with short sessions, use positive reinforcement (treats), and never pull hard on the collar. Consistency is key!",
      image: "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg?h=430&w=710&hash=7FEB820D235A44B76B271060E03572C7"
    },
    {
      id: 102,
      type: "cat",
      title: "Understanding Cat Body Language 🐱",
      author: "Sonia Vet",
      date: "June 15, 2026",
      content: "When a cat purrs, it usually means comfort, but a slow tail wag means frustration. Learning these signs will help you build a stronger bond with your feline friend.",
      image: "https://eu-central-1.graphassets.com/AnwjgMYRvQfWK3bRPjoq3z/resize=height:360,width:500/output=format:webp/9JrMeDVZTbO7AKMsI5NL"
    },
    {
      id: 103,
      type: "dog",
      title: "Summer Care Tips for Heavy Coat Dogs ☀️",
      author: "Anis Groomer",
      date: "June 10, 2026",
      content: "Never shave a double-coated dog! Their fur actually protects them from the heat. Instead, provide brushed coats, lots of fresh water, and avoid walking them on hot asphalt.",
      image: "https://premiumpethouse.com/pph_petbasket/uploads/post-media/images/1675836887_Pomeranian_Puppies_Banner.jpg"
    },
    {
      id: 104,
      type: "cat",
      title: "Why Does Your Cat Love Cardboard Boxes? 📦",
      author: "Sonia Vet",
      date: "June 20, 2026",
      content: "Boxes reduce feline stress by providing a safe, enclosed hiding spot. They also help cats regulate their body temperature, as confined spaces retain body heat perfectly.",
      image: "https://m.media-amazon.com/images/I/71lb1++6W+L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 105,
      type: "dog",
      title: "The Ultimate Guide to Dog Nutrition 🦴",
      author: "Dr. Ahmed",
      date: "June 19, 2026",
      content: "A balanced diet requires proteins, healthy fats, and a small amount of digestible carbs. Avoid toxic foods like grapes, chocolate, onions, and products containing xylitol.",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 106,
      type: "cat",
      title: "How to Stop Your Cat from Scratching Furniture 🛋️",
      author: "Anis Groomer",
      date: "June 17, 2026",
      content: "Scratching is a natural instinct to mark territory. Place sturdy scratching posts near their favorite spots and use positive reinforcement when they choose the post over the couch.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYWz2-887wsXkCzBbmKzy4j83kvIprQudHw&s"
    },
    {
      id: 107,
      type: "dog",
      title: "Signs Your Dog Might Be Feeling Anxious 😰",
      author: "Dr. Ahmed",
      date: "June 14, 2026",
      content: "Yawning when not tired, excessive lip licking, pacing, and tucked tails are classic signs of canine anxiety. Identifying these triggers early helps prevent long-term stress.",
      image: "https://www.thestar.co.uk/jpim-static/image/2025/07/22/15/07/Untitled-design-2025-07-22T164402-495.jpeg?crop=3:2&trim=&width=800"
    },
    {
      id: 108,
      type: "cat",
      title: "Is Wet Food Better Than Dry Kibble for Cats? 🐈‍⬛",
      author: "Sonia Vet",
      date: "June 12, 2026",
      content: "Cats naturally have a low thirst drive. Wet food provides vital hydration that supports kidney and urinary tract health, while high-quality kibble offers convenience and caloric density.",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 109,
      type: "dog",
      title: "Dental Care Basics for Happy Canines 🦷",
      author: "Anis Groomer",
      date: "June 08, 2026",
      content: "Periodontal disease can lead to serious heart and kidney issues. Introduce enzymatic dog-safe toothpaste early, and provide dental chews to naturally scrape away plaque.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop"
    }
  ]);

  // 3. STATE : Formulaire de création de publication
  const [newPost, setNewPost] = useState({
    type: 'dog',
    title: '',
    author: '',
    content: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return alert("Please fill in the title and content!");

    const postToSubmit = {
      id: Date.now(),
      type: newPost.type,
      title: newPost.title,
      author: newPost.author || "Anonymous",
      date: "Today",
      content: newPost.content,
      image: newPost.image || "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop"
    };

    setBlogPosts([postToSubmit, ...blogPosts]);
    setFilter(newPost.type);

    setNewPost({ type: 'dog', title: '', author: '', content: '', image: '' });
  };

  // Logique de filtrage
  const filteredDiseases = petDiseases.filter(disease => {
    const matchesType = disease.type === filter;
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          disease.symptoms.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const filteredPosts = blogPosts.filter(post => {
    const matchesType = post.type === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="blog-page">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="blogGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6e6465" />   
            <stop offset="100%" stopColor="#d18a93" /> 
          </linearGradient>
        </defs>
      </svg>

      <h1 className="blog-title">Pet Health & Medical Guide</h1>

      <div className="paw-divider-blog">
        <span></span>
        <div className="paws-blog">
          <svg className="paw-icon-blog" viewBox="0 0 640 640">
            <path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/>
          </svg>
          <svg className="paw-icon-blog" viewBox="0 0 640 640">
            <path d="M298.5 156.9C312.8 199.8 298.2 243.1 265.9 253.7C233.6 264.3 195.8 238.1 181.5 195.2C167.2 152.3 181.8 109 214.1 98.4C246.4 87.8 284.2 114 298.5 156.9zM164.4 262.6C183.3 295 178.7 332.7 154.2 346.7C129.7 360.7 94.5 345.8 75.7 313.4C56.9 281 61.4 243.3 85.9 229.3C110.4 215.3 145.6 230.2 164.4 262.6zM133.2 465.2C185.6 323.9 278.7 288 320 288C361.3 288 454.4 323.9 506.8 465.2C510.4 474.9 512 485.3 512 495.7L512 497.3C512 523.1 491.1 544 465.3 544C453.8 544 442.4 542.6 431.3 539.8L343.3 517.8C328 514 312 514 296.7 517.8L208.7 539.8C197.6 542.6 186.2 544 174.7 544C148.9 544 128 523.1 128 497.3L128 495.7C128 485.3 129.6 474.9 133.2 465.2zM485.8 346.7C461.3 332.7 456.7 295 475.6 262.6C494.5 230.2 529.6 215.3 554.1 229.3C578.6 243.3 583.2 281 564.3 313.4C545.4 345.8 510.3 360.7 485.8 346.7zM374.1 253.7C341.8 243.1 327.2 199.8 341.5 156.9C355.8 114 393.6 87.8 425.9 98.4C458.2 109 472.8 152.3 458.5 195.2C444.2 238.1 406.4 264.3 374.1 253.7z"/>
          </svg>
        </div>
        <span></span>
      </div>

      <p className="blog-subtitle">Learn about common pet illnesses, symptoms, and vet-approved treatments.</p>

      {/* 📢 Marquee Bar */}
      <div className="pub-marquee-container">
        <div className="pub-marquee-track">
          <div className="pub-marquee-content">
            <span className="pub-text">Common Cat & Dog Diseases</span>
            <span className="pub-divider-icon">🩺</span>
            <span className="pub-text">Veterinary Prescriptions & Care</span>
            <span className="pub-divider-icon">💊</span>
            <span className="pub-text">Effective Treatments & Antibiotics</span>
            <span className="pub-divider-icon">🧪</span>
            <span className="pub-text">Vaccination & Prevention Guides</span>
            <span className="pub-divider-icon">🛡️</span>
            <span className="pub-text">Flea, Tick & Parasite Control</span>
            <span className="pub-divider-icon">🐈</span>
          </div>
          <div className="pub-marquee-content" aria-hidden="true">
            <span className="pub-text">Common Cat & Dog Diseases</span>
            <span className="pub-divider-icon">🩺</span>
            <span className="pub-text">Veterinary Prescriptions & Care</span>
            <span className="pub-divider-icon">💊</span>
            <span className="pub-text">Effective Treatments & Antibiotics</span>
            <span className="pub-divider-icon">🧪</span>
            <span className="pub-text">Vaccination & Prevention Guides</span>
            <span className="pub-divider-icon">🛡️</span>
            <span className="pub-text">Flea, Tick & Parasite Control</span>
            <span className="pub-divider-icon">🐈</span>
          </div>
        </div>
      </div>

      {/* 📝 FORMULAIRE DE PUBLICATION */}
      <div className="publish-section">
        <h3>Create a New Blog Post ✍️</h3>
        <form onSubmit={handlePublish} className="publish-form-blog">
          <div className="form-row-top-blog">
            <div className="input-group-blog">
              <label>Category</label>
              <select name="type" value={newPost.type} onChange={handleInputChange}>
                <option value="dog">Select Your Post</option>
                <option value="cat">Cat Post 🐱</option>
                <option value="dog">Dog Post 🐶</option>
              </select>
            </div>
            <div className="input-group-blog name-input-blog">
              <label>Article Title</label>
              <input type="text" name="title" placeholder="e.g., 5 Tips for Puppy Leash Training" value={newPost.title} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-row-top-blog">
            <div className="input-group-blog">
              <label>Your Name / Author</label>
              <input type="text" name="author" placeholder="e.g., Dr. Anis" value={newPost.author} onChange={handleInputChange} />
            </div>
            <div className="input-group-blog name-input-blog">
              <label>Image URL (Optional)</label>
              <input type="text" name="image" placeholder="Paste an image URL here..." value={newPost.image} onChange={handleInputChange} />
            </div>
          </div>

          <div className="input-group-blog">
            <label>Content / Description</label>
            <textarea name="content" placeholder="Write your article here..." value={newPost.content} onChange={handleInputChange} />
          </div>

          <button type="submit" className="publish-submit-btn-blog">Publish Article 🚀</button>
        </form>
      </div>

      {/* Boîtes de Conseils d'Urgence Express */}
      <div className="quick-tips-container-blog">
        {filter === 'dog' ? (
          <div className="tip-box-blog dog-tip-blog">
            <h4>💡 Quick Dog Care Tip</h4>
            <p>If your dog is vomiting frequently, remove food for 12 hours but keep providing small sips of water to prevent dehydration. Call a vet if blood appears.</p>
          </div>
        ) : (
          <div className="tip-box-blog cat-tip-blog">
            <h4>💡 Quick Cat Care Tip</h4>
            <p>A cat refusing to eat for more than 24-48 hours is at high risk of Fatty Liver Disease. Never let a cat starve; contact your clinic immediately.</p>
          </div>
        )}
      </div>

      {/* Barre de Recherche */}
      <div className="search-bar-container-blog">
        <input 
          type="text" 
          placeholder={`Search articles or diseases for ${filter === 'dog' ? 'dogs' : 'cats'}...`} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="blog-search-input"
        />
        {searchTerm && <button className="clear-search-btn-blog" onClick={() => setSearchTerm('')}>✕</button>}
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons-blog">

        <button
          className={filter === 'cat' ? 'active' : ''}
          onClick={() => { setFilter('cat'); setSearchTerm(''); }}
        >
          {/* Cats 🐱 */}
          Cats 
          <svg 
  viewBox="0 0 800 600" 
  width="100%" 
  height="100%" 
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#4a3f40" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#4a3f40" stopOpacity="0" />
    </radialGradient>
  </defs>

  <ellipse cx="400" cy="460" rx="220" ry="25" fill="url(#shadowGrad)" />
  <g fill="none" stroke="#4a3f40" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"> 
    <path d="M 560 400 C 620 350, 600 240, 530 250 C 490 255, 495 300, 520 295" />
    <path d="M 280 340 C 300 240, 480 220, 550 350 C 565 380, 550 430, 500 435 C 410 440, 320 435, 270 410" />
    <path d="M 275 345 C 250 310, 210 310, 185 345 C 160 380, 180 425, 220 430 C 250 433, 270 415, 280 390" />
    <path d="M 200 324 L 180 260 L 232 295" />
    <path d="M 255 320 L 265 250 L 282 302" />
    <path d="M 195 375 Q 205 385 215 375" strokeWidth="10" />
    <path d="M 240 372 Q 250 382 260 372" strokeWidth="10" />
    <path d="M 222 388 L 228 388" strokeWidth="10" />
    <path d="M 215 398 Q 225 405 235 398" strokeWidth="8" />
    <path d="M 180 395 L 140 398" strokeWidth="8" />
    <path d="M 183 407 L 145 415" strokeWidth="8" />
    <path d="M 265 392 L 305 392" strokeWidth="8" />
    <path d="M 262 404 L 300 410" strokeWidth="8" />
    <path d="M 225 430 C 225 450, 265 450, 275 430" />   
  </g>
</svg>

        </button>

        <button
          className={filter === 'dog' ? 'active' : ''}
          onClick={() => { setFilter('dog'); setSearchTerm(''); }}
        >
          {/* Dogs 🐶 */}
          Dogs 
          <svg 
  className="dog-svg"
  viewBox="0 0 800 600" 
  width="100%" 
  height="100%" 
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
  
    <radialGradient id="dogShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#4a3f40" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#4a3f40" stopOpacity="0" />
    </radialGradient>
  </defs>
  <ellipse cx="400" cy="490" rx="180" ry="20" fill="url(#dogShadow)" />
  <path d="M 320 230 C 290 230, 290 310, 330 310 C 370 310, 360 230, 320 230 Z" fill="#f0eceb" />
  <path className="dog-tongue" d="M 390 335 C 390 365, 410 365, 410 335 Z" fill="#d18a93" />
  <g fill="none" stroke="#4a3f40" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
    <path className="dog-tail" d="M 490 440 C 530 430, 560 380, 550 340 C 545 320, 525 330, 530 350" />
    <path d="M 460 340 C 490 370, 500 450, 480 470 C 460 485, 420 480, 430 440" />
    <path d="M 390 320 C 440 320, 480 350, 470 430" />
    <path d="M 360 360 L 360 475 C 360 485, 340 485, 340 475" />
    <path d="M 400 360 L 400 475 C 400 485, 420 485, 420 475" />
    <path d="M 310 260 C 290 320, 340 350, 400 340 C 460 350, 510 320, 490 260 C 470 190, 330 190, 310 260 Z" />
    <path d="M 315 225 C 270 230, 260 310, 285 330 C 300 340, 315 310, 315 280" />
    <path d="M 485 225 C 530 230, 540 310, 515 330 C 500 340, 485 310, 485 280" />
    <circle cx="345" cy="265" r="5" fill="#4a3f40" />
    <circle cx="455" cy="265" r="5" fill="#4a3f40" />
    <path d="M 385 295 Q 400 285 415 295 Q 400 315 385 295 Z" fill="#4a3f40" />
    <path d="M 400 307 L 400 325" />
    <path d="M 385 325 Q 400 335 415 325" />
  </g>
</svg>
        </button>

      </div>

      {/* 📰 SECTION DES ARTICLES DE BLOG */}
      <h2 className="section-subtitle-blog">Latest Articles & Stories 📰</h2>
      <div className="blog-posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} className="blog-post-card">
              <div className="post-image-wrapper-blog">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content-wrapper-blog">
                <span className="post-date-blog">{post.date} • By {post.author}</span>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results-found-blog">
            <p>No community articles found for this category. 🐾</p>
          </div>
        )}
      </div>

      {/* 🩺 SECTION MEDICAL GUIDE */}
      <h2 className="section-subtitle-blog">Medical & Disease Guide 🩺</h2>
      <div className="diseases-grid-blog">
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map((disease) => (
            <div key={disease.id} className="disease-card-blog">
              <div className="card-header-blog">
                <span className={`pet-badge ${disease.type}`}>
                  {disease.type === 'dog' ? '🐶 Dog' : '🐱 Cat'}
                </span>
                <h3>{disease.name}</h3>
              </div>

              <div className="card-body-blog">
                <p><strong>⚠️ Symptoms:</strong> {disease.symptoms}</p>
                <p><strong>💊 Treatment:</strong> {disease.treatment}</p>
                <p><strong>🛡️ Prevention:</strong> {disease.prevention}</p>
              </div>

              <div className="card-footer-action-blog">
                {/* Au clic, on met à jour l'état avec l'objet de la maladie courante */}
                <button 
                  className="emergency-action-btn-blog"
                  onClick={() => setSelectedEmergency(disease)}
                >
                  Consult a Vet 🩺
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results-found-blog">
            <p>No medical guide found matching your search. 🐾</p>
          </div>
        )}
      </div>

      {/* ==========================================================================
         MODAL POP-UP (Option 2 : Reste sur la même page)
         ========================================================================== */}
      {selectedEmergency && (
        <div className="modal-overlay-blog" onClick={() => setSelectedEmergency(null)}>
          <div className="modal-content-blog" onClick={(e) => e.stopPropagation()}>
            <h3>Emergency Vet Contact 📞</h3>
            <p>
              Your {selectedEmergency.type === 'dog' ? 'Dog 🐶' : 'Cat 🐱'} might be showing signs of 
              <strong> {selectedEmergency.name}</strong>. Don't wait!
            </p>
            
            <div className="clinic-info-blog">
              <p><strong>🏥 Vet Clinic Tunis:</strong> +216 71 123 456</p>
              <p><strong>🕒 Emergency Hours:</strong> 24/7 Available</p>
            </div>
            
            <div className="modal-actions-blog">
              <a href="tel:+21671123456" className="call-now-btn-blog">Call Vet Now 📞</a>
              <button className="close-modal-btn-blog" onClick={() => setSelectedEmergency(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;