'use client'

import React from 'react'
import { MutationLoginApi } from '../api/MutationLoginApi'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/redux/slice/authSlice'

export const useMutationLoginHook = () => {
    const dispatch = useDispatch()
    const onSuccess = (res: any) => {
        console.log(res)
        toast.success(res?.data?.message)
        dispatch(setAuth(res?.data?.data))
    }

    const onError = (err: any) => {
        toast.error(err?.response?.data?.message)
    }
    
    const {
        mutateLogin
    } = MutationLoginApi(onSuccess, onError)

    return {
        mutateLogin
  }
}
