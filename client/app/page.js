"use client";
import React, { useState, useEffect, useRef } from "react";
import Card from "@/components/CardGreen";
import "../app/globals.css";
import CardGreen from "@/components/CardGreen";
import AirpodsCard from "@/components/AirpodsCard";
import ProfileCard from "@/components/ProfileCard";
import BubblesHome from "@/components/BubblesHome";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import Image from "next/image";

const Page = () => {
  const [message, setMessage] = useState("Nothing");
  const circlesRef = useRef([]);

  

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

   
    circlesRef.current = Array.from(document.querySelectorAll(".circle"));
  }, []);

  const getRandomDelay = () => {
   
    return Math.random() * 2000 + "ms";
  };

  const moveCircle = (event) => {
    const circle = event.target;

 
    const x = Math.random() * 200 - 100; 
    const y = Math.random() * 200 - 100; 

  
    circle.style.transition = "transform 0.5s ease";
    circle.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseMove = (event) => {
   
    const mouseX = event.clientX;
    const mouseY = event.clientY;


    circlesRef.current.forEach((circle) => {
      const circleRect = circle.getBoundingClientRect();
      const circleX = circleRect.left + circleRect.width / 2;
      const circleY = circleRect.top + circleRect.height / 2;

      const deltaX = mouseX - circleX;
      const deltaY = mouseY - circleY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = 150; 

      if (distance < maxDistance) {
      
        circle.style.transition = "transform 0.5s ease";
        circle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      } else {
    
        circle.style.transition = "transform 0.5s ease";
        circle.style.transform = "translate(0, 0)";
      }
    });
  };

  return (
    <>
      <div className="relative" onMouseMove={handleMouseMove}>
        <BubblesHome />
        <div className="z-10">
          <p className="text-7xl text-center text-[#212121] font-semibold mt-32 tracking-wide">
            Decentralized
          </p>

          <p className="text-7xl text-center  text-[#4F86E7] font-semibold tracking-wide">
            Health Care Platform
          </p>

          <p className="text-7xl text-center  text-[#212121] font-semibold tracking-wide">
            AI - Assisted
          </p>
          <p className="text-2xl text-center text-[#4d4d4d] font-semibold tracking-wide">
            Made for{" "}
            <span
              className="text-2xl text-center font-semibold tracking-wide"
              style={{
                backgroundImage: "linear-gradient(to right, #ff6347, #32cd32)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Hack'o Holics
            </span>
          </p>
          <section className="py-16">
            <div className="container mx-auto text-center">
              <p className="text-lg text-gray-600">
                Tangled is a unified digital platform where patient details are
                stored in a secure manner using decentralization
              </p>
              <button className="bg-[#4F86E7] text-white font-semibold py-2 px-4 mt-8 rounded-full">
                Get Started
              </button>
            </div>
          </section>
        </div>

        <div className="flex justify-around mb-32">
          <CardGreen
            feature="Decentralized EHR"
            description="Tangled stores the information about patients in IPFS"
            techstackimage="/solidity.png"
            techstack="Solidity"
            link = "/web3"
          />
          <CardGreen
            feature="Predictive Analysis (AI)"
            description="Tangled uses large dataset of patient's history and can predict diagnosis"
            techstackimage="/python.png"
            techstack="Python"
            link = "/diagnose"
          />
          <CardGreen
            feature="Anti Phobia (VR)"
            description="Tangled helps people with phobia to overcome them using VR environment"
            techstackimage="/unity.png"
            techstack="Unity"
            link = "#"
          />
        </div>

        <PrimaryFeatures/>

        <div className="flex mb-10 mt-20 justify-around">
          <div className="flex flex-col w-1/2">
            <div>
              <p className="text-7xl text-center text-[#212121] font-semibold tracking-wide">
                How it works?
              </p>
            </div>

            <div className="mt-10">
              <p className="text-left text-1xl px-[60px] text-gray-600">
                Tangled's architecture is designed to provide scalability and
                speed while maintaining security and decentralization. It is
                resilient to attacks, as each transaction is validated by
                multiple nodes in the network, reducing the risk of a single
                point of failure.
              </p>
            </div>
          </div>

          <div className="mr-[80px] w-full bg-white rounded-lg py-4 flex justify-center arch_div shadow-lg">
            <Image
              src={"/sys_arch.png"}
              height={"900"}
              width={"900"}
              className="border-2  p-5 rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

