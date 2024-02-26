import { useState,useCallback,useEffect } from 'react'



function App() {
  const[Length, setLength] = useState(8)
  const[Numbers, setNumbers] = useState(false)
  const[Character, setCharacter] = useState(false)
  const[password,setpassword] =useState("")

  const passwordGenerator = useCallback(() => {
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""

    if(Character) str += "!@#%$%^&*(){}"
    if(Numbers) str += "1234567890"

    for (let i = 1; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
   setpassword(pass)

  }, [Length, Character,Numbers,setpassword])

  useEffect(()=>{passwordGenerator()}, [Character,Numbers,Length,passwordGenerator])

  return (
    <>
    <div className='bg-black .pb-20'>
    <h1 className='text-white flex justify-center '>Password generator</h1>

    <input type='checkbox' defaultChecked={Character} onChange={()=> {setCharacter((prev) => !prev)}}></input>
    <label className='text-white'>Character</label><br/>

    <input type='checkbox' defaultChecked={Numbers} onChange={()=> {setNumbers((prev) => !prev)}}></input>
    <label className='text-white'>Numbers</label><br/>

    <input type='range' min={6} max={50} value={Length} onChange={(e) => {setLength(e.target.value)}}></input>

    <label className='text-white'>Length:{Length}</label><br/>

    <input type ='textbox'  value={password} readOnly placeholder='Password' className='p-0 border border-gray-300 rounded-lg focus:outline-none .pb-px'></input>

    </div>
    </>
  )
}

export default App
