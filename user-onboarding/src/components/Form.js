import formSchema from '../formSchema';
import { useEffect, useState } from 'react';

function Form(props) {
const { formData, handleChange, errors } = props;
const [ submitDisabled, setSubmitDisabled ] = useState(true)
const handleSubmit = evt => {
    evt.preventDefault();
    console.log('submitted');
}


useEffect(() => {
    formSchema.isValid(formData)
    .then(valid => {
        setSubmitDisabled(!valid)
    })
},[formData])

return (
    <div>
        <h1>Let's get you set up!</h1>
        <form onSubmit={handleSubmit}>
        <div className='inputs'>
        <label>
            First name: 
            <input 
                type='text' 
                name='fname' 
                placeholder='first name...' 
                value={formData.fname}
                onChange={handleChange} />
        </label>
        <label>
            Last name: 
            <input 
                type='text' 
                name='lname' 
                placeholder='last name...'
                value={formData.lname}
                onChange={handleChange}></input>
        </label>
        <label>Email: 
            <input 
                type='text' 
                name='email' 
                placeholder='email...'
                value={formData.email}
                onChange={handleChange}
                />
        </label>
        <label>Password: 
            <input 
                type='text' 
                name='password' 
                placeholder='password...'
                value={formData.password}
                onChange={handleChange}
                />
        </label>
        <div className='agree'>
            <input 
                type='checkbox' 
                name='agree'
                checked={formData.agree}
                onChange={handleChange}
                />            
            <label htmlFor='agree'>Please agree to our terms of service.</label>
        </div>
        </div>
        <div className='errors'></div>
        

        <input 
            type='submit' 
            value='create new user' 
            disabled={submitDisabled}/>

        </form>
        </div>
)
}

export default Form;