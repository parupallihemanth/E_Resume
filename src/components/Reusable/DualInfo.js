import React from 'react'
import Heading from './Heading'
export default function DualInfo({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <div className="container">
            <Heading title={heading} />
            <div className="row">
                 <div className="col-8 mx-auto">
                    <p className=" text-dark  mb-5 ">
                    <strong>
                    I am from a small town in India. Currently, I am a graduate Teaching Assistant at Dalhousie University, Halifax, Nova Scotia.
                    web developer with a flair for creating elegant solutions in the least amount of time. Experienced with all stages
                    of the development cycle for dynamic web prpjects and well-versed in numerous programming languages includes, Python3, JavaScript and SQL. 
                    Looking for opportunity to be integrated into a company's web developer's team, where I will be learn and share my own experience for the general advancement
                    of the company.
                 </strong>
                    </p>
                    
                    <p>
                        <strong>
                            I enjoy cooking Indian food.
                        </strong>    
                    </p>       
                    </div>
                    <div className='col-4 ' >
                 <div className="card"  >
                   <img src="https://visualmodo.com/wp-content/uploads/2018/04/Using-GitHub-To-Improve-Workflow-3.jpg" className="card-img-top" alt="image goes here"/>
                   <div className="card-body">
                   <h5 className="card-title">My apps</h5>
                <p className="card-text">I am happy to share my work with you.</p>
               <a href="https://www.github.com/parupallihemanth" className="btn  btn-sm btn-primary">Go to GitHub</a>
            </div>
             </div>
                 </div>
        </div>  
        </div>  
        </section>    
    )
}
