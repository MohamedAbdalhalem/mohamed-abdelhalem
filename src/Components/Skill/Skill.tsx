
export default function Skill({img,name,link} : {img: string , name : string,link : string | undefined}) {
  return (
    <div  className='text-center '>
      <a
        href={link}
        target="_blank"
      >
        <img src={img} className='w-3/4  sm:w-3/5 md:w-1/2  mx-auto mb-2 hover:scale-110 cursor-pointer' alt="" />
      </a>
                  
          <p className='text-[#4B5563] dark:text-[#D1D5DB] text-lg'>{ name }</p>
    </div>
  )
}
