import React from "react"
import { Form } from 'react-bootstrap'

const Filter = (props) => {
    return(
      <div>
        <Form>
          <Form.Label>filter names shown with:</Form.Label>
          <Form.Control
            type="text"
            value={ props.newFilter }
            onChange={ props.handleFilterChange}
          />
        </Form>
      </div>
    )
  }

export default Filter