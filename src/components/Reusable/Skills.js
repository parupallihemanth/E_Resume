import React, { Component } from 'react'
import Heading from "../Reusable/Heading"
import Img from 'gatsby-image'
export default class Skills extends Component {
    constructor(props){
        super(props)
        this.state={
             skills : props.skills.edges,
        }
    }
    render() {
        // console.log(this.state.skills)
        return (
            <section className="py-5 bg-theme">
              <div className="container">
              <Heading title= "Skills "/>
              <div className ="row">
               {
                   this.state.skills.map(({node}) =>{
                       return(
                           <div 
                            key = {node.id}
                            className="col-11 col-md-6 d-flex justify-content-center mr-3 mx-auto  py-2">
                            <Img fixed = {node.image.fixed} />
                           </div>    

                       )
                   })
               }
              </div>
              </div>    
            </section>    
        )
    }
}
