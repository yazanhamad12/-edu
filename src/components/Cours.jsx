import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";





export default function Cours( { department, title, rating, id, img,  description, sales, price, discount,
    duration, lessons} ) {
  return (
    
    <div className='course'>
        <span className='sale'>sale</span>
        <img src={img} alt={title} />
        <div className='content'>
            <div className="course-field">
                <p className='department'>{ department}</p>
                <p className='rating'><FaStar />
                {rating}</p>
            </div>
            <h3> {title} </h3>
            <p className='description'>{description}</p>
            <p className='sales'> {sales}</p>
            <p className='price'> 
                <del>{price}</del> 
             <span className='text-secondary'>{discount}</span>
             </p>
             <div className='course-info'>
                <p><IoAlarm />
                {duration}</p>
                <p> <FaBookOpen />
                {lessons} </p>
                
             </div>
             <a href="#" className='btn-learn'>Learn More <FaChevronRight />
                </a>
        </div>

    </div>
  )
}
