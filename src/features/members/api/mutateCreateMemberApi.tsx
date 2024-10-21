'use client'

import React from 'react'
import axios from 'axios'
import { IValues } from '../types'
import { useMutation } from '@tanstack/react-query'
import { useSelector } from 'react-redux'

export const mutateCreateMemberApi = (onSuccess: any, onError: any) => {
    const staffs_id = useSelector((state: any) => state.auth)

    const {mutate : mutateCreateMember} = useMutation({
        mutationFn: async(values: IValues) => {
          return await axios.post('http://localhost:3100/members', {
              staffs_id: staffs_id.auth.id,
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
