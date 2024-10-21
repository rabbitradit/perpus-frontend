import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const ReturnPage = () => {
  return (
    <main className="grid grid-cols-1 gap-10 ">
        <h1 className="text-xl">LENDING / NEW LENDING</h1>
        <h1 className='text-3xl font-bold'>LENDING ID: <span>XXX</span></h1>
        <section className='flex flex-col gap-2'>
            <h3 className='font-bold'>Member Information</h3>
            <div className='grid grid-cols-2 font-bold w-[200px] ml-10'>
                <p>Member id</p><span className='font-normal ml-3'>xxx</span>
                <p>First Name</p><span className='font-normal ml-3'>Ryan</span>
                <p>Last Name</p><span className='font-normal ml-3'>Defryan</span>
            </div>
        </section>
        <section className='flex flex-col gap-2'>
            <h1 className='font-bold'>List of Books</h1>
            <table className='border-2 border-gray-200 rounded-3xl table-auto'>
                <thead className='text-blue-400'>
                    <tr className='bg-gray-200'>
                        <th className='p-3'>Book id</th>
                        <th className='p-3'>Title</th>
                        <th className='p-3'>Author</th>
                        <th className='p-3'>Publish Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-12'>
                        <td className='border-2 border-gray-200'></td>
                        <td className='border-2 border-gray-200'></td>
                        <td className='border-2 border-gray-200'></td>
                        <td className='border-2 border-gray-200'></td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section className='flex flex-col gap-2 text-red-500'>
            <h1 className='font-bold'>Penalty Charge</h1>
            <p className='font-bold ml-10'>Rp6.000,00</p>
        </section>
        <button className='hover:bg-blue-700 transition-[0.5s] bg-blue-400 rounded-md text-white p-3'>Complete Lending</button>
    </main>
  )
}

export default ReturnPage
