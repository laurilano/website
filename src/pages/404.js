import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          color: '#48c774',
          lineHeight: '1',
          padding: '0.25em',
          textAlign: 'center'
        }}>
          PAGE NOT FOUND!
          </h1>

      <p className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
       style={{
        color: '#black',
        lineHeight: '1',
        padding: '0.25em',
        textAlign: 'center'
       }}
      > 
        You just hit a route that doesn&#39;t exist... the sadness.
        
      </p>
      
      <div className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
       style={{
        color: '#blue',
        lineHeight: '1',
        padding: '0.25em',
        textAlign: 'center'
       }}><a href="/">Go Back To Landing Page</a></div>

      <div id="gplates-icon-div" className="container" style={{width:"400px"}}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 640.000000 640.000000"
          preserveAspectRatio="xMidYMid meet">

          <metadata>
          Contact Michael Chin
          </metadata>
          
          <defs xmlns="http://www.w3.org/2000/svg">
            <filter id="dropshadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="10"/> 
              <feOffset dx="15" dy="15" result="offsetblur"/> 
              <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
          </defs>

          <g id="hexagon" transform="translate(0.000000,0.000000) scale(1.000000,1.000000)"
            fill="white" stroke="none" >
            
            <path d="m 616.05789,320.38773 -148.22281,256.72943 -296.44561,0 L 23.166656,320.38773 171.38947,63.65829 l 296.44561,0 148.22281,256.72944 z"/>
          </g>

          <g id="hexagon-with-teeth" transform="translate(0.000000,0.000000) scale(1.00000,1.000000)"
            fill="#e91e00" stroke="none">
            
            <path d="M 171.375,55.71875 164.5,59.6875 16.28125,316.40625 l 0,7.96875 148.21875,256.71875 6.875,3.96875 296.46875,0 6.875,-3.96875 148.21875,-256.71875 0,-7.96875 -148.21875,-256.71875 -6.875,-3.96875 -296.46875,0 z m 4.625,15.875 287.21875,0 24.32099,44.53269 -16.6912,44.53268 47.30196,5.99537 4.73587,9.53841 -16.12377,45.24731 45.5342,4.22761 4.73588,8.12421 -19.30576,46.30797 47.65552,5.64181 21.49256,34.63319 -143.625,248.78125 -287.28125,0 L 32.375,320.375 176,71.59375 z"/>
            
          </g>

          <g id="big-g" fill="#e91e63" stroke="none" filter="url(#dropshadow)">
            <path d="M325.3,506c-24.6,0-47.6-4.7-68.9-14.1c-21.3-9.4-39.9-22.5-55.8-39.3c-15.9-17-28.4-36.7-37.4-59.3
                c-9-22.6-13.5-47.1-13.5-73.5c0-25.2,4.2-49,12.6-71.3c8.4-22.5,20.5-42.2,36.3-59.3c15.8-17.2,34.8-30.7,57.2-40.4
                c22.3-9.9,47.3-14.8,75-14.8c15.6,0,31.4,1.7,47.2,5.2c15.9,3.5,31.2,8.6,45.9,15.4c14.6,6.7,27.8,14.8,39.6,24.6l-33,54.5
                c-12.6-11.7-27.9-20.8-45.9-27.2c-17.8-6.5-35.4-9.8-52.8-9.8c-17.1,0-32.2,3-45.4,9.1c-13,5.9-24,14.3-33,25.2
                c-9,10.9-15.8,23.6-20.4,38.2c-4.6,14.5-7,30.3-7,47.4c0,18.7,2.6,35.6,7.8,50.9c5.2,15.2,12.5,28.3,21.7,39.3
                c9.4,11,20.4,19.5,32.8,25.4c12.6,5.9,26.1,8.9,40.6,8.9c11.6,0,22.7-1.9,33.5-5.7c10.9-3.9,20.5-9.3,28.9-16.3
                c8.4-7,15.1-15.1,20-24.6c4.9-9.4,7.4-19.7,7.4-30.9v-5.4h-94.1v-54.5h165.8v54.3c0,21.9-4.6,41.9-13.7,60
                c-9,18-21.3,33.5-36.9,46.7c-15.6,13-33.3,23.2-53,30.4C366.9,502.5,346.5,506,325.3,506L325.3,506z"
            />
          </g> 

          <g id="old-g" fill="#e91e63" stroke="none" transform="translate(-2710,-410) scale(3.5)" display="none">
            <path d="m 878.70837,218.63899 0,7.056 2.25963,0.72 2.304,2.016 0,21.66701 c -3.744,0.288 -6.48,0.432 -7.92,0.432 -22.17598,0 -35.712,-15.12003 -35.712,-41.04 0,-25.19997 13.24802,-40.176 34.704,-40.176 4.176,0 7.77938,1.54011 11.66738,3.12411 l 6.57165,5.38035 0.88595,13.45977 7.38115,0 0.85387,-26.28423 c -10.65599,-3.168 -20.88001,-4.752 -30.384,-4.752 -31.96797,0 -52.56,19.72803 -52.56,49.248 0,29.95197 20.44803,50.688 50.688,50.688 10.51199,0 22.59112,-2.50806 33.67911,-6.39606 l 0,-25.84301 0.88089,-1.52394 4.50959,-0.72 0,-7.056 -29.80922,0"/>
          </g>

        </svg>
       </div>
    </div>
  </Layout>
)

export default NotFoundPage
