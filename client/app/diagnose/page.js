"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Bubbles from "@/components/Bubbles";
import Loader from "@/components/Loader";
import LSFWCard from "@/components/LSFWCard";
import NutrientsCard from "@/components/NutrientsCard";

const DiagnosePage = () => {
  const [path, setPath] = useState("Loading...");
  const [loaderdiv, toggleLoaderDiv] = useState(false);
  const [selectedFoodType, setSelectedFoodType] = useState("");

  // Define a function to handle the change in the dropdown selection

  useEffect(() => {}, [path]);


  return (
    <div className="flex justify-evenly">
      <NutrientsCard />
      <LSFWCard />
    </div>
  );
};

export default DiagnosePage;
