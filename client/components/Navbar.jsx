import React from 'react'
import "../css/navbar.css"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-[109px] bg-[#F0F9FF]">
      <div className="flex justify-around w-[200px] bg-[#4F86E7] font-bold text-white py-3 px-7 rounded-full text-3xl">
        <div className="">
          <img src="brain_icon.png" alt="" />
        </div>
        <div class="vertical_line"></div>

        <p>Tangled</p>
      </div>
      <div className="flex w-[800px] justify-around items-center text-[#4F86E7]  rounded-lg  ">
        <Link href={"#"} className="border-b-2 border-[#4F86E7]">
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
          className="px-3 py-1 border bg-[#212121] rounded-full text-white px-4 py-2"
        >
          Connect Wallet
        </Link>
      </div>
    </div>
  );
}

export default Navbar