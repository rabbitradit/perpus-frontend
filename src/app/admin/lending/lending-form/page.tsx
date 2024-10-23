'use client'

import { createLendingHook } from '@/features/lending/hooks/createLendingHook'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react'
import { replace } from 'formik'

export default function LendingForm() {
    const staffs_id = useSelector((state: any) => state.auth)
    const [members, setMembers] = useState([])
    const [books, setBooks] = useState([])
    const [memberToLending, setMemberToLending] = useState({})
    const [booksToLending, setBooksToLending] = useState([])

    const {mutate: mutateCreateLending} = useMutation({
        mutationFn: async() => {
            return await axios.post('http:localhost:3100/lending', {
                members_id: '',
                books_id: '',
                staffs_id: staffs_id?.auth?.id
            })
        },
        onSuccess: (res) => {
            console.log(res)
        },
        onError: (err) => {
            console.log(err)
        },
    })

    const {mutate: mutateGetMembersBySearch} = useMutation({
        mutationFn: async(value) => {
            const res: any = await axios.get('http://localhost:3100/members/search', {
                params: {
                    data: value
                }
            })
            console.log(res)
            return setMembers(res.data.data)
        },
        onSuccess: (res: any) => {
            console.log(res)
        },
        onError: (err: any) => {
            console.log(err)
        }
    })

    const getMembersDebounce = useDebouncedCallback(
        (value) => {
            mutateGetMembersBySearch(value)
        }
        , 1500)

    const chooseMember = (member: any) => {
        setMemberToLending({...member})
        setMembers([])
    }    

    const {mutate: mutateGetBooksBySearch} = useMutation({
        mutationFn: async(values) => {
            const res: any = await axios.get('http://localhost:3100/books/search', {
                params: {
                    data: values
                }
            })
            console.log(res)
            return setBooks(res.data.data)
        },
        onSuccess: (res) => {
            console.log(res)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const getBooksDebounce = useDebouncedCallback(
        (value) => {
            mutateGetBooksBySearch(value)
        }
    , 1500)

    const chooseBooks = (book: any) => {
        if(booksToLending.length >= 5) {
            const replaceEndBook = [...booksToLending]
            replaceEndBook.pop()
            setBooksToLending([...replaceEndBook, {...book}])
        } else {
            setBooksToLending([...booksToLending, {...book}])
        }
        setBooks([])
    }

  return (
    <main className="flex flex-col gap-7 ">
        <h1 className="text-xl">LENDING / NEW LENDING</h1>
        <h1 className='text-3xl font-bold'>FORM LENDING</h1>
        <section className='flex flex-col gap-1'>
          <h1 className='text-blue-400 text-lg'>Member ID</h1>
          <label className="col-[1/3] input w-full input-bordered border-2 border-gray-300 flex items-center gap-2 pr-5">
              <input type="text" className="grow" placeholder='Type Here' onChange={(e) => getMembersDebounce(e.target.value)}/>
              <IoSearchSharp color='#60a5fa' className='w-5 h-5'/>
          </label>
          {
            members.length > 0 &&
          (<ul className='border border-gray-300 flex flex-col rounded-md p-2'>
            {
                members?.map((item: any, index: number) => {
                    return(
                        <li key={index} className='hover:bg-gray-300 bg-white p-2 rounded-md' onClick={() => chooseMember(item)}>{item.first_name} {item.last_name} / {item.email} / {item.phone_number} ({item.id})</li>
                    )
                })
            }
          </ul>)
          }
        </section>
        <section className='flex flex-col gap-2'>
            <h1 className='font-bold'>Member Details</h1>
            <table className='border-2 border-gray-200 rounded-3xl table-auto'>
                <thead className='text-blue-400'>
                    <tr className='bg-gray-200'>
                        <th className='p-3'>Member ID</th>
                        <th className='p-3'>Name</th>
                        <th className='p-3'>Phone Number</th>
                        <th className='p-3'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-12'>
                        <td className='border-2 border-gray-200 px-1'>{memberToLending?.id}</td>
                        <td className='border-2 border-gray-200 px-1'>{memberToLending?.first_name} {memberToLending?.last_name}</td>
                        <td className='border-2 border-gray-200 px-1'>{memberToLending?.phone_number}</td>
                        <td className='border-2 border-gray-200 px-1'>{memberToLending?.email}</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <h1 className='font-bold text-lg'>Member Information</h1>
        <section className='flex flex-col gap-1'>
          <h1 className='text-blue-400 text-lg'>Book Title / Author</h1>
          <label className="col-[1/3] input w-full input-bordered border-2 border-gray-300 flex items-center gap-2 pr-5">
              <input type="text" className="grow" placeholder='Type Here' onChange={(e) => getBooksDebounce(e.target.value)}/>
              <IoSearchSharp color='#60a5fa' className='w-5 h-5'/>
          </label>
          {
            books.length > 0 &&
          (<ul className='border border-gray-300 flex flex-col rounded-md p-2'>
            {
                books?.map((item: any, index: number) => {
                    return(
                        <li key={index} className='hover:bg-gray-300 bg-white p-2 rounded-md' onClick={() => chooseBooks(item)}>{item.title} / {item.author} / {item.year}</li>
                    )
                })
            }
          </ul>)
          }
        </section>
        <section className='flex flex-col gap-2'>
            <h1 className='font-bold'>List of Books</h1>
            <table className='border-2 border-gray-200 rounded-3xl table-auto'>
                <thead className='text-blue-400'>
                    <tr className='bg-gray-200'>
                        <th className='p-3'>Number</th>
                        <th className='p-3'>Title</th>
                        <th className='p-3'>Author</th>
                        <th className='p-3'>Publish Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booksToLending?.map((item: any, index: number) => {
                            return(
                                <tr className='h-12'>
                                    <td className='border-2 border-gray-200 p-1'>{index + 1}</td>
                                    <td className='border-2 border-gray-200 p-1'>{item.title}</td>
                                    <td className='border-2 border-gray-200 p-1'>{item.author}</td>
                                    <td className='border-2 border-gray-200 p-1'>{item.year}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
        <button className='hover:bg-blue-700 transition-[0.5s] bg-blue-400 rounded-md text-white p-3'>Submit</button>
    </main>
  )
}
