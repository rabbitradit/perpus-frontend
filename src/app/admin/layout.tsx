import Sidebar from "@/component/cores/sidebar";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/component/cores/navbar";
import ReduxProvider from "@/providers/ReduxProvider";
import { ToastContainer } from "react-toastify";
import { Main } from "next/document";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
          <ToastContainer />
          <section className='grid grid-cols-5 gap-5 w-full h-screen bg-white'>
            <aside className="hidden lg:flex col-[1/2] h-full">
              <Sidebar/>
            </aside>
            <section className="col-[1/6] lg:col-[2/6] flex flex-col gap-3 p-5">
              <Navbar />
            {children}
            </section>
          </section>
        </main>
    );
  }