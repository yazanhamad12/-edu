import React from 'react'
import SectionHeader from './SectionHeader'
import { ratingData } from '../Data'

import Review from './review'




export default function Reviews() {
  return (
   <section id='reviews'>
    <div className='container'>
        <SectionHeader title={"each and evry client is important"} description={"Discover what our students are saying in the Reviews section! Real Feedback from learners who have experienced and benfited "} />
    </div>
    <div className="ratings">
        {ratingData.map(rating =>{
            const {id, description, img,  job, name, stars } = rating;
            return  <Review key={id} description={description} img = {img} job={job} name={name} stars= {stars} />
        })}
    </div>
   </section>
  )
}
