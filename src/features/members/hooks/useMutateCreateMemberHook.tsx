'use client'

import React from 'react'
import { mutateCreateMemberApi } from '../api/mutateCreateMemberApi'
import { toast } from 'react-toastify'

export const useMutateCreateMemberHook = () => {
  const onSuccess = (res: any) => {
    toast.success('Create member success')
  }

  const onError = (err: any) => {
    toast.error('Create member failed! try again')
  }
  
  const {
    mutateCreateMember
  } = mutateCreateMemberApi(onSuccess, onError)
  
    return {
        mutateCreateMember
    }
}
