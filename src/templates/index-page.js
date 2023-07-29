import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Layout from "../components/Layout";
import LatestNews from "../components/LatestNews";
import { HTMLContent } from "../components/Content";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faClipboard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { getSrc } from "gatsby-plugin-image";

import GPlatesMainScreenshot from "../img/SATL_ExponentialStretching_650x380.png";
import HeroImg1 from "../img/hero-img-1.png";
import HeroImg2 from "../img/hero-img-2.png";
import HeroImg3 from "../img/hero-img-3.png";
import HeroImg4 from "../img/hero-img-4.png";

import pygplatesLogo from "../img/pygplates-screenshot.png";
import portalScreenshot from "../img/portal-screenshot.png";
import gwsScreenshot from "../img/gws-screenshot.png";

import auscopeLogo from "../img/Auscope_log_simulation_modelling.png";
import peoplePhoto from "../img/earthbyte_group_June2016.jpg";

const heroClick_1 = () => {
  let mainScreenshot = document.getElementById("main-screenshot");
  mainScreenshot.src = HeroImg1;
};

const heroClick_2 = () => {
  let mainScreenshot = document.getElementById("main-screenshot");
  mainScreenshot.src = HeroImg2;
};

const heroClick_3 = () => {
  let mainScreenshot = document.getElementById("main-screenshot");
  mainScreenshot.src = HeroImg3;
};

const heroClick_4 = () => {
  let mainScreenshot = document.getElementById("main-screenshot");
  mainScreenshot.src = HeroImg4;
};

var images = [HeroImg1, HeroImg2, HeroImg3, HeroImg4];
var n = 0;
const timer = () => {
  let mainScreenshot = document.getElementById("main-screenshot");
  if (!mainScreenshot) {
    return;
  }
  mainScreenshot.className = "hide";

  setTimeout(() => {
    if (n === 3) {
      n = 0;
    } else {
      n += 1;
    }
    mainScreenshot.src = images[n];
    mainScreenshot.className = "";
  }, 5000);
};

setInterval(timer, 20000);

var done = false;
const changeBGColor = () => {
  if (typeof window !== "undefined") {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const bgc = urlParams.get("bgc");
    const fc = urlParams.get("fc");
    if (bgc && !done) {
      var ele = document.getElementsByClassName("tint2");
      if (ele.length > 0) {
        ele[0].style.background = bgc;
        done = true;
      }

      var ele_fc = document.getElementsByClassName("sub-heading");
      if (ele_fc.length > 0) {
        ele_fc[0].style.color = "#" + fc;
        done = true;
      }
    }
  }
};
setInterval(changeBGColor, 200);

