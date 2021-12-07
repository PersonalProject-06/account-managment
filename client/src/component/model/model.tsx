import React from 'react'
import {Modal , Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"

function Model({model , setModel}:any) {
    let navigate = useNavigate()
    return (
        <div>
         <Modal show={model} >
        <Modal.Header closeButton>
          <Modal.Title>Your account is created </Modal.Title>
        </Modal.Header>
        <Modal.Body>Now Sign in to your Account</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{
              navigate('/')
              setModel(false)
              }}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Model
