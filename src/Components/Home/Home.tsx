
export default function Home() {
  return (
    <div id='Home' className="px-7 2xl:px-40 py-30 md:py-50 grid grid-cols-1  gap-15 md:gap-0 dark:bg-[#030712]">
      <div className=" md:pe-20 lg:pe-40 ">
              <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#111827] font-bold mb-4 dark:text-white">Hi, I'm Mohamed 👋</h1>
        <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-6 text-base mb-12">I'm a Front-End Developer with strong skills in React, HTML, CSS, TypeScript, and JavaScript.
          Focused on building responsive and user-friendly web applications.I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p> 
              <p className="text-[#4B5563] dark:text-[#D1D5DB] text-base mb-2"><i className="fa-solid fa-location-dot me-2"></i>Tanta, Egypt</p>
              <p></p>
              <p className="text-[#4B5563] dark:text-[#D1D5DB] text-base"><i className="fa-solid fa-circle me-2.5 text-sm text-[#10B981] mb-12"></i>Available for new projects</p>
              <p></p>
              <div>
          <a
            href='https://github.com/MohamedAbdalhalem'
            target='_blank'
          >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-github me-3 text-lg text-[#4B5563] "></i>
                  </a >
          <a
            href='https://www.linkedin.com/in/mohamed-abdelhalem-a158922a6/'
            target='_blank'
          >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-linkedin-in me-3 text-[#4B5563] text-lg"></i>
                  </a>
          <a
            href='https://www.facebook.com/share/161FMH1cCQ/'
            target='_blank'
          >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-facebook-f text-[#4B5563] text-lg"></i>
                  </a>
              </div>
          </div>
          

    </div>
  )
}
