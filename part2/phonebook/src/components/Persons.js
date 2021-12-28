import React from "react"

const Persons = ({ name, deletePerson }) => {
    //console.log(name.id)
    return(
      <div>
        {name.name} {name.number} <button value={name.id} onClick={deletePerson}>delete</button>
      </div>
    )
  }

export default Persons