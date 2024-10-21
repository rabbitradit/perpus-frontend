import Image from "next/image";
import { BsPeopleFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-10">
      <h1 className="text-xl">HOME</h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="flex gap-5 items-center border-blue-400 border-2 rounded-md p-4" >
          <BsPeopleFill color='#60a5fa' className="w-20 h-20"/>
          <article className="flex flex-col text-2xl text-blue-400">
            <h1 className="font-bold">Members</h1>
            <p className="font-light">129</p>
          </article>
        </div>
        <div className="flex gap-5 items-center border-blue-400 border-2 rounded-md p-4" >
          <RiFilePaperFill color='#60a5fa' className="w-20 h-20"/>
          <article className="flex flex-col text-2xl text-blue-400">
            <h1 className="font-bold">Lendings</h1>
            <p className="font-light">129</p>
          </article>
        </div>
        <div className="flex gap-5 items-center border-blue-400 border-2 rounded-md p-4" >
          <FaBook color='#60a5fa' className="w-20 h-20"/>
          <article className="flex flex-col text-2xl text-blue-400">
            <h1 className="font-bold">Books</h1>
            <p className="font-light">129</p>
          </article>
        </div>
      </section>
    </main>
  );
}