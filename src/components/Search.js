import React from "react"
import { Helmet } from "react-helmet"

const Search = () => {
  return (
    <div>
      <Helmet>
        <script
          async
          src="https://cse.google.com/cse.js?cx=4ca79a384a9562b33"
        ></script>
      </Helmet>

      <div className="gcse-search"></div>
    </div>
  )
}


export default Search
