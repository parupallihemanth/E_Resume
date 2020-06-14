import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import { graphql} from 'gatsby'
import HeroSection from '../components/Reusable/HeroSection'
import DualInfo from '../components/Reusable/DualInfo'
import Skills from '../components/Reusable/Skills'
import Contactme from '../components/Reusable/Contactme'

const IndexPage = ({data}) => (
  <Layout>
      {/* <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        
      </div>
      <Link to="/page-2/">Go to page 2</Link>  */}

      <HeroSection
      img = {data.img.childImageSharp.fluid}
      title=" "
      caption='Graduate Teaching Assistant at Dalhousie university'
      heroclass="text-background"
      />

      
      
      <DualInfo heading='About Me' />

      <Skills skills={data.skills} />
      
      <Contactme heading='Contact me' />
      
  </Layout>
)

export const query = graphql`
    {
      img: file(relativePath: { eq: "background3.jpg" }) {
        childImageSharp {
          fluid {
             ...GatsbyImageSharpFluid_tracedSVG 
    }
  }
}

  skills:allContentfulSkills{
    edges{
      node{
        id
        
        image{
          fixed(width:240, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    
  }
}
}



`
export default IndexPage
