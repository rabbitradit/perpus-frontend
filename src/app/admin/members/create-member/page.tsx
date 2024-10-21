'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createMemberSchema } from '@/features/members/schemas/createMemberSchema'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { IValues } from '@/features/members/types'
import { useMutateCreateMemberHook } from '@/features/members/hooks/useMutateCreateMemberHook'

export default function CreateMember() {

    const data = [
      {
        name: "first_name", 
        title: 'First Name'
      },
      {
        name: "last_name", 
        title: 'Last Name'
      },
      {
        name: "email", 
        title: 'Email'
      },
      {
        name: "phone_number", 
        title: 'Phone Number'
      },
      {
        name: "address", 
        title: 'Address'
      },
      {
        name: "id_card_number", 
        title: 'ID Card Number'
      }
    ]

    const {
      mutateCreateMember
    } = useMutateCreateMemberHook()
    return (
    <main className="grid grid-cols-1 gap-10 ">
        <h1 className="text-xl">CREATE MEMBER</h1>
        <Formik
        initialValues={{
            first_name: '', 
            last_name: '', 
            email: '', 
            phone_number: '', 
            address: '', 
            id_card_number: ''
        }}
        validationSchema={createMemberSchema}
        onSubmit={(values) => {
          mutateCreateMember(values)
        }}
        >
          <Form className='gap-3 flex-col flex'>
            {
              data.map(({name, title}, index) => {
                return (
                  <section key={index} className='flex flex-col'>
                    <h1 className='text-blue-400 text-lg'>{title}</h1>
                    <label className="input input-bordered border-gray-300 flex items-center gap-2">
                      <Field name={name} type="text" className="grow" placeholder='Type Here' />
                    </label>
                    <ErrorMessage name={name} component={'div'} className='text-red-600 text-sm'/>
                  </section>
                )
              })
            }
            <button type='submit' className="rounded-md transition-[0.25s] text-white p-3 hover:bg-blue-700 bg-blue-400 w-full">Create Member</button>
          </Form>
        </Formik>
    </main>
  )
}
