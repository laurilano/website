import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faBookReader,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { HTMLContent } from "../components/Content";

class LatestNews extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        <div className="is-parent column is-8 content box">
          <h1
            className="title is-size-4 has-text-weight-bold is-bold-light has-text-link"
            style={{ textAlign: "center", marginBottom: "0.5rem" }}
          >
            <Link
              className="title has-text-link is-size-5 gp-link-no-underline"
              to={posts[0].node.fields.slug}
            >
              {posts[0].node.frontmatter.title}
            </Link>
          </h1>

          <div
            className="has-text-weight-bold"
            style={{ textAlign: "center", marginBottom: "0.5rem" }}
          >
            <span className="icon" style={{ verticalAlign: "middle" }}>
              {" "}
              <FontAwesomeIcon icon={faCalendarDay} className="fal" />{" "}
            </span>
            <span>{posts[0].node.frontmatter.date}</span>
          </div>
          <HTMLContent
            content={posts[0].node.html.substring(0, 3500)}
            className="gp-front-news"
          />

          {posts[0].node.html.length > 3500 && (
            <div style={{ textAlign: "center" }}>
              <div>...................</div>
              <Link to={posts[0].node.fields.slug}>
                <button className="button is-small is-success">
                  <span className="icon">
                    {" "}
                    <FontAwesomeIcon icon={faBookReader} />
                  </span>
                  <span>Read the whole article</span>
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="is-parent column is-4">
          {posts &&
            posts.slice(1, 5).map(({ node: post }) => (
              <div className="is-parent column" key={post.id}>
                <article
                  className={`blog-list-item tile is-child box notification gp-box`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <div
                      className="post-meta"
                      style={{ width: "100%", position: "relative" }}
                    >
                      <div style={{ paddingBottom: "1.5rem" }}>
                        <Link
                          className="title has-text-link gp-news-title"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </div>

                      <div
                        className=""
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <span
                          className="icon"
                          style={{ verticalAlign: "middle" }}
                        >
                          {" "}
                          <FontAwesomeIcon
                            icon={faCalendarDay}
                            className="fal"
                          />{" "}
                        </span>
                        <span style={{ fontSize: "0.7rem", fontWeight: "600" }}>
                          {post.frontmatter.date}
                        </span>
                      </div>
                    </div>
                  </header>
                  <hr
                    style={{
                      width: "100%",
                      margin: ".5rem 0",
                      border: "inset 1px aliceblue",
                    }}
                  ></hr>
                  <p>
                    <span style={{ fontSize: "0.9rem" }}>
                      {post.frontmatter.description}
                    </span>
                    {/*<Link className="button is-success" to={post.fields.slug}>
                    Keep Reading →
                      </Link>*/}
                  </p>
                </article>
              </div>
            ))}
          <div
            className="column is-12 has-text-centered"
            style={{ marginTop: "1rem" }}
          >
            <Link to="/news">
              <button className="button is-small is-info">
                <span className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faNewspaper} />
                </span>
                <span>More News</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

LatestNews.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const fn = () => (
  <StaticQuery
    query={graphql`
      query LatestNewsQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "news" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                description
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 120
                      height: 60
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
    render={(data, count) => <LatestNews data={data} count={count} />}
  />
);

export default fn;
