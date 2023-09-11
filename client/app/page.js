"use client";
import React, { useState, useEffect, useRef } from "react";
import Card from "@/components/CardGreen";
import "../app/globals.css";
import CardGreen from "@/components/CardGreen";
import AirpodsCard from "@/components/AirpodsCard";
import ProfileCard from "@/components/ProfileCard";


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
        <div
          className="circle absolute top-[20px] left-[80px]  w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[80px]  right-[160px] w-12 h-12 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[30px] left-[300px]  w-20 h-20 rounded-full animate-float bg-[#4F86E7] opacity-60 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <div
          className="circle absolute top-[140px]  right-[40px] w-10 h-10 rounded-full animate-float bg-[#4779d1] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[80px] left-[260px]  w-14 h-14 rounded-full animate-float bg-[#8fb5f6] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <div
          className="circle absolute top-[120px] right-[180px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <div
          className="circle absolute top-[180px] left-[160px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <div
          className="circle absolute top-[230px]  right-[360px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <div
          className="circle absolute top-[140px] left-[640px] w-12 h-12 rounded-full animate-float bg-[#c4daff] opacity-60 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[320px]  right-[160px] w-18 h-18 rounded-full animate-float bg-[#8299c1] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[210px] left-[520px]  w-14 h-14 rounded-full animate-float bg-[#6c93d6] opacity-60 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <div
          className="circle absolute top-[20px]  right-[190px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[180px] left-[360px] w-12 h-12 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[0px]  right-[300px] w-20 h-20 rounded-full animate-float bg-[#4F86E7] opacity-60 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <div
          className="circle absolute top-[40px] left-[240px]  w-10 h-10 rounded-full animate-float bg-[#4779d1] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />
        <div
          className="circle absolute top-[200px]  right-[160px] w-14 h-14 rounded-full animate-float bg-[#8fb5f6] opacity-50 cursor-pointer z-0"
          style={{ animationDelay: getRandomDelay() }}
          onMouseEnter={moveCircle}
        />

        <p className="text-7xl text-center text-[#212121] font-semibold mt-32 tracking-wide">
          Decentralized
        </p>

        <p className="text-7xl text-center  text-[#4F86E7] font-semibold tracking-wide">
          Health Care Platform
        </p>

        <p className="text-7xl text-center  text-[#212121] font-semibold tracking-wide">
          AI - Assisted
        </p>
        <section className="py-16">
          <div className="container mx-auto text-center">
            <p className="text-lg text-gray-600">
              Tangled is a unified digital platform
            </p>
            <button className="bg-[#4F86E7] text-white font-semibold py-2 px-4 mt-8 rounded-full">
              Get Started
            </button>
          </div>
        </section>
      </div>
      <div className="flex justify-around mb-10">
        <CardGreen
          feature="Predictive Analysis (AI)"
          description="Tangled uses large dataset of patient's history and can predict diagnosis"
        />
        <CardGreen
          feature="Decentralized EHR"
          description="Tangled stores the information about patients in IPFS"
        />
        <CardGreen
          feature="Unity Phobia"
          description="Tangled helps people with phobia to overcome them using VR training"
        />
      </div>

    </>
  );
};

export default Page;