const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  descMarkdown,
  reasons,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0 gp-header"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp
            ? getSrc(image.childImageSharp.gatsbyImageData)
            : image
        })`,
        backgroundPosition: `left top`,
        backgroundAttachment: "fixed",
        textAlign: `center`,
        minHeight: `700px`,
        position: "relative",
      }}
    >
      <div
        className="gp-hidden-ctl"
        style={{
          position: "absolute",
          top: "0",
          height: "0",
          width: "0",
          zIndex: "100",
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderTop: "5px solid white",
        }}
      ></div>
      <div className="tint"></div>
      <div className="tint2"></div>

      <div className="container gp-header-info" style={{ zIndex: "10" }}>
        <div className="columns section">
          <div
            className="column is-7"
            style={{
              lineHeight: "1",
              justifyContent: "space-around",
              alignItems: "left",
              paddingLeft: "1em",
              paddingRight: "1em",
              paddingBottom: "2em",
            }}
          >
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                color: "#48c774",
                lineHeight: "1",
                padding: "0.25em",
              }}
            >
              <span style={{ fontSize: "150%", color: "#333" }}>GPlates</span>
            </h1>
            <h3
              className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen sub-heading"
              style={{
                textAlign: "left",
                color: "#333",
                padding: "0.25em",
                maxWidth: "768px",
                lineHeight: "1.5",
                margin: "auto",
                fontFamily: "Open Sans Bold, sans-serif",
              }}
            >
              {subheading}
            </h3>
            <div style={{ paddingTop: "2rem" }}>
              <img
                src={HeroImg1}
                alt="Hero 1"
                style={{ width: "5em", margin: "1em 0.2em", cursor: "pointer" }}
                role="presentation"
                onClick={heroClick_1}
                onKeyDown={heroClick_1}
              />
              <img
                src={HeroImg2}
                alt="Hero 2"
                style={{ width: "5em", margin: "1em 0.2em", cursor: "pointer" }}
                role="presentation"
                onClick={heroClick_2}
                onKeyDown={heroClick_2}
              />
              <img
                src={HeroImg3}
                alt="Hero 3"
                style={{ width: "5em", margin: "1em 0.2em", cursor: "pointer" }}
                role="presentation"
                onClick={heroClick_3}
                onKeyDown={heroClick_3}
              />
              <img
                src={HeroImg4}
                alt="Hero 4"
                style={{ width: "5em", margin: "1em 0.2em", cursor: "pointer" }}
                role="presentation"
                onClick={heroClick_4}
                onKeyDown={heroClick_4}
              />
            </div>

            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <a
                href="https://www.earthbyte.org/download-gplates-2-3/"
                style={{
                  color: "#333",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  fontSize: "large",
                }}
              >
                <span
                  className="icon"
                  style={{ verticalAlign: "bottom", color: "green" }}
                >
                  <FontAwesomeIcon icon={faDownload} />
                </span>
                Latest GPlates release v2.3
              </a>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <a
                href="https://www.earthbyte.org/download-pygplates-0-36/"
                style={{
                  color: "#333",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  fontSize: "large",
                }}
              >
                <span
                  className="icon"
                  style={{ verticalAlign: "bottom", color: "green" }}
                >
                  <FontAwesomeIcon icon={faDownload} />
                </span>
                Latest pyGPlates release v0.36
              </a>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <a
                href="https://github.com/GPlates/gplately"
                style={{
                  color: "#333",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  fontSize: "large",
                }}
              >
                <span
                  className="icon"
                  style={{ verticalAlign: "bottom", color: "green" }}
                >
                  <FontAwesomeIcon icon={faDownload} />
                </span>
                Latest GPlately release v1.0
              </a>
            </div>
          </div>
          <div className="column is-5" style={{}}>
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              <img id="main-screenshot" src={HeroImg1} alt="" style={{}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*end of the header */}

    <h1 className="gp-landing-page-title title">{mainpitch.title}</h1>

    {/*start of the first section*/}
    <div
      className="container-fliud box"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="container">
        <div className="column is-12">
          <div className="columns section">
            <div className="column is-7">
              <div className="tile">
                <div className="content" style={{ fontSize: "large" }}>
                  <HTMLContent
                    content={descMarkdown.childMarkdownRemark.html}
                  />
                </div>
              </div>
              <br></br>
              <div style={{ textAlign: "center" }}>
                <a className="button is-link is-small" href="/features">
                  Learn More
                </a>
              </div>
            </div>
            <div className="column is-5">
              <img
                src={GPlatesMainScreenshot}
                alt="GPlates Screenshot"
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*end of the first section*/}

    <div
      style={{ textAlign: "center", marginTop: "3rem", marginBottom: "1rem" }}
    >
      <span
        style={{
          background: "#00B0D5",
          height: "15px",
          width: "15px",
          display: "inline-block",
          marginRight: "15px",
        }}
      ></span>
      <span
        style={{
          background: "#E51875",
          height: "15px",
          width: "15px",
          display: "inline-block",
          marginRight: "15px",
        }}
      ></span>
      <span
        style={{
          background: "#F8B20E",
          height: "15px",
          width: "15px",
          display: "inline-block",
          marginRight: "15px",
        }}
      ></span>
      <span
        style={{
          background: "#8E489B",
          height: "15px",
          width: "15px",
          display: "inline-block",
          marginRight: "15px",
        }}
      ></span>
    </div>

    {/*start of the second section*/}
    <div className="container-fliud">
      <div className="container">
        <div className="column is-12">
          <div className="columns section">
            <div className="column is-5">
              <div style={{ position: "relative", paddingBottom: "75%" }}>
                <iframe
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                  }}
                  title="Youtube Video"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/og9Cdz9ifX4?autoplay=1&;mute=1&;loop=1&;rel=0&;showinfo=0&color=white&iv_load_policy=3&playlist=og9Cdz9ifX4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="column is-7">
              <div className="tile">
                <h1
                  className="gp-landing-page-title title"
                  style={{ margin: "auto" }}
                >
                  Why GPlates?
                </h1>
              </div>
              <div
                className="tile"
                style={{ marginTop: "1rem", display: "flex" }}
              >
                <div
                  className="content"
                  style={{ fontSize: "larger", margin: "auto" }}
                >
                  {reasons.map((reason) => (
                    <p key={reason}>
                      <span
                        className="icon"
                        style={{ verticalAlign: "middle", color: "green" }}
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"
                        />
                      </span>
                      <span
                        style={{ verticalAlign: "middle", marginLeft: "1rem" }}
                      >
                        {reason}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*end of the second section*/}

    <div className="container ">
      <article className="message mc-message">
        <div className="message-body">
          <div className="column is-12 is-offset-0">
            <h4>
              <strong>GPlates Citation:</strong>
            </h4>
            <div className="columns section">
              <div className="column is-10">
                <cite style={{ display: "flex", alignItems: "center" }}>
                  Müller, R. D., Cannon, J., Qin, X., Watson, R. J., Gurnis, M.,
                  Williams, S., Pfaffelmoser, T., Seton, M., Russell, S. H. J.
                  ,Zahirovic S. (2018). GPlates: Building a virtual Earth
                  through deep time. Geochemistry, Geophysics, Geosystems, 19,
                  2243-2261. https://doi.org/10.1029/2018GC007584
                </cite>
              </div>
              <div className="column is-2">
                <div
                  style={{
                    textAlign: "center",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <CopyToClipboard
                    text="Müller, R. D., Cannon, J., Qin, X., Watson, R. J., Gurnis, M.,
                  Williams, S., Pfaffelmoser, T., Seton, M., Russell, S. H. J.
                  ,Zahirovic S. (2018). GPlates: Building a virtual Earth
                  through deep time. Geochemistry, Geophysics, Geosystems, 19,
                  2243-2261. https://doi.org/10.1029/2018GC007584"
                  >
                    <button className="button is-small is-success">
                      <span className="icon">
                        <FontAwesomeIcon
                          icon={faClipboard}
                          className="fa-spin"
                        />
                      </span>
                      <span>Copy </span>
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            <h4>
              <strong>PyGPlates, PlateTectonicTools, GPlately Citation:</strong>
            </h4>
            <div className="columns section">
              <div className="column is-10">
                <cite style={{ display: "flex", alignItems: "center" }}>
                  Mather, B. R., Müller, R. D., Zahirovic, S., Cannon, J., Chin,
                  M., Ilano, L., Wright, N. M., Alfonso, C., Williams, S.,
                  Tetley, M., Merdith, A. (2023) Deep time spatio-temporal data
                  analysis using pyGPlates with PlateTectonicTools and GPlately.
                  Geoscience Data Journal, 00, 1-8. Available from:
                  https://doi.org/10.1002/gdj3.185
                </cite>
              </div>
              <div className="column is-2">
                <div
                  style={{
                    textAlign: "center",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <CopyToClipboard
                    text="Mather, B. R., Müller, R. D., Zahirovic, S., Cannon, J., Chin,
                  M., Ilano, L., Wright, N. M., Alfonso, C., Williams, S.,
                  Tetley, M., Merdith, A. (2023) Deep time
                  spatio-temporal data analysis using pyGPlates with
                  PlateTectonicTools and GPlately. Geoscience Data Journal, 00,
                  1-8. Available from: https://doi.org/10.1002/gdj3.185"
                  >
                    <button className="button is-small is-success">
                      <span className="icon">
                        <FontAwesomeIcon
                          icon={faClipboard}
                          className="fa-spin"
                        />
                      </span>
                      <span>Copy </span>
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            <div>
              <a
                href="/publications"
                style={{
                  fontSize: "80%",
                  color: "blue",
                }}
              >
                More GPlates Publications &gt;&gt;
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* start of gplates family section */}
    <div className="container-fliud" style={{}}>
      <div className="container">
        <div className="column is-12 is-offset-0">
          <div className="column is-12">
            <div style={{ padding: "0" }}>
              <div className="columns section is-multiline">
                {/*start of pygplates section*/}
                <div className="column is-4 gp-card">
                  <div className="gp-card-container">
                    <div className="gp-card-front">
                      <img src={pygplatesLogo} alt="pyGPlates Screenshot" />
                    </div>

                    <div className="gp-card-back">
                      <div
                        style={{
                          textAlign: "center",
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          The <b>GPlates Python library (pyGPlates)</b> enables
                          access to GPlates functionality via the Python
                          programming language.{" "}
                        </div>
                      </div>
                      <div style={{}}>
                        <br></br>
                        <a
                          className="button is-link is-small"
                          href="https://www.gplates.org/docs/pygplates/"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="has-text-weight-semibold is-size-4"
                    style={{ marginTop: "10px", color: "grey" }}
                  >
                    pyGPlates
                  </h3>
                </div>
                {/*end of pygplates section*/}

                {/*start of portal section*/}
                <div className="column is-4 gp-card">
                  <div className="gp-card-container">
                    <div className="gp-card-front">
                      <img
                        src={portalScreenshot}
                        alt="GPlates Portal Screenshot"
                      ></img>
                    </div>

                    <div
                      className="gp-card-back"
                      style={{ backgroundColor: "#5c7f71" }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          The <b>GPlates Web Portal</b> is a gateway to a series
                          of web pages for the interactive visualisation of
                          cutting-edge geoscience datasets.
                        </div>
                      </div>
                      <div style={{}}>
                        <br></br>
                        <a
                          className="button is-link is-small"
                          href="https://portal.gplates.org/"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="has-text-weight-semibold is-size-4"
                    style={{ marginTop: "10px", color: "grey" }}
                  >
                    GPlates Web Portal
                  </h3>
                </div>
                {/*end of portal section*/}

                {/* start of gws card */}
                <div className="column is-4 gp-card">
                  <div className="gp-card-container">
                    <div className="gp-card-front">
                      <img
                        src={gwsScreenshot}
                        alt="GPlates Web Service Screenshot"
                      />
                    </div>

                    <div
                      className="gp-card-back"
                      style={{ backgroundColor: "#c6632c" }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          flex: "1",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          The <b>GPlates Web Service</b> interface allows users
                          to access plate tectonics reconstruction services via
                          Internet.{" "}
                        </div>
                      </div>
                      <div style={{}}>
                        <br></br>
                        <a
                          className="button is-link is-small"
                          href="https://gws.gplates.org/"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="has-text-weight-semibold is-size-4"
                    style={{ marginTop: "10px", color: "grey" }}
                  >
                    GPlates Web Service
                  </h3>
                </div>
                {/* end of gws card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end of gplates family section */}

    <div
      className="container-fliud box"
      style={{ backgroundColor: "gainsboro" }}
    >
      <div className="container">
        <div className="column is-12">
          <div className="columns section is-multiline">
            <div
              className="column is-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 className="has-text-weight-semibold is-size-3">
                Who are we?
              </h3>
              <div style={{ flex: "1" }}>
                <a
                  href="https://www.earthbyte.org/people/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={peoplePhoto} alt="EarthByte People" />
                </a>
              </div>
            </div>
            <div
              className="column is-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 className="has-text-weight-semibold is-size-3">
                Funded by AuScope
              </h3>
              <div
                style={{ flex: "1", display: "flex", flexDirection: "column" }}
              >
                <a
                  href="/auscope"
                  target="_blank"
                  rel="noreferrer"
                  style={{ margin: "auto" }}
                >
                  <img src={auscopeLogo} alt="AuScope Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* start of latest news section */}
    <div className="container">
      <div className="column is-12 is-offset-0">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-3">Latest News</h3>
          <br></br>
          <LatestNews />
        </div>
      </div>
    </div>
    {/* end of latest news section */}
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  descMarkdown: PropTypes.object,
  reasons: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        descMarkdown={frontmatter.descMarkdown}
        reasons={frontmatter.reasons}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        descMarkdown {
          childMarkdownRemark {
            html
          }
        }
        reasons
      }
    }
  }
`;
