import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import bikewala_icon from "../../assets/bikewale.svg"
import carwala from "../../assets/carwale.svg"
import cartrade from "../../assets/cartrade.svg"
import cartradetech from "../../assets/cartrade_tech.svg"
import mobiallity from "../../assets/mobility.svg"
import apple from "../../assets/appstore.webp"
import olx from "../../assets/olx_2025.svg"
export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 pb-8 border-b border-gray-200">
        {/* Popular Locations */}
        <div>
          <h3 className="font-bold mb-2 text-sm">POPULAR LOCATIONS</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        {/* Trending Locations */}
        <div>
          <h3 className="font-bold mb-2 text-sm">TRENDING LOCATIONS</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Bhubaneshwar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-2 text-sm">ABOUT US</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Tech@OLX</li>
            <li>Careers</li>
          </ul>
        </div>
        {/* OLX */}
        <div>
          <h3 className="font-bold mb-2 text-sm">OLX</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>
        {/* Follow Us & Apps */}
        <div>
          <h3 className="font-bold mb-2 text-sm">FOLLOW US</h3>
          <div className="flex gap-3 mb-3">
            <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer" size={18} />
            <FaInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer" size={18} />
            <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer" size={18} />
            <FaYoutube className="text-gray-600 hover:text-red-600 cursor-pointer" size={18} />
          </div>
          <div className="flex flex-col gap-2">
            <img src="https://statics.olx.in/external/base/img/playstore.webp" alt="Google Play" className="h-10 w-auto" />
            <img src={apple} alt="App Store" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    
      <div className="bg-blue-900 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start flex-1">
            <img src={cartradetech} alt="CarTrade Tech" className="h-16" />
            <span className="text-white text-2xl">|</span>
            <img src={olx} alt="OLX" className="h-10" />
            <img src={carwala} alt="CarWale" className="h-10" />
            <img src={bikewala_icon} alt="BikeWale" className="h-10" />
            <img src={cartrade} alt="CarTrade" className="h-10" />
            <img src={mobiallity} alt="Mobility Outlook" className="h-10" />
          </div>
        
          <div className="flex flex-col items-center md:items-end flex-1 mt-4 md:mt-0">
            <div className="text-white text-sm mb-2">
              <a href="#" className="underline mr-2">Help</a> - <a href="#" className="underline ml-2">Sitemap</a>
            </div>
            <div className="text-gray-200 text-xs">
              All rights reserved © 2006-2025 OLX
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
