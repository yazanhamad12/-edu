import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";




export default function Footer() {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="#"><FaFacebook />
              </a>
              <a href="#"><FaInstagram />
              </a>
              <a href="#"><FaXTwitter />
              </a>
            </div>
          </div>
          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>
                <a href="#">Business Marketig</a>
              </li>
              <li>
                <a href="#">User Aalytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch A Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
          <p>
            &copy; 2025 | All right reserved made  by <strong className='text-primary'>Yazan Hajhamad </strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
