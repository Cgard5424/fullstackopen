import React from "react"

const FindCountries = (props) => {
    return(
     <div>
        find countries <input
            value={props.newFilter}
            onChange={props.handleFilterChange}
        />
    </div>
    )
  }

export default FindCountries