import Image from 'next/image'

export default function Home() {
  return (
  <main className='grid m-auto justify-items-center p-5 sm:w-10/12 md:w-7/12'>
    <h1 className='text-3xl font-bold text-center p-5'>About Me</h1>
    <Image
      src='/avatar.png'
      alt='A programmer wearing a hoodie'
      width={300}
      height={300}
    />
    <p className='whitespace-normal'>
      A fullstack web developer, proficient in ReactJS, SQL, MongoDB. Inquisitive, determined, and adaptive.<br></br><br></br>
      Ipsum velit duis eu magna enim non id quis magna in ad. Ex esse consequat sint commodo fugiat sint dolor veniam dolore. Consectetur incididunt nostrud reprehenderit adipisicing laborum non esse ex consequat eu. Sit reprehenderit qui ad duis. Velit voluptate minim minim voluptate laboris dolore minim cillum Lorem. Duis aliquip excepteur in sint excepteur id.
    </p>
  </main>
  )
}
