import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/component/cores/sidebar";
import { FaHome } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { RiBookFill } from "react-icons/ri";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Sidebar/> */}
        <main className='grid grid-cols-4 gap-5 w-full h-screen bg-white'>
        <aside className="cols-[1/2] sidebar top-0 bottom-0 lg:left-0 p-2 overflow-y-auto text-center bg-white text-black">
          <section className="p-10">
            <h1 className="text-3xl md:text-4xl font-medium text-blue-600 text-left">
              Hello,
            </h1>
            <h1 className="text-3xl md:text-4xl font-medium text-blue-600 text-left">
              <strong>User!</strong>
            </h1>
            <section className="py-5 md:py-10 flex flex-col gap-3 md:gap-5 items-left">
              <div className="flex items-center gap-2 md:gap-3">
              <FaHome />
              <h1>
                Home
              </h1>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
              <MdPeopleAlt />
              <h1>
                Members
              </h1>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
              <RiBookFill />
              <h1>
                Lending
              </h1>
              </div>
            </section>
          </section>
        </aside>
        {/* </Sidebar> */}
        <section className="col-[2/5]">
        {children}
        </section>
        </main>
      </body>
    </html>
  );
}
