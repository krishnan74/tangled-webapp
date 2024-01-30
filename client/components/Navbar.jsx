"use client"
import React from "react";
import "../css/navbar.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import WalletConnectButton from "./WalletConnectButton";

const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Define a function to check if a given path matches the current pathname
  const isCurrentTab = (path) => {
    return pathname === path;
  };

  return (
    <div className="flex justify-around items-center h-[109px] bg-[#F0F9FF]">
      <div className="flex justify-evenly w-[200px] items-center bg-[#4F86E7] font-bold text-white py-3 px-7 rounded-full text-3xl">
        <div className="">
          <Image
            src="/brain_white.png"
            width={80}
            height={80}
            alt="Picture of the author"
            className="mr-8"
          />
        </div>
        <div>
          <p>Tangled</p>
        </div>
      </div>

      <div className="flex w-[800px] justify-around items-center text-[#4F86E7]  rounded-lg  ">
        <Link
          href={"/"}
          className={`px-3 py-1 ${
            isCurrentTab("/") ? "border-b-2 border-[#4F86E7]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href={"/web3"}
          className={`px-3 py-1 ${
            isCurrentTab("/web3") ? "border-b-2 border-[#4F86E7]" : ""
          }`}
        >
          Upload
        </Link>
        <Link
          href={"/diagnose"}
          className={`px-3 py-1 ${
            isCurrentTab("/diagnose") ? "border-b-2 border-[#4F86E7]" : ""
          }`}
        >
          Diagnose
        </Link>
        <Link
          href={"/retrieve"}
          className={`px-3 py-1 ${
            isCurrentTab("/retrieve") ? "border-b-2 border-[#4F86E7]" : ""
          }`}
        >
          Retrieve
        </Link>

        <Link
          href={"/chatbot"}
          className={`px-3 py-1 ${
            isCurrentTab("/chatbot") ? "border-b-2 border-[#4F86E7]" : ""
          }`}
        >
          ChatBot
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <WalletConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
