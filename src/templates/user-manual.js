import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import prevIcon from '../img/prev.png'
import nextIcon from '../img/next.png'
import homeIcon from '../img/home.png'

const UserManualTemplate = ({ title, toc,  content, contentComponent, prev , next}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient" style={{paddingTop:'0rem'}}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light" style={{textAlign:'center'}}>
                {title}
              </h1>
              <PageContent className="toc" content={toc} />
              <PageContent className="content box" content={content} />
              <table style={{margin:'auto',}}>
                <colgroup>
                  <col style={{width:'33%'}} />
                  <col style={{width:'33%'}} />
                  <col style={{width:'33%'}} />  
                </colgroup>
                <tbody>
                  <tr className="odd">
                      <td style={{paddingLeft:'5px'}}>
                        <p>
                          {prev && <a href={"/docs/user-manual/"+prev}><img src={prevIcon} alt="Previous" /></a>}
                        </p>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <p>
                          {(prev||next) && <a href="/docs/user-manual/"><img src={homeIcon} alt="Home" /></a>}
                        </p>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <p>
                          {next && <a href={"/docs/user-manual/"+next}><img src={nextIcon} alt="Next" /></a>}
                        </p>
                      </td>                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>        
      </div>      
    </section> 
  )
}

UserManualTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  toc: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  prev: PropTypes.string,
  next: PropTypes.string,
}

const UserManual = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <UserManualTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        toc={post.tableOfContents} 
        content={post.html}
        prev={post.frontmatter.prev}
        next={post.frontmatter.next}
      />
    </Layout>
  )
}

UserManual.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UserManual

export const userManualQuery = graphql`
  query UserManual($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        title
        prev
        next
      }
    }
  }
`
