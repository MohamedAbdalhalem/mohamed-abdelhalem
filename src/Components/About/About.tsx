import img from '../../assets/sagar-full-pose.webp'
export default function About() {
  return (
    <div id='about' className="px-7 2xl:px-40 bg-[#F9FAFB] dark:bg-[#111827] py-15 md:py-25">
          <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[#D1D5DB] px-5 py-1 rounded-xl mx-auto mb-10 font-medium">About me</h3>
          <div className="grid md:grid-cols-2 gap-20">
              <div>
                  <div className="bg-[#E5E7EB] h-[350px] md:h-[400px] lg:h-[500px] dark:bg-[#374151] w-2/3 mx-auto md:w-[80%] lg:w-[65%] md:p-0 px-5 pb-5  relative top-6">
                      <img
                          src={img}
                          className="w-[90%] md:w-full h-full absolute bottom-6 left-3  md:left-10 border-8 border-white dark:border-[#030712]  object-cover"
                          alt=""
                      />
  
                  </div>
              </div>
              <div>
                  <h3 className='text-[#111827] text-2xl dark:text-[#F9FAFB] md:text-3xl font-bold mb-5'>Curious about me? Here you have it:</h3>
                  <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-4 '>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                  <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-4 '>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                  <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-4 '>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                  <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-4 '>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                  <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-4 '>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                  <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-4 '>Finally, some quick bits about me.</p>
                  <ul className='grid list-disc ms-4 md:grid-cols-2 gap-3 mb-4'>
                      <li className='text-[#4B5563] dark:text-[#D1D5DB] text-base'>B.E. in Computer Engineering</li>
                      <li className='text-[#4B5563] dark:text-[#D1D5DB] text-base'>Avid learner</li>
                      <li className='text-[#4B5563] dark:text-[#D1D5DB] text-base'>Full time freelancer</li>
                      <li className='text-[#4B5563] dark:text-[#D1D5DB] text-base'>Aspiring indie hacker</li>
                  </ul>
                  <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-4 '>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
              </div>
          </div>
    </div>
  )
}
