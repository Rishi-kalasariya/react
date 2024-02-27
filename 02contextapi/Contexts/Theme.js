import {createContext, useContext} from "react"

//here everything is done in one file only context is created then provider is also written here only and last one is one custome hook

//while creating context variable we can pass some default values and method
export const ThemeContext = createContext({
    lightTheme : () => {}, //method 
    darkTheme : () => {},
    themeMode : "Light", //variable
})

//in the same file we can also make provider
//with context we get by default access to the provider
export const ThemeProvider = ThemeContext.Provider

//this is custome hook using this we will be able to directly get access of Themecontext we don't need to import it everytime 
export default function useTheme(){
    return useContext(ThemeContext)
}