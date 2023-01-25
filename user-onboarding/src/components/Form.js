import formSchema from '../formSchema';
import { useEffect, useState } from 'react';

function Form(props) {
const { formData, 
        handleChange, 
        errors,
        submit } = props;
const [ submitDisabled, setSubmitDisabled ] = useState(true)

const change = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    handleChange(name, valueToUse)

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
        <div className='container'>
        <form onSubmit={submit}>
        <div className='inputs'>
        <label>
            First name: 
            <input 
                type='text' 
                name='fname' 
                placeholder='first name...' 
                value={formData.fname}
                onChange={change} />
        </label>
        <label>
            Last name: 
            <input 
                type='text' 
                name='lname' 
                placeholder='last name...'
                value={formData.lname}
                onChange={change}></input>
        </label>
        <label>Email: 
            <input 
                type='text' 
                name='email' 
                placeholder='email...'
                value={formData.email}
                onChange={change}
                />
        </label>
        <label>Password: 
            <input 
                type='text' 
                name='password' 
                placeholder='password...'
                value={formData.password}
                onChange={change}
                />
        </label>
        <div className='agree'>
            <input 
                type='checkbox' 
                name='agree'
                checked={formData.agree}
                onChange={change}
                />            
            <label htmlFor='agree'>Please agree to our terms of service.</label>
        </div>
        </div>
        <div className='errors'> 
            <div>{errors.fname}</div>
            <div>{errors.lname}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.agree}</div>
        </div>
        

        <input 
            type='submit' 
            value='create new user' 
            disabled={submitDisabled}/>

        </form>
        </div>
        </div>
)
}

export default Form;