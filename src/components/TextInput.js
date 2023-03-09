import { useState } from "react"

export default function TextInput({ id, required=false, placeholder='Placeholder', type='text', invalidMessage='', ignoredMessage=''}) {
  const [focused, setFocused] = useState(false)
  const [valid, setValid] = useState(true)
  const [visited, setVisited] = useState(false)
  const [value, setValue] = useState()

  if (type === 'textarea') return (
    <div className="relative m-6">
        <textarea id={id} placeholder={placeholder} required={required && visited && !focused} onFocus={e => {setVisited(true); setFocused(true)}} onBlur={e => setFocused(false)} onChange={e => {setValue(e.target.value); setValid(e.target.validity.valid)}} className={`w-full peer border-gray-800/80 border-b-4 text-lg p-2 rounded-sm bg-transparent placeholder-transparent min-h-full outline-none invalid:border-pink-500`}></textarea>

        <label htmlFor={id} className="transition-all absolute peer cursor-text text-sm font-semibold text-gray-900 left-2 -top-4 peer-focus:text-sm peer-focus:left-2 peer-focus:-top-4 peer-focus:text-gray-900 peer-focus:font-semibold peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-800/50 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal">{placeholder}</label>

        {!valid && <div className="font-bold text-pink-500">{invalidMessage}</div>}
        
        {(required && visited && !focused && !value) && <div className='font-bold text-pink-500'>{ignoredMessage}</div>}
    </div>
  )

  else return (
    <div className="relative m-6">
        <input id={id} type={type} placeholder={placeholder} required={required && visited && !focused} onFocus={e => {setVisited(true); setFocused(true)}} onBlur={e => setFocused(false)} onChange={e => {setValue(e.target.value); setValid(e.target.validity.valid)}} className="peer border-gray-800/80 border-b-4 text-lg p-2 rounded-sm bg-transparent placeholder-transparent outline-none invalid:border-pink-500"></input>

        <label htmlFor={id} className="transition-all absolute peer cursor-text text-sm font-semibold text-gray-900 left-2 -top-4 peer-focus:text-sm peer-focus:left-2 peer-focus:-top-4 peer-focus:text-gray-900 peer-focus:font-semibold peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-800/50 peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal">{placeholder}</label>

        {!valid && <div className="font-bold text-pink-500">{invalidMessage}</div>}
        
        {(required && visited && !focused && !value) && <div className='font-bold text-pink-500'>{ignoredMessage}</div>}
    </div>
  )
}

