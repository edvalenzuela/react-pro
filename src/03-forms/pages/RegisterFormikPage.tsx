import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, FormikHelpers } from 'formik';

import '../styles/styles.css'

interface InitialValues {
  name      : string,
  email     : string,
  password1 : string,
  password2 : string
}

const RegisterFormikPage = () => {

  const initialValues:InitialValues = {
    name: '',
    email:'',
    password1:'',
    password2:''
  }

  const onSubmit = ( values:InitialValues, formikHelpers: FormikHelpers<InitialValues> ) => {
    console.log(values);
  }

  const validationSchema = () => (
    Yup.object({
      name: Yup.string()
               .min(2, 'Debe de tener mínimo 2 caracteres')
               .max(15,'Debe de tener máximo 15 caracteres')
               .required('Requerido'),
      email: Yup.string()
                .email('El correo no tiene un formato válido')
                .required('Requerido'),
      password1: Yup.string()
                    .min(6, 'Debe de tener mínimo 6 caracteres')
                    .required('Requerido'),
      password2: Yup.string()
                    .min(6, 'Debe de tener mínimo 6 caracteres')
                    .oneOf([Yup.ref("password1")], "Las passwords no coinciden")
                    .required('Requerido')
    })
  )

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({values, handleChange, handleBlur, handleReset}) => (
          <Form>
            <input 
              type="text"
              placeholder="Name"
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name='name' component='span' />
    
            <input 
              type="email"
              placeholder="Email"
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name='email' component='span' />
    
            <input 
              type="password"
              placeholder="Password"
              name='password1'
              value={values.password1}
              onChange={handleChange} 
              onBlur={handleBlur}
            />
            <ErrorMessage name='password1' component='span' />
    
            <input 
              type="password"
              placeholder="Repeat Password"
              name='password2'
              value={values.password2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage name='password2' component='span' />
            
            <button type="submit">Create</button>
            <button onClick={handleReset}>Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormikPage