import React from "react"
import { Form, Button } from 'react-bootstrap'

const PersonForm = (props) => {
    return(
      <div>
        <Form onSubmit={props.addName}>
          <Form.Group>
            <Form.Label>name:</Form.Label>
            <Form.Control
              type="text"
              value={props.newName}
              onChange={props.handleNameChange}
              //name="username"
            />
            <Form.Label>number:</Form.Label>
            <Form.Control
              type="text"
              value={props.newNumber}
              onChange={props.handleNumberChange}
            />
            <Button variant="primary" type="submit">
              add
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }

export default PersonForm