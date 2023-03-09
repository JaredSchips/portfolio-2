import TextInput from "../components/TextInput"

export default function Contact() {
  return (
    <main className='grid m-auto justify-items-left p-5 sm:w-10/12 md:w-8/12'>
      <h1 className='text-3xl font-bold text-center p-5'>Contact Me</h1>
      
      <TextInput id='name' placeholder='Name' />
      <TextInput id='email' type="email" placeholder='Email Address' required={true} invalidMessage='Invalid Email' ignoredMessage='Email is required' />
      <TextInput id='message' type="textarea" placeholder='Message' required={true} ignoredMessage='Message is required' />

      <button type="submit" className="transition-all duration-300 font-semibold backdrop-brightness-110 hover:backdrop-brightness-125 rounded-3xl m-6 p-3 w-28">Submit</button>
    </main>
  )
}
