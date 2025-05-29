import React, { useState, useEffect, useRef } from 'react';
import './category.css';

const CategoryBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev)=>!prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const categories = [
    'All Categories',
    'Cars',
    'Motorcycles',
    'Mobile Phones',
    'For Sale: Houses & Apartments',
    'Scooters',
    'Commercial & Other Vehicles',
    'For Rent: Houses & Apartments',
  ];

  return (
    <div className="category-bar">
      <div className="category-bar-container">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category === 'All Categories' ? (
              <div className="category-dropdown-wrapper" ref={dropdownRef}>
                <button className="category-toggle" onClick={toggleDropdown}>
                  {category}
                  <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                    ▼
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="category-dropdown" color='black '>
                    <div className="category-column">
                      <h3>Cars</h3>
                    </div>
                    <div className="category-column">
                      <h3>Bikes</h3>
                      <a href="#motorcycles " color='black'>Motorcycles</a>
                      <a href="#scooters">Scooters</a>
                      <a href="#spare-parts">Spare Parts</a>
                      <a href="#bicycles">Bicycles</a>
                    </div>
                    <div className="category-column">
                      <h3>Mobiles</h3>
                      <a href="#mobile-phones">Mobile Phones</a>
                      <a href="#accessories">Accessories</a>
                      <a href="#tablets">Tablets</a>
                      <h3>Commercial Vehicles & Spares</h3>
                      <a href="#commercial-vehicles-spares">Commercial & Other Vehicles</a>
                      <a href="#spare-parts">Spare Parts</a>
                    </div>
                    <div className="category-column">
                      <h3>Properties</h3>
                      <a href="#for-sale-houses-apartments">For Sale: Houses & Apartments</a>
                      <a href="#for-rent-houses-apartments">For Rent: Houses & Apartments</a>
                      <a href="#lands-plots">Lands & Plots</a>
                      <a href="#for-rent-shops-offices">For Rent: Shops & Offices</a>
                      <a href="#for-sale-shops-offices">For Sale: Shops & Offices</a>
                      <a href="#pg-guest-houses">PG & Guest Houses</a>
                    </div>
                    <div className="category-column">
                      <h3>Jobs</h3>
                      <a href="#data-entry-back-office">Data Entry & Back Office</a>
                      <a href="#sales-marketing">Sales & Marketing</a>
                      <a href="#bpo-telecaller">BPO & Telecaller</a>
                      <a href="#driver">Driver</a>
                      <a href="#office-assistant">Office Assistant</a>
                      <a href="#delivery-collection">Delivery & Collection</a>
                      <a href="#teacher">Teacher</a>
                      <a href="#cook">Cook</a>
                      <a href="#receptionist-front-office">Receptionist & Front Office</a>
                      <a href="#operator-technician">Operator & Technician</a>
                      <a href="#it-engineer-developer">IT Engineer & Developer</a>
                      <a href="#hotel-travel">Hotel & Travel</a>
                      <a href="#accountant">Accountant</a>
                      <a href="#designer">Designer</a>
                      <a href="#other-jobs">Other Jobs</a>
                    </div>
                    <div className="category-column">
                      <h3>Electronics & Appliances</h3>
                      <a href="#tvs-video-audio">TVs, Video - Audio</a>
                      <a href="#kitchen-other-appliances">Kitchen & Other Appliances</a>
                      <a href="#computers-laptops">Computers & Laptops</a>
                      <a href="#cameras-lenses">Cameras & Lenses</a>
                      <a href="#games-entertainment">Games & Entertainment</a>
                      <a href="#fridges">Fridges</a>
                      <a href="#computer-accessories">Computer Accessories</a>
                      <a href="#hard-disks-printers-monitors">Hard Disks, Printers & Monitors</a>
                      <a href="#acs">ACs</a>
                      <a href="#washing-machines">Washing Machines</a>
                    </div>
                    <div className="category-column">
                      <h3>Furniture</h3>
                      <a href="#sofa-dining">Sofa & Dining</a>
                      <a href="#beds-wardrobes">Beds & Wardrobes</a>
                      <a href="#home-decor-garden">Home Decor & Garden</a>
                      <a href="#kids-furniture">Kids Furniture</a>
                      <a href="#other-household-items">Other Household Items</a>
                    </div>
                    <div className="category-column">
                      <h3>Books, Sports & Hobbies</h3>
                      <a href="#books">Books</a>
                      <a href="#gym-fitness">Gym & Fitness</a>
                      <a href="#musical-instruments">Musical Instruments</a>
                      <a href="#sports-equipment">Sports Equipment</a>
                      <a href="#other-hobbies">Other Hobbies</a>
                    </div>
                    <div className="category-column">
                      <h3>Fashion</h3>
                      <a href="#men">Men</a>
                      <a href="#women">Women</a>
                      <a href="#kids">Kids</a>
                    </div>
                    <div className="category-column">
                      <h3>Pets</h3>
                      <a href="#fishes-aquarium">Fishes & Aquarium</a>
                      <a href="#pet-food-accessories">Pet Food & Accessories</a>
                      <a href="#dogs">Dogs</a>
                      <a href="#other-pets">Other Pets</a>
                    </div>
                    <div className="category-column">
                      <h3>Services</h3>
                      <a href="#education-classes">Education & Classes</a>
                      <a href="#tours-travel">Tours & Travel</a>
                      <a href="#electronics-repair-services">Electronics Repair & Services</a>
                      <a href="#health-beauty">Health & Beauty</a>
                      <a href="#home-renovation-repair">Home Renovation & Repair</a>
                      <a href="#cleaning-pest-control">Cleaning & Pest Control</a>
                      <a href="#legal-documentation-services">Legal & Documentation Services</a>
                      <a href="#packers-movers">Packers & Movers</a>
                      <a href="#other-services">Other Services</a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                href={`#${category.toLowerCase().replace(/ & /g, '-').replace(/: /g, '-').replace(/ /g, '-')}`}
                className="category-link"
              >
                {category}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;