'use client'

import React from 'react'
import axios from 'axios'
import { IValues } from '../types'
import { useMutation } from '@tanstack/react-query'

export const mutateCreateMemberApi = (onSuccess: any, onError: any) => {

    const {mutate : mutateCreateMember} = useMutation({
        mutationFn: async(values: IValues) => {
          return await axios.post('http://localhost:3100/members', {
              first_name: values.first_name, 
              last_name: values.last_name,  
              email: values.email,  
              phone_number: values.phone_number,  
              address: values.address,  
              id_card_number: values.id_card_number
          })
        },
        onSuccess,
        onError
      })
    

  return {
    mutateCreateMember
  }
}
