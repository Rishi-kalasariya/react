
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from '../Contexts/Theme'
import ThemeBtn from '../Components/Themebtn'
import Card from '../Components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  //previously we have given the method as empty so now here we have defined it
  //we need to define this method with the same name passed in context file
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    //using this theme provider ThmemBtn, Card can get access of the elements in values
    //wrapped in themeProvider
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App