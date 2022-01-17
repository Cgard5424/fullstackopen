import React from "react"
import { Table, Button } from 'react-bootstrap'
import '../index.css'

const Persons = ({ name, deletePerson }) => {
    return(
      <div className="Persons">
        {name.name} {name.number}
        <Button variant="primary" type="submit" value={name.id} onClick={deletePerson}>
          delete
        </Button>
      </div>
    )
  }

export default Persons