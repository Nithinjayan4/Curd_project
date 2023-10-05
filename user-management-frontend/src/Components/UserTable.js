
import React from 'react';
import { Table, Button } from 'react-bootstrap';

function UserTable({ users, handleEditClick, handleDeleteClick }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.dob}</td>
            <td>{user.address}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => handleEditClick(user)}
                className="me-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDeleteClick(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;
