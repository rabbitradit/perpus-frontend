import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { RiBookFill } from "react-icons/ri";
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-10 border-r border-r-gray-400 lg:left-0 p-2 h-full text-center bg-white text-black">
          <section className="p-10">
            <h1 className="text-3xl md:text-4xl font-extralight text-blue-400 text-left">
              Hello,
            </h1>
            <h1 className="text-3xl md:text-4xl font-medium text-blue-400 text-left">
              <strong>User!</strong>
            </h1>
            <section className="px-5 py-5 md:py-10 flex flex-col gap-3 md:gap-5 items-left">
              <Link href='/admin'>
                <div className="flex items-center gap-2 md:gap-3 hover:text-blue-400 transition-[0.25s]">
                  <FaHome />
                  <h1>
                    Home
                  </h1>
                </div>
              </Link>
              <Link href='/admin/members'>
                <div className="flex items-center gap-2 md:gap-3 hover:text-blue-400 transition-[0.25s]">
                  <MdPeopleAlt />
                  <h1>
                    Members
                  </h1>
                </div>
              </Link>
              <Link href='/admin/lending'>
                <div className="flex items-center gap-2 md:gap-3 hover:text-blue-400 transition-[0.25s]">
                  <RiBookFill />
                  <h1>
                    Lending
                  </h1>
                </div>
              </Link>
            </section>
          </section>
      </aside>
  )
   
  
}

export default Sidebar
