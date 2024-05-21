import React, { useContext } from 'react'
import { Formik } from 'formik'; 
import axios from 'axios';
import MainContext from '../../context/context';
import "./Addproduct.css"

const Addproduct = () => {
    const {data , setData} = useContext(MainContext)
    return (
        <div className='formik_form'>
            <h1>Melumatlar daxil edin!</h1>
            <Formik
                initialValues={{ title: '',name: '',position:'',image2: '', image1: '', price: '', description: '' }}
                validate={values => {
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:8080/product",{
                        title: values.title,
                        name: values.name,
                        position: values.position,
                        image1: values.image1,
                        image2: values.image2,
                        price: values.price,
                        description: values.description,
                    }).then(res=>{
                        setData([...data, res.data])
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder='title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && errors.title}
                        <input
                            type="text"
                            name="name"
                            placeholder='name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            type="text"
                            name="position"
                            placeholder='position'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.position}
                        />
                        {errors.position && touched.position && errors.position}
                        <input
                            type="text"
                            name="image1"
                            placeholder='image1'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image1}
                        />
                        {errors.image1 && touched.image1 && errors.image1}
                        <input
                            type="text"
                            name="image2"
                            placeholder='image2'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image2}
                        />
                        {errors.image2 && touched.image2 && errors.image2}
                        <input
                            type="text"
                            name="price"
                            placeholder='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                        <input
                            type="text"
                            name="description"
                            placeholder='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && errors.description}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
  
};
export default Addproduct