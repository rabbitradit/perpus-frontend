'use client'

import axios from 'axios'
import React, { useEffect } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import Link from 'next/link'

const MembersPage = () => {

    const getMembers = async() => {
        try {
            return await axios.get('http://localhost:3100/members')
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
    getMembers()
  },[])
    
  return (
    <main className="grid grid-cols-1 gap-10 ">
        <h1 className="text-xl">MEMBERS</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
            <label className="md:col-[1/3] input w-full input-bordered border-2 border-blue-400 flex items-center gap-2 pr-10">
                <input type="text" className="grow" />
                <IoSearchSharp color='#60a5fa' className='w-10 h-10'/>
            </label>
            <Link href='/admin/members/create-member'>
                <div className='text-lg hover:bg-blue-700 transition-[0.5s] bg-blue-400 text-white rounded-md flex items-center justify-center p-3 md:p-[auto] md:h-full'>Create Member</div>
            </Link>
        </section>
        <section className='hidden md:flex flex-col border-2 border-gray-300 rounded-md'>
            <div className='grid grid-cols-4 p-3 text-center bg-gray-300 font-bold text-blue-400'>
                <h1>Member ID</h1>
                <h1>Name</h1>
                <h1>Email</h1>
                <h1>Location</h1>
            </div>
            <div className='grid grid-cols-4 text-black'>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='box-border p-3 h-12'></p>
            </div>
            <div className='grid grid-cols-4 text-black border-t-2 border-t-gray-300'>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='box-border p-3 h-12'></p>
            </div>
            <div className='grid grid-cols-4 text-black border-t-2 border-t-gray-300'>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='box-border p-3 h-12'></p>
            </div>
            <div className='grid grid-cols-4 text-black border-t-2 border-t-gray-300'>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='box-border p-3 h-12'></p>
            </div>
        </section>
        <section className='md:hidden flex flex-col border-2 border-gray-300 rounded-md'>
            <div className='grid grid-cols-3 p-3 text-center bg-gray-300 font-bold text-blue-400'>
                <h1>Member ID</h1>
                <h1>Name</h1>
                <h1>Email</h1>
            </div>
            <div className='grid grid-cols-3 text-black'>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='box-border p-3 h-12'></p>
            </div>
            <div className='grid grid-cols-3 text-black border-t-2 border-t-gray-300'>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='border-r-2 border-r-gray-300 box-border p-3 h-12'></p>
                <p className='box-border p-3 h-12'></p>
            </div>
        </section>
    </main>
  )
}

export default MembersPage
