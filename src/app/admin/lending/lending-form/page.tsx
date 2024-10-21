import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

export default function LendingForm() {
  return (
    <main className="flex flex-col gap-7 ">
        <h1 className="text-xl">LENDING / NEW LENDING</h1>
        <h1 className='text-3xl font-bold'>FORM LENDING</h1>
        <section className='flex flex-col gap-1'>
          <h1 className='text-blue-400 text-lg'>Member ID</h1>
          <label className="col-[1/3] input w-full input-bordered border-2 border-gray-300 flex items-center gap-2 pr-5">
              <input type="text" className="grow" placeholder='Type Here'/>
              <IoSearchSharp color='#60a5fa' className='w-5 h-5'/>
          </label>
        </section>
        <h1 className='font-bold text-lg'>Member Information</h1>
        <section className='flex flex-col gap-1'>
          <h1 className='text-blue-400 text-lg'>Book Title / Author</h1>
          <label className="col-[1/3] input w-full input-bordered border-2 border-gray-300 flex items-center gap-2 pr-5">
              <input type="text" className="grow" placeholder='Type Here'/>
              <IoSearchSharp color='#60a5fa' className='w-5 h-5'/>
          </label>
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
        <button className='hover:bg-blue-700 transition-[0.5s] bg-blue-400 rounded-md text-white p-3'>Submit</button>
    </main>
  )
}
