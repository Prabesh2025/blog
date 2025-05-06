import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import detailImg from "../../assets/ball1.webp"

export default function BlogReadPage() {

    const url = useLocation();

    // console.log(url.pathname.split("/")[2]); 
    const id = (url.pathname.split("/")[2]); 

    const [singleBlog, setSingleBlog] = useState(null);

    const fetchSingleBlog = async()=>{
        try {
            const response = await axios.get(`https://blog-gr7a.onrender.com/get-single-blog/${id}`);
            // console.log(response.data.data);
            setSingleBlog(response.data.data);

        } catch (error) {
            console.log("something went wrong", error);
        }
    };
    console.log(singleBlog);

    useEffect(()=>{
       
        fetchSingleBlog();

    },[])
    


  return (

    <div className='mt-10 w-10/12 mx-auto bg-gray-100 p-10  border-l-8 border-l-orange-500 rounded-xl shadow-lg'>

    { singleBlog && <div className='grid  lg:grid-cols-2 gap-6'>
      
       <img src={detailImg} alt="Ball" height={500} width={500} className=' h-70 rounded-xl object-cover'/>
       <div className='space-y-6'>
       <p className='text-3xl font-medium'> {singleBlog.title}</p>
       <p className='text-xl font-semibold opacity-90  '>{singleBlog.description}</p>
       <p className=' font-medium opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id dolorem non, illo tempora ipsum at obcaecati laboriosam unde, aut esse maxime fugiat labore, modi maiores sed exercitationem fugit! Libero!</p>
       <p>{singleBlog.autherName}</p>
       <p className='text-lg opacity-75'>Time to read - {singleBlog.timeToRead} Min</p>

       </div>
     </div>
     }

    </div>
  )
}
