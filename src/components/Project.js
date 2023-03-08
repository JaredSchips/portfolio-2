import Image from "next/image"

export default function Project({ title, src, url, githubUrl }) {
  return (
    <div>
      <h3 className="text-center font-bold mb-2 text-xl">{title}</h3>
      <a href={url}><Image
        src={src}
        width={400}
        height={400}
        alt=''
        className='transition-rounded duration-500 rounded-[150px] hover:rounded-3xl hover:cursor-pointer'
      /></a>
      <div className="flex justify-evenly mt-5">
        <a href={url}><Image src='/website.svg' width={32} height={32} alt='Website link' /></a>
        <a href={githubUrl}><Image src='/github.svg' width={32} height={32} alt='Github link' /></a>
      </div>
    </div>
  )
}