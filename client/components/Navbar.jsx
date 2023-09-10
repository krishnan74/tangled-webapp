import React from 'react'
import "../css/navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-[79px] bg-[#F0F9FF]">
      <div className="flex ">
        <img src="" alt="" width={30} height={30} />
      </div>
      <div className="flex w-[800px] justify-around items-center text-[#4F86E7]  rounded-lg  ">
        <Link
          href={"#"}
          className="bg-[#4F86E7] text-white px-3 py-1 rounded-md"
        >
          Home
        </Link>
        <Link href={"#"} className="px-3 py-1">
          About
        </Link>
        <Link href={"#"} className="px-3 py-1">
          Diagnose
        </Link>
        <Link href={"#"} className="px-3 py-1">
          Profile
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <Link
          href="#"
          className="px-3 py-1 border border-[#4F86E7] hover:bg-[#4F86E7] hover:text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar