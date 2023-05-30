import React from 'react';




// const validate = (values) => {
//     const errors = {}

//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }

//     return errors
// };

// const handleFormSubmit = (e) => {
//     e.preventDefault();
// const formik = useFormik({
//     initialValues: {
//         email: '',
//     },
//     validate,
//     onSubmit: (values) => {
//         alert(JSON.stringify(values, null, 2))
//     },
// })
export default function Form() {
    return (
        <div>
            <div className="wrapper">
                <form className="form">
                    <div className="pageTitle title">Sign Up </div>
                    <div className="secondaryTitle title">Please fill this form to sign up.</div>
                    <input type="text" className="name formEntry" placeholder="Name" />
                    <input type="text" className="email formEntry" placeholder="Email" />
                    <textarea className="message formEntry" placeholder="Message"></textarea>

                    <br></br>
                    <button className="submit formEntry">Submit</button>
                </form>
            </div>

        </div>

    );

}