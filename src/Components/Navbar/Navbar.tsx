import useSidebar from "../../hooks/useSidebar"
import useSwitchTheme from "../../hooks/useSwitchTheme"

export default function Navbar() {
  const { hideSide, showSide } = useSidebar()
  const { darkMood, theme } = useSwitchTheme()
  const links : string[] =['Skills','Work','Content']
  return (
    <div className="relative">
      <nav className="flex  backdrop-blur-xl justify-between items-center px-7 2xl:px-40 py-4 fixed w-full z-50">
        <a href="#Home" className="text-3xl  cursor-pointer font-bold dark:text-white">&lt;MA /&gt;</a>
        <div className="sidebarButton md:hidden">
          <i
            onClick={showSide}
            className="text-xl dark:text-white font-semibold cursor-pointer text-[#4B5563] fa-solid fa-bars"></i>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="list-none flex dark:text-white gap-5 border-r-2 pe-5 me-5 border-gray-300 ">
            {links.map(link => <li className="text-base cursor-pointer dark:hover:text-white text-[#4B5563] dark:text-[#E1E4E8] hover:text-black transition-all font-medium"><a href={`#${link}`}>{ link }</a></li>)}
          </ul>
          <div>
            <div className="flex items-center gap-4">
              {darkMood == 'light'  ?<i onClick={theme} className="fa-solid   fa-moon text-xl text-[#4B5563] hover:text-black   transition-all cursor-pointer"></i> : <i onClick={theme} className="fa-solid fa-sun dark:text-[#E1E4E8] dark:hover:text-white transition-all cursor-pointer text-xl"></i> }
  
              <a
                href="/Mohamed_Abdalhalim_CV.pdf"
                download type="button" className="text-white cursor-pointer bg-[#050708] hover:bg-[#050708]/90 dark:text-black dark:bg-white  shadow-sm focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-base px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-200 dark:hover:bg-gray-200">
              Downloud CV
            </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="sidebar  z-50 fixed overflow-hidden backdrop-blur-[4px]  top-0 w-full h-screen">
        <div className="w-[70%] dark:bg-[#030712]  sm:max-w-[42%] ms-auto bg-white h-full ">
          <div className="p-5 flex justify-between items-center  border-b-1 border-gray-200 dark:border-gray-700">
            <a onClick={hideSide} href="#Home" className="text-2xl  cursor-pointer font-bold dark:text-white">&lt;MA /&gt;</a>
            <i onClick={hideSide} className="fa-solid dark:text-white  text-lg text-[#4B5563] cursor-pointer fa-xmark"></i>
          </div>
          <ul className="list-none p-5 border-b-1 dark:border-gray-700 border-gray-200">
            {links.map(link => <li className="text-base cursor-pointer dark:text-[#D1D5DB]  text-[#4B5563] hover:text-black dark:hover:text-white  transition-all font-medium mb-3 "><a onClick={hideSide} href={`#${link}`}>{ link }</a></li>)}
          </ul>
          <div className="p-5 flex flex-wrap justify-between items-center  ">
            <p className="text-base  dark:text-[#D1D5DB]  text-[#4B5563]">
              Switch Theme</p>
            {darkMood == 'light'  ?<i onClick={theme} className="fa-solid   fa-moon text-xl text-[#4B5563] hover:text-black   transition-all cursor-pointer"></i> : <i onClick={theme} className="fa-solid fa-sun dark:text-[#E1E4E8] dark:hover:text-white transition-all cursor-pointer text-xl"></i> }
            <a
              href="/Mohamed_Abdalhalim_CV.pdf"
              download
              type="button" className="text-white w-full mt-4 cursor-pointer bg-[#050708] hover:bg-[#050708]/90 dark:text-black dark:bg-white  shadow-sm focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-base px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-200 dark:hover:bg-gray-200">
              Downloud CV
            </a>
          </div>
          
        </div>
      </section>
    </div>
  )
}
