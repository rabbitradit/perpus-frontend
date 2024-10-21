'use client'

import React from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { IValues } from '../types'

export const MutationLoginApi = (onSuccess: any, onError: any) => {
    const {mutate: mutateLogin} = useMutation({
        mutationFn: async(values: IValues) => {
          return await axios.post('http://localhost:3100/auth',{
            username: values.username,
            password: values.password
          })
        },
        onSuccess,
        onError
      })
  
    return {
        mutateLogin
  }
}
