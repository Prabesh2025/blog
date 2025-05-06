import React, { useEffect, useState } from "react";
import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import HeroSection from "./components/HeroSection";
import Animate from "./components/Animate";
import axios from "axios";

export default function App() {
  //hooks (useState, useEffect)
  //syntax
  //const [variable, setterFunction]=useState(initialValue);

  //1. useState
  // const [balance, setBalance] = useState(100);
  // const [myName, setMyName] = useState("Prabesh");
  // const [married, setMarried] = useState(false);

  // console.log(balance);
  // console.log(myName);
  // console.log(married);

  //2. useEffect
  // syntax: useEffect(()=>{},[])

  // useEffect(() => {
  //   setBalance(balance + 400);
  // }, []);



  // Get all blogs
  const [blogs, setBlogs] =useState([]);


 const fetchALLFunction = async () => {
  try {
    const response = await axios.get("http://localhost:4000/get-all-blogs");
    console.log(response.data.data);

    setBlogs(response.data.data);
    
  } catch (error) {
    console.log("Something went wrong", error);
  }
 };
 console.log(blogs)

 useEffect(() => {
  fetchALLFunction();
 },[]);

 

  return (
    <div>

      {/* <p>balance is: {balance}</p>
      <p> my name {myName} </p>
      {married && <p>I am married</p>}
      {!married && <p>I am unmarried</p>}

      <button
        onClick={() => setBalance(balance + 20)}
        className="bg-blue-500 py-2 px-2"
      >
        Change Balance
      </button>

      <button
        onClick={() => setMyName("Prabesh Neupane")}
        className="bg-blue-500 py-2 px-2 ml-4"
      >
        Change Name
      </button>

      <button
        onClick={() => setMarried(!married)}
        className="bg-blue-500 py-2 px-2 ml-4"
      >
        Change Married status
      </button> */}

      <HeroSection blogs={blogs} />
      <Animate />
    </div>
  );
}
