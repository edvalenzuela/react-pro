import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction } from "../03-forms/pages";

type JSXComponent = () => JSX.Element

interface Route{
  to:        string
  path:      string
  Component: JSXComponent
  name:      string
}

export const routes:Route[] = [
  {
    to: '/',
    path: '',
    Component: RegisterPage,
    name: 'Register Page'
  },
  {
    to: '/formik-basic-page',
    path: 'formik-basic-page',
    Component: FormikBasicPage,
    name: 'Formik Basic Page'
  },
  {
    to: '/formik-yup',
    path: 'formik-yup',
    Component: FormikYupPage,
    name: 'Formik Yup'
  },
  {
    to: '/formik-components',
    path: 'formik-components',
    Component: FormikComponents,
    name: 'Formik components'
  },
  {
    to: '/formik-abstraction',
    path: 'formik-abstraction',
    Component: FormikAbstraction,
    name: 'Formik abstraction'
  }
];