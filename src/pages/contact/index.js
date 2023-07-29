import React from "react";
import Layout from "../../components/Layout";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";

class ContactPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <h2 className="has-text-weight-bold is-size-2 gp-title">
          GPlates Team
        </h2>
        <div className="container">
          <div className="column is-12 is-offset-0">
            <div className="columns is-multiline">
              {posts &&
                posts.map(({ node: post }) => (
                  <div
                    className="is-parent column is-4"
                    key={post.id}
                    title={post.frontmatter.title}
                  >
                    <div className="box people">
                      <Link to={post.fields.slug}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.image,
                            alt: `photo thumbnail for  ${post.frontmatter.name}`,
                          }}
                        />
                      </Link>
                      <h3 style={{ textAlign: "center", marginTop: "7px" }}>
                        {post.frontmatter.name}
                      </h3>
                      <p style={{ textAlign: "center", marginTop: "7px" }}>
                        {post.frontmatter.title}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <strong>
              GPlates is developed by an international team of scientists and
              professional software developers at:
            </strong>
            <li>
              the EarthByte group in the school of Geosciences at the University
              of Sydney{" "}
            </li>
            <strong>with past contributions from:</strong>
            <li>
              the Division of Geological and Planetary Sciences (GPS) at Caltech{" "}
            </li>
            <li>
              the Centre for Earth Evolution and Dynamics (CEED) at the
              Department of Geosciences, University of Oslo, Norway{" "}
            </li>
            <li>
              the Geodynamics Team at the Geological Survey of Norway (NGU)
            </li>
            <div>
              <strong>Contact Us</strong>
              <li>
                If you have any scientific or organisational questions about
                GPlates or the participation of the University of Sydney,
                contact GPlates project director <strong>Dietmar Müller</strong>{" "}
                at <a href="https://www.earthbyte.org/contact-us-3/">here</a>
              </li>
              <li>
                If you have any technical questions about GPlates or questions
                about the development roadmap or collaboration, post on{" "}
                <a href="https://discourse.gplates.org">
                  GPlates Online Community Forum
                </a>
              </li>
              <li>
                If you have any questions about the linkage with geodynamic
                models or the participation of Caltech, contact{" "}
                <strong>Michael Gurnis </strong> at{" "}
                <a href="https://web.gps.caltech.edu/~gurnis/contact/index.html">
                  here
                </a>
              </li>
              <li>
                If you are only interested in release notices and other
                important news regarding GPlates software, subscribe this
                mailing list{" "}
                <a href="https://mailman.sydney.edu.au/mailman/listinfo/gplates-announce">
                  GPlates-announce
                </a>
              </li>
            </div>
          </div>
        </div>
        <br></br>
      </Layout>
    );
  }
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const fn = () => (
  <StaticQuery
    query={graphql`
      query peopleQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "people" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                name
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 360
                      height: 360
                      quality: 100
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ContactPage data={data} count={count} />}
  />
);

export default fn;
