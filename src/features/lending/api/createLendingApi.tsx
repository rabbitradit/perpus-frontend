'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

export function createLendingApi() {
    // const staffs_id = useSelector((state: any) => state.auth)

    const {mutate: mutateCreateLending} = useMutation({
        mutationFn: async() => {
            return await axios.post('http:localhost:3100/lending', {
                members_id: '',
                books_id: '',
                // staffs_id: staffs_id?.auth?.id
            })
        },
        onSuccess: (res) => {
            console.log(res)
        },
        onError: (err) => {
            console.log(err)
        },
    })
  
    return {
        mutateCreateLending
    }
}
