import React from "react"

const Persons = ({ name }) => {
    //console.log(name.id)
    return(
      <div>
        {name.name} {name.number}
      </div>
    )
  }

export default Persons