'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginSchema } from '@/features/auth/schemas/loginSchema'
import { useMutationLoginHook } from '@/features/auth/hooks/useMutationLoginHook'
import { IoMdPerson } from 'react-icons/io'
import { FaKey } from 'react-icons/fa'

const LoginPage = () => {
  const { mutateLogin } = useMutationLoginHook()
  
  return (
      <section className='flex flex-col items-center justify-center text-black h-screen w-full gap-5'>
        <h1 className='text-2xl flex'>Welcome, <strong className='ml-1'>Back!</strong></h1>
        <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          mutateLogin(values)
        }}
        >
          <Form className='gap-2 flex-col flex'>
            <section>
              <label className="input input-bordered border-blue-500 flex items-center gap-2">
                <IoMdPerson color='#d1d5db' className='w-4 h-4'/>
                <Field name='username' type="text" className="grow" placeholder="Username" />
              </label>
              <ErrorMessage name='username' component={'div'} className='text-red-600 text-sm'/>
            </section>
            <section>
              <label className="input input-bordered border-blue-500 flex items-center gap-2">
                <FaKey color='#d1d5db' className='w-3 h-3'/>
                <Field name="password" type="password" className="grow" placeholder='Password' />
              </label>
              <ErrorMessage name='password' component={'div'} className='text-red-600 text-sm'/>
            </section>
            <button type='submit' className="rounded-md transition-[0.25s] text-white p-2 font-bold hover:bg-blue-700 bg-blue-400 w-full">Login</button>
          </Form>
        </Formik>
        </section>
  )
}

export default LoginPage
