import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faHandPointRight} from '@fortawesome/free-solid-svg-icons'
import { getSrc } from "gatsby-plugin-image"

const FeaturePageTemplate = ({ title, intro, image,features, capabilities }) => {
  return (
    <div className="container">
      <div className="column is-10 is-offset-1">
        <h2 className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen" style={{textAlign:'center'}}>{title}</h2>
        <h3 style={{margin:'1rem 0'}}>{intro}</h3>
        <p className="has-text-weight-bold">The capabilities of GPlates are: </p>
        
        {capabilities.map((goal) => (
          <p key={goal}>
            <span className="icon" style={{verticalAlign: 'middle', color: 'orange'}}> 
              <FontAwesomeIcon icon={faDotCircle} className="svg-inline--fa fa-dot-circle "/>
            </span>
            <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>{goal}</span>
          </p>
        ))}

        <hr></hr>

        <div 
          className="margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? getSrc(image.childImageSharp.gatsbyImageData) : image
            })`,
            backgroundPosition: `center bottom`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'black',
            textAlign: `center`,
            minHeight: `200px`,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{fontSize:'200%', color:'orange', fontWeight:'bold', backgroundColor:'rgba(0,0, 0, 0.4)'}}>
          Plate Reconstruction &amp; Intraplate Deformation</div>
        </div>
        <br></br>
        <div className="columns is-multiline"> 
          {features.map((feature) => (
            <div className="column is-4" key={feature.title}>
              <p className="has-text-weight-bold" style={{margin:'0.5rem'}}>
                <span className="icon" style={{verticalAlign: 'middle', color: 'blue'}}> 
                  < FontAwesomeIcon icon={faHandPointRight} className="svg-inline--fa fa-hand-point-right"/>
                </span>
                {feature.title}</p>
              <p style={{marginLeft:'2rem'}} >{feature.text}</p>
            </div>
          ))}
        </div>
        <p style={{height:'300px'}}></p>
      </div>
    </div>
  );
}

FeaturePageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  features: PropTypes.array,
  capabilities: PropTypes.array,
}

const FeaturePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FeaturePageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
        image={frontmatter.image}
        features={frontmatter.features}
        capabilities={frontmatter.capabilities}
      />
    </Layout>
  )
}

FeaturePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FeaturePage

export const featurePageQuery = graphql`query FeaturePageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "feature-page"}}) {
    frontmatter {
      title
      intro
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
      features {
        title
        text
      }
      capabilities
    }
  }
}
`
