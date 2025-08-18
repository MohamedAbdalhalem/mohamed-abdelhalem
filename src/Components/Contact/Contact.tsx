import useCopy from "../../hooks/useCopy"


export default function Contact() {
  const {copiedEmail,copiedPhone,copyEmail,copyPhone} = useCopy()
  return (
    <div id="Content" className="px-7 py-15 md:py-25 bg-[#F9FAFB] dark:bg-[#111726]">
      <div className="max-w-3xl   mx-auto text-center">
              <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[#D1D5DB] px-5 py-1 rounded-xl mx-auto mb-4 font-medium">Get in touch</h3>
              <p className="text-xl text-[#4B5563] dark:text-[#D1D5DB] mb-12">What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
              <h2 className="text-[#111827]  dark:text-[#F9FAFB] text-lg md:text-4xl font-bold mb-6">
                  <i className="fa-solid dark:text-[#D1D5DB] text-base   fa-envelope md:text-2xl me-2 text-[#4B5563]"></i>mohamed3ab7alem@gmail.com
          <span className="relative">
            <i onClick={copyEmail} className="copyEmail fa-solid dark:text-[#D1D5DB]  fa-copy cursor-pointer text-base md:text-2xl ms-2 text-[#4B5563]"></i>
            {copiedEmail && <span className="w-fit absolute -top-7 right-1/3 translate-x-1/2 bg-[#E5E7EB] dark:bg-[#374151] text-xs text-[#4B5563] dark:text-[#D1D5DB] px-3 py-1 rounded-xl  font-medium">Copied</span>}
          </span>
              </h2>
              <h2 className="text-[#111827] text-lg dark:text-[#F9FAFB] md:text-4xl font-bold mb-12">
                  <i className="fa-solid dark:text-[#D1D5DB]  fa-phone text-base md:text-2xl me-2 text-[#4B5563]"></i> +201013625625
          <span className="relative">
            <i onClick={copyPhone} className="copyEmail fa-solid dark:text-[#D1D5DB]  fa-copy cursor-pointer text-base md:text-2xl ms-2 text-[#4B5563]"></i>
            {copiedPhone && <span className="w-fit absolute -top-7 right-1/3 translate-x-1/2 bg-[#E5E7EB] dark:bg-[#374151] text-xs text-[#4B5563] dark:text-[#D1D5DB] px-3 py-1 rounded-xl  font-medium">Copied</span>}
          </span>
              </h2>
              <p className="text-base text-[#4B5563] dark:text-[#D1D5DB]  mb-3">You may also find me on these platforms!</p>
              <div>
          <a
            href="https://github.com/MohamedAbdalhalem"
            target="_blank"
          >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-github me-3 text-xl text-[#4B5563] "></i>
                  </a>
          <a
            href="https://www.linkedin.com/in/mohamed-abdelhalem-a158922a6/"
            target="_blank"
                  >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-linkedin-in me-3 text-[#4B5563] text-xl"></i>
                  </a
                  >
          <a
            href="https://www.facebook.com/share/161FMH1cCQ/"
            target="_blank"
                  >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-facebook-f text-[#4B5563] text-xl"></i>
                  </a
                  >
              </div>
      </div>
    </div>
  )
}
