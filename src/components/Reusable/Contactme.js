import React from 'react'
import Heading from '../Reusable/Heading'

export default function Contactme({heading}) {
    return (
        
       
        <section className="py-3">
        <Heading title = {heading}/>
        <div className = "col-10 col-sm-8 mx-auto ">
        
        <form action = "https://formspree.io/babuparupalli@gmail.com" method="POST">
        
        <div className = 'form-group'>
        <input type = "text" name= "name" id= "name" className="form-control " placeholder = "Enter your name" />
        </div>
        <div className = 'form-group'>
        <input type = "email"  name= "name" id= "name" className = "form-control " placeholder = "Enter your email" />
        </div>
        <div className = 'form-group'>
        <textarea type="text" name="description" id = "description" className = "form-control " placeholder="Enter your query here" />
        </div>
        <button type= "submit" className ="btn btn-outline-info btn-block " >Submit</button>
        
        </form>
        </div>  
        
        </section> 
         
    )
}
