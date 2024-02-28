import { useState, useCallback, useEffect, useRef} from "react"

function App() {

  const [length, setLength] = useState(6)
  const [numberAllowed, SetNumberAllowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  //use hook useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*(){}~<>?"

    for(let i =1; i<=length ; i++){
        let char = Math.floor(Math.random()*str.length + 1) ;  

        pass += str.charAt(char)
    }

    setPassword(pass);

  },[length, numberAllowed, charallowed])

  const passwordCopyToClipboard = useCallback( ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect( ()=>{
    passwordGenerator()
  }, [length, numberAllowed, charallowed, passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center mb-3"> Password Generator </h1>
        <div className="flex shadow-md overflow-hidden rounded-lg mb-4">
          <input
            type="text" value={password} className="outline-none w-full px-2 py-3 " placeholder="Password"  readOnly
          />
          <button className="outline-none bg-red-500 text-black px-3 py-0.5 shrink-0"
          onClick={passwordCopyToClipboard}>copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
              <input 
                type="range" min={6} max={50} value={length} className=" cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" defaultChecked={numberAllowed} id="numberInput"
                onChange={ () => {
                  SetNumberAllowed( (prev)=> !prev);
                }}
              />
              Number
          </div>

          <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" defaultChecked={charallowed} id="charInput"
                onChange={ () => {
                  setCharallowed( (prev)=> !prev);
                }}
              />
              Char
          </div>

        </div>
      </div>
    </>
  )
}

export default App
