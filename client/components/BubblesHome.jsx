import React from 'react'

const BubblesHome = () => {

    const getRandomDelay = () => {
      return Math.random() * 2000 + "ms";
    };
  return (
    <>
      <div
        className="circle absolute top-[20px] left-[80px]  w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
   
      />
      <div
        className="circle absolute top-[80px]  right-[160px] w-12 h-12 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}

      />
      <div
        className="circle absolute top-[30px] left-[300px]  w-20 h-20 rounded-full animate-float bg-[#4F86E7] opacity-60 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
        
      />

      <div
        className="circle absolute top-[140px]  right-[40px] w-10 h-10 rounded-full animate-float bg-[#4779d1] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}

      />
      <div
        className="circle absolute top-[80px] left-[260px]  w-14 h-14 rounded-full animate-float bg-[#8fb5f6] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
        
      />

      <div
        className="circle absolute top-[120px] right-[180px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
        
      />

      <div
        className="circle absolute top-[180px] left-[160px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
       
      />

      <div
        className="circle absolute top-[230px]  right-[360px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
     
      />

      <div
        className="circle absolute top-[140px] left-[640px] w-12 h-12 rounded-full animate-float bg-[#c4daff] opacity-60 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
        
      />
      <div
        className="circle absolute top-[320px]  right-[160px] w-18 h-18 rounded-full animate-float bg-[#8299c1] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
       
      />
      <div
        className="circle absolute top-[210px] left-[520px]  w-14 h-14 rounded-full animate-float bg-[#6c93d6] opacity-60 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
  
      />

      <div
        className="circle absolute top-[20px]  right-[190px] w-16 h-16 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
       
      />
      <div
        className="circle absolute top-[180px] left-[360px] w-12 h-12 rounded-full animate-float bg-[#4F86E7] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
    
      />
      <div
        className="circle absolute top-[0px]  right-[300px] w-20 h-20 rounded-full animate-float bg-[#4F86E7] opacity-60 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}

      />

      <div
        className="circle absolute top-[40px] left-[240px]  w-10 h-10 rounded-full animate-float bg-[#4779d1] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}

      />
      <div
        className="circle absolute top-[200px]  right-[160px] w-14 h-14 rounded-full animate-float bg-[#8fb5f6] opacity-50 cursor-pointer z-0"
        style={{ animationDelay: getRandomDelay() }}
     
      />
    </>
  );
}

export default BubblesHome