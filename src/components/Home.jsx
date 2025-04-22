import React from 'react'
import { cardData } from "../Data"
import Card from './Card'; 


export default function Home() {
  return (
    <section id='Home' >
        <div className='container'>
            <div className='home-header'>
                <span>join us</span>
                <h1> Best learning  opportunities</h1>
                <p>we know how large objects will act, but things on a small scale just do not act that way.</p>
                <a href="#" className='btn btn-red'>get quote now</a>
                <a href="#"className='btn btn-transparent'>Learn More</a>
            </div>
            <div className="car-container">
                {cardData.map((card) =>{
                    const {title, id, bgColor, color, description, img}=card;
                    return <Card key={id}  title={title} bgColor={bgColor} color={color} 
                    description={description} img={img} />
                    
                })}
            </div>
        </div>
    </section>
  )
}
