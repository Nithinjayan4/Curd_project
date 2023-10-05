import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; 
import { setUsers } from './Components/Redux/userActions'; 
import UserForm from './Components/UserForm'; 
import UserTable from './Components/UserTable';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    address: '',
  });

  const dispatch = useDispatch(); 
  const users = useSelector((state) => state.users); 

  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      dispatch(setUsers(data)); 
    } catch (error) {
      console.error(error);
    }
  };

  const [formErrors, setFormErrors] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    address: '',
  });
  const validateForm = () => {
    let valid = true;
    const errors = {
      first_name: '',
      last_name: '',
      dob: '',
      address: '',
    };

    // First Name Validation
    if (!formData.first_name.trim()) {
      errors.first_name = 'First Name is required.';
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.first_name.trim())) {
      errors.first_name = 'First Name should not contain numbers or special characters.';
      valid = false;
    }

    

    // Last Name Validation
    if (!formData.last_name.trim()) {
      errors.last_name = 'Last Name is required.';
      valid = false;
    }  else if (!/^[A-Za-z\s]+$/.test(formData.last_name.trim())) {
      errors.last_name = 'Last Name should not contain numbers or special characters.';
      valid = false;
    }

    // Date of Birth  Validation
    if (!formData.dob) {
      errors.dob = 'Date of Birth is required.';
      valid = false;
    } else {
      // Checking DOB is not a future date
      const currentDate = new Date();
      const selectedDate = new Date(formData.dob);
      if (selectedDate > currentDate) {
        errors.dob = 'Date of Birth cannot be a future date.';
        valid = false;
      }
    }

    // Address Validation
    if (!formData.address.trim()) {
      errors.address = 'Address is required.';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData(user);
    setShowModal(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if  (!validateForm()) {
      return;
      

      }
    try {
      const response = await fetch(
        selectedUser.id
          ? `http://localhost:3001/users/${selectedUser.id}`
          : 'http://localhost:3001/users',
        {
          method: selectedUser.id ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        fetchData();
        setShowModal(false);
        setFormData({
          first_name: '',
          last_name: '',
          dob: '',
          address: '',
        });
      }
    } catch (error) {
      console.error(error);
    } 

    }
    
  
  

  return (
    <Container>
      <h1>User Management</h1>
      <Button onClick={() => setShowModal(true)} className="mb-3">
        Add User
      </Button>

     
      <UserTable
        users={users}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />

 
      <UserForm

        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        selectedUser={selectedUser}
        formData={formData}
        formErrors={formErrors}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default App;
