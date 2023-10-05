import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

function UserForm({
  showModal,
  handleCloseModal,
  selectedUser,
  formData,
  handleFormChange,
  handleSubmit,
  formErrors
}) {
    

  

    
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedUser.id ? 'Edit User' : 'Add User'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              required
              pattern="[A-Za-z]+"
              value={formData.first_name}
              onChange={handleFormChange}
              isInvalid={formErrors.first_name !== ''}
            />
            <Form.Control.Feedback type="invalid">
            {formErrors.first_name }
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              required
              pattern="[A-Za-z]+"
              value={formData.last_name}
              onChange={handleFormChange}
              isInvalid={formErrors.last_name !== ''}
            />
            <Form.Control.Feedback type="invalid">
            {formErrors.last_name }
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleFormChange}
              isInvalid={formErrors.dob !== ''}
            />
          
           
              <Form.Control.Feedback type="invalid">
              {formErrors.dob }
              </Form.Control.Feedback>
            
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              isInvalid={formErrors.address !== ''}
            />
            <Form.Control.Feedback type="invalid">
                {formErrors.address}
              </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserForm;
