import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">HELP</h4>
            <ul className="list-none space-y-2">
              <li><Link to="/client-services" aria-label="Client Services">Client Services</Link></li>
              <li><Link to="/track-order" aria-label="Track Order">Track Order</Link></li>
              <li><Link to="/contact-us" aria-label="Contact Us">Contact Us</Link></li>
              <li><Link to="/feedback" aria-label="Feedback">Feedback</Link></li>
              <li><Link to="/pricing-policy" aria-label="Pricing Policy">Pricing Policy</Link></li>
              <li><Link to="/returns" aria-label="Returns">Returns</Link></li>
              <li><Link to="/unsubscribe" aria-label="Unsubscribe">Unsubscribe</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">SHOP</h4>
            <ul className="list-none space-y-2">
              <li><Link to="/find-store" aria-label="Find a Store">Find a Store</Link></li>
              <li><Link to="/boutique-services" aria-label="Boutique Services">Boutique Services</Link></li>
              <li><Link to="/gift-cards" aria-label="Gift Cards">Gift Cards</Link></li>
              <li><Link to="/give-get-offer" aria-label="Give $50, Get $50">Give $50, Get $50</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">THE COMPANY</h4>
            <ul className="list-none space-y-2">
              <li><Link to="/about-us" aria-label="About Us">About Us</Link></li>
              <li><Link to="/" aria-label="GemsCart">GemsCart</Link></li>
              <li><Link to="/responsibility" aria-label="Responsibility">Responsibility</Link></li>
              <li><Link to="/careers" aria-label="Careers">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enter Email</h4>
            <p className="mb-4">You are signing up to receive GemsCart emails. You can withdraw your consent at any time.</p>
            <p className="mb-2">Read our <Link to="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</Link> or <Link to="/contact-us" aria-label="Contact Us">Contact Us</Link> for more details.</p>
            <p className="mb-2">Terms of Use</p>
            <p className="mb-2">Privacy Policy</p>          
            <p className="mb-2">Manage Cookies</p>
            <p className="mb-2">Accessibility</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
