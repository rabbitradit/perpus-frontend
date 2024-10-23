import React from 'react'
import { createLendingApi } from '../api/createLendingApi'

export const createLendingHook = () => {
  // const onSuccess = (res: any) => {
  //   console.log(res)
  // }

  // const onError = (res: any) => {
  //   console.log(res)
  // }

  const {
    mutateCreateLending
  } = createLendingApi
  
    return {
        mutateCreateLending
    }
}
