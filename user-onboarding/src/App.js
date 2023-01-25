
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import UserList from './components/UserList';
import * as yup from 'yup';
import formSchema from './formSchema'

function App() {

  const initialValues= { fname: "", lname: "", email: "", password: "", agree: "" };
  const [ formData, setFormData ] = useState(initialValues);
  const [ errors, setErrors ] = useState(initialValues);
  const [ users, setUsers ] = useState([]);

  const createUser = (() => {
    axios.post(`https://reqres.in/api/users`, {...formData})
    .then(res => setUsers([res.data, ...users]))
    .catch(err => console.error(err))
  })

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
        .then(() => setErrors({ ...errors, [name]: ""}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormData( {...formData, [name]: value})
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    createUser(formData);
    setFormData(initialValues);
}



  return (
    <div className="App">
      <Form handleChange={handleChange} 
      formData={formData} 
      errors={errors}
      submit={handleSubmit}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
