
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  const initialValues= { fname: "", lname: "", email: "", password: "", agree: "" };
  const [ formData, setFormData ] = useState(initialValues);
  const [ errors, setErrors ] = useState(initialValues);

  const handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    setFormData( {...formData, [name]: valueToUse})
  }



  return (
    <div className="App">
      <Form handleChange={handleChange} formData={formData} errors={errors}/>
    </div>
  );
}

export default App;
