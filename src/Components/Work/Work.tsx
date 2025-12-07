import Project from '../Project/Project'
import Buyno from '../../assets/Projects/Buyno.png'
import SoicoHub from '../../assets/Projects/SoicoHub.png'
import CMBD from '../../assets/Projects/CMBD.png'
import Fresh_Cart from '../../assets/Projects/Fresh_Cart.png'
import Notta from '../../assets/Projects/Notta.png'
import Weather from '../../assets/Projects/Weather.png'
import { useState } from 'react'
export default function Work() {
  const [loadMore,setLoadMore] = useState(false)
  return (
    <div id='Work' className="px-7 py-15 md:py-25  dark:bg-[#030712]">
          <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[rgb(209,213,219)] px-5 py-1 rounded-xl mx-auto mb-4 font-medium">Work</h3>
      <p className="text-[#4B5563] text-center dark:text-[#D1D5DB] text-xl mb-10">Some of the noteworthy projects I have built:</p>
      
      <Project
        order='odd'
        link='https://buyno-sigma.vercel.app/'
        code='https://github.com/MohamedAbdalhalem/Buyno'
        img={Buyno}
        name='Buyno'
        description='E-Commerce Web Application that delivers a full online shopping experience — from secure authentication to placing orders with multiple payment methods.'
        tools={['React ','TypeScript','Tailwind CSS','Flowbite React','TanStack Query ','Context API','React Hook Form','Axios']}
      />
      <Project
        order='even'
        code='https://github.com/MohamedAbdalhalem/SoicoHub'
        link='https://soico-hub-zowq.vercel.app/'
        img={SoicoHub}
        name='Facebook'
        description='social media web app built with Next.js 16 and TypeScript.
        Users can sign up, log in, create posts, comment on others posts, and manage their profiles '
        tools={['Next.js','TypeScript','Mui','Emotion','Axios','React Hook Form','Day.js','JS-Cookie']}
      />
      <Project
        order='odd'
        code='https://github.com/MohamedAbdalhalem/CMDB'
        link='https://cmdb-two.vercel.app/'
        img={CMBD}
        name='CMBD | Cinema & Media Database'
        description='web application for browsing movies and TV shows Built with React + TypeScript, and powered by TMDB API'
        tools={['React','TypeScript','Tailwind CSS','Flowbite React','Redux Toolkit','TanStack React Query','Firebase Auth','React Hook Form','React Multi Carousel','Date-fns']}
      />
      {loadMore && <>
        <Project
          order='even'  
          code='https://github.com/MohamedAbdalhalem/fresh-cart'
        link='https://fresh-cart-mu-nine.vercel.app/'
        img={Fresh_Cart}
        name='Fresh_Cart'
        description='E-Commerce Web Application that delivers a full online shopping experience — from secure authentication to placing orders with multiple payment methods.'
        tools={['React ','JavaScript','Tailwind CSS','Flowbite Css','TanStack Query ','Context API','Formik','Axios']}
      />
        <Project
          order='odd'
          code='https://github.com/MohamedAbdalhalem/notta'
        link='https://notta-one.vercel.app/'
        img={Notta}
        name='Notta'
        description='Notes App built with Next.js.
        Users can register, log in, and manage their personal notes with full CRUD functionality (Create, Read, Update, Delete).'
        tools={['Next.js','Redux Toolkit','React Redux','Mui','React Hook Form','Axios','js-cookie']}
      />
        <Project
          order='even'
          code='https://github.com/MohamedAbdalhalem/weather'
        link='https://weather-sandy-theta.vercel.app/'
        img={Weather}
        name='Weather'
        description=' Weather App built as part of my journey in Front-End Development.
        This application allows users to search in real-time for any city and view a 3-day weather forecast starting from the searched date.'
        tools={['HTML5','CSS3','Bootstrap 5','JavaScript (Vanilla)','Fetch Api']}
      />
      </>}
      <div className="w-full flex justify-center mt-10">
        {!loadMore && <button
          onClick={() => setLoadMore(true)}
      type="button"
      className="px-6 py-3 rounded-2xl border cursor-pointer border-gray-300 dark:border-gray-600 
                 text-sm font-medium text-[#4B5563] dark:text-[#D1D5DB] 
                 shadow-sm hover:shadow-md transition"
    >
      Load more
    </button>}
  </div>
    </div>
  )
}
