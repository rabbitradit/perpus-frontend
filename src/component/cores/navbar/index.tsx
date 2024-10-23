'use client'

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Link from 'next/link'

export default function Navbar() {
  const branch = useSelector((state: any) => state.auth)

  return (
    <nav className="bg-gray-300 h-fit p-2 rounded-md grid grid-cols-1 sm:grid-cols-3 lg:flex justify-end items-end">
        <h1 className='hidden sm:flex lg:hidden text-xl'>Hello, <strong className='ml-1'>User</strong></h1>
        <ul className='lg:hidden flex justify-evenly sm:justify-center gap-5'>
          <li><Link href='/admin'>Home</Link></li>
          <li><Link href='/admin/members'>Members</Link></li>
          <li><Link href='/admin/lending'>Lending</Link></li>
        </ul>
        <section className='hidden sm:flex justify-end'>
          <h1 className="text-sm">{branch.auth.name}</h1>
          <IoLocationSharp className="w-8 h-8" />
          <ToastContainer />
        </section>
    </nav>
  )
}
