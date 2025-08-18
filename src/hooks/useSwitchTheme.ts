import { useEffect, useState } from "react"

export default function useSwitchTheme() {
  const [darkMood,setDarkMood] = useState('light')
  function theme() {
    if (localStorage.getItem('theme') == 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
      setDarkMood('light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
      setDarkMood('dark')
    }
  }
  useEffect(() => {
    if (localStorage.getItem('theme') == 'dark') {
      setDarkMood('dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
       setDarkMood('light')
    }
  })
    return {darkMood,theme}
}
