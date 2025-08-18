import html5 from '../../assets/Skills/icons8-html-5.svg'
import css3 from '../../assets/Skills/icons8-css3.svg'
import bootstrap from '../../assets/Skills/icons8-bootstrap.svg'
import tailwind from '../../assets/Skills/icons8-tailwind-css.svg'
import javascript from '../../assets/Skills/icons8-javascript.svg'
import typescript from '../../assets/Skills/icons8-typescript.svg'
import jquery from '../../assets/Skills/icons8-jquery.svg'
import sass from '../../assets/Skills/icons8-sass.svg'
import react from '../../assets/Skills/icons8-react.svg'
import redux from '../../assets/Skills/icons8-redux.svg'
import next from '../../assets/Skills/icons8-nextjs.svg'
import github from '../../assets/Skills/icons8-github-96.svg'
import Skill from '../Skill/Skill'

export default function Skills() {
  return (
    <div id="Skills" className="px-7 2xl:px-40 py-15 md:py-25 bg-[#F9FAFB] dark:bg-[#111827]">
          <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[#D1D5DB] px-5 py-1 rounded-xl mx-auto mb-4 font-medium">Skills</h3>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] text-center text-xl mb-10">The skills, tools and technologies I am really good at:</p>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-7">
        <Skill img={html5} name='Html' link='https://html.com/' />
        <Skill img={css3} name='Css' link='https://css-tricks.com/' />
        <Skill img={bootstrap} name='Bootstrap' link='https://getbootstrap.com/' />
        <Skill img={tailwind} name='Tailwind Css' link='https://tailwindcss.com/' />
        <Skill img={javascript} name='Javascript' link='https://developer.mozilla.org/en-US/docs/Web/JavaScript' />
        <Skill img={typescript} name='Typescript' link='https://www.typescriptlang.org/' />
        <Skill img={jquery} name='Jquery' link='https://jquery.com/' />
        <Skill img={sass} name='Sass' link='https://sass-lang.com/' />
        <Skill img={react} name='React' link='https://react.dev/' />
        <Skill img={redux} name='Redux' link='https://redux-toolkit.js.org/' />
        <Skill img={next} name='Next' link='https://nextjs.org/' />
        <Skill img={github} name='Github' link='https://github.com/' />
      </div>
    </div>
  )
}
