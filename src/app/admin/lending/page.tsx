import React from 'react'
import Link from 'next/link'
import { IoSearchSharp } from 'react-icons/io5'

const LendingPage = () => {
  return (
    <main className="grid grid-cols-1 gap-10 ">
        <h1 className="text-xl">LENDING</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
            <label className="md:col-[1/3] input w-full input-bordered border-2 border-blue-400 flex items-center gap-2 pr-10">
                <input type="text" className="grow" />
                <IoSearchSharp color='#60a5fa' className='w-10 h-10'/>
            </label>
            <Link href='/admin/lending/lending-form'>
                <div className='text-lg hover:bg-blue-700 transition-[0.5s] bg-blue-400 text-white rounded-md flex items-center justify-center p-3 md:p-[auto] md:h-full'>New Lending</div>
            </Link>
        </section>
        <table className='border-2 border-gray-200 rounded-3xl'>
            <thead className='text-blue-400'>
                <tr className='bg-gray-200'>
                    <th className='p-3'>Borrow Date</th>
                    <th className='p-3'>Due Date</th>
                    <th className='p-3'>First Name</th>
                    <th className='p-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className='h-12'>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                </tr>
                <tr className='h-12'>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                </tr>
                <tr className='h-12'>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                </tr>
                <tr className='h-12'>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                    <td className='border-2 border-gray-200'></td>
                </tr>
            </tbody>
        </table>
    </main>
  )
}

export default LendingPage