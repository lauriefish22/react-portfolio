// import React from 'react';
// import { useFormik } from 'formik'



// export default function App() {
//     const [mousy, setMousy] = useState([]);
//     const handleMouseEvent = (e) => {
//         e.persist();
//         setTimeout(() => {
//             setMousy((prevMousy) => [...prevMousy, e.target.innerText]);
//         },
//             1000);
//     };
//     const validate = (values) => {
//         const errors = {}

//         if (!values.email) {
//             errors.email = 'Required'
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//             errors.email = 'Invalid email address'
//         }

//         return errors
//     };

//     // const handleFormSubmit = (e) => {
//     //     e.preventDefault();
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//         },
//         validate,
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2))
//         },
//     })
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" name="email" id="email"
//                         onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
//                     {formik.touched.email && formik.errors.email && (
//                         <span>{formik.errors.email}</span>
//                     )}
//                     <button type='submit'>Submit</button>
//                     <ul className='mouse' onMouseOut={handleMouseEvent}>{mousy.map((text, index) => (
//                         <li key={index} className="message formEntry" placeholder="Message">{text}</li>))}
//                     </ul>

//                     <br></br>
//                     <button className="submit formEntry" type='submit'>Submit</button>
//                 </div >
//             </form>
//         </div>
//     );
// }
