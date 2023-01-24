import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    fname: Yup
        .string()
        .trim()
        .min(2, "First name must be at least 2 letters.")
        .required("Must input a first name."),
    lname: Yup
        .string()
        .trim()
        .min(3, "Last name must be at least 3 letters")
        .required("Must input a last name."),
    email: Yup
        .string()
        .trim()
        .email("Must be a valid email address.")
        .required("Must input and email address."),
    password: Yup
        .string()
        .trim()
        .required("Must input a password")
        .min(6, "Password must be at least 6 characters."),
    agree: Yup  
        .boolean()
        .oneOf([true], "You must accept the terms to create your account.")

})

export default formSchema;