
export default function Project(
    { img,name,description,tools,link,order,code }:
        {
            img: string,
            name: string,
            description: string,
            tools: string[],
            link: string,
      order: 'odd' | 'even',
            code:string
     }
) {
  return (
     <div className="max-w-6xl mx-auto rounded-lg overflow-hidden grid md:grid-cols-2 mb-10 shadow-lg">
      <div className={`bg-[#F9FAFB] p-7 md:p-10 dark:bg-[#374151] flex flex-col justify-center oder-1 
          ${order === 'even' ? 'md:order-2' : 'md:order-1'}
          `}>
          <a
            href={link}
            target='_blank'
          >
            <img src={img} className='w-full h-70 object-fill  rounded-lg shadow-lg hover:scale-105 transition-all ' alt="" />
          </a>
        </div>
      <div className={`p-10  dark:bg-[#1F2937] flex flex-col justify-center
      oder-2
      ${order === 'even' ? 'md:order-1' : 'md:order-2'}
          `}> 
              <h3 className='text-[#111827] dark:text-[#F9FAFB] text-xl mb-7 '>
                  {name}
          </h3>
              <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-7'>
                  {description}
          </p>
        <div className='flex flex-wrap gap-2 mb-7 justify-start '>
                  {tools.map(tool => <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[rgb(209,213,219)] px-5 py-1 rounded-xl font-medium">{ tool }</h3>)}    
        </div>
        <a
          href={code}
          target='_blank'
        >
          <i className="fa-solid fa-code dark:text-[#D1D5DB] text-[#4B5563] text-xl"></i>
        </a>
        </div>
        
      </div>
  )
}
